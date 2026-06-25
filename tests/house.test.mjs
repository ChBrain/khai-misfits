import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { validateProject } from "@chbrain/khai-tests";
import { referenceCard } from "@chbrain/khai-arch";
import { validateProjectLanguages } from "@chbrain/khai-language";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Every misfit in the Misfits house conforms to the canon. Green on an
// empty house (no misfits yet); as misfits land, each is validated against its
// type and the wiring the installed engines declare. The house holds; the
// misfits are written in khai-playwright mode.
describe("Misfits house: misfits conform to the canon", () => {
  it("every misfit validates against the canon (zero findings)", () => {
    const misfitsDir = join(root, "misfits");
    // Green on an empty house: until the first misfit lands on a `misfit/*`
    // branch the content dir does not exist yet, so there is nothing to validate.
    const results = existsSync(misfitsDir) ? validateProject({ root, contentDir: misfitsDir }) : [];
    const errors = results.flatMap((r) => r.errors.map((e) => `${r.file}: ${e}`));
    // Advisory findings (e.g. a Company element no plot casts) do not fail the
    // build, but they are surfaced in the CI log so the drift is visible here
    // rather than only to a human reading the rendered play.
    const warnings = results.flatMap((r) => (r.warnings ?? []).map((w) => `${r.file}: ${w}`));
    if (warnings.length) console.warn(`house warnings (advisory):\n${warnings.join("\n")}`);
    expect(errors).toEqual([]);
  });

  it("the management cast conforms; every position has a persona", () => {
    const results = validateProject({ root, contentDir: join(root, "management") });
    const errors = results.flatMap((r) => r.errors.map((e) => `${r.file}: ${e}`));
    expect(errors).toEqual([]);
  });

  it("every misfit satisfies the language policy", () => {
    const results = validateProjectLanguages(root);
    const errors = results.flatMap((r) => r.errors.map((e) => `${r.file}: ${e}`));
    expect(errors).toEqual([]);
  });

  it("house reference warrant conforms to LORE", () => {
    const refPath = existsSync(join(root, "REFERENCES.md"))
      ? join(root, "REFERENCES.md")
      : join(root, "REFERENCE.md");
    expect(existsSync(refPath)).toBe(true);
    const refText = readFileSync(refPath, "utf8");
    expect(() => referenceCard(refText)).not.toThrow();
  });

  it("every misfit is isolated (no relative links pointing outside the misfit's directory)", () => {
    const misfitsDir = join(root, "misfits");
    const errors = [];

    function walk(dir) {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
          if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
          walk(fullPath);
        } else if (entry.name.endsWith(".md")) {
          // Only check files inside a misfit subdirectory (a child directory of misfits/)
          const relativeDir = dirname(fullPath)
            .slice(misfitsDir.length)
            .replace(/^[/\\]+/, "");
          if (!relativeDir) continue;

          const content = readFileSync(fullPath, "utf8");
          const re = /\]\(([^()\s]+)\)/g;
          let m;
          while ((m = re.exec(content))) {
            const target = m[1].split("#")[0];
            if (!target || /^[a-z]+:\/\//i.test(target)) continue;

            // Relative link must be strictly local (no traversal or folder nesting)
            if (target.includes("..") || target.includes("/") || target.includes("\\")) {
              errors.push(`${fullPath}: relative link "${m[1]}" escapes local misfit directory`);
            }
          }
        }
      }
    }

    if (existsSync(misfitsDir)) walk(misfitsDir);
    expect(errors).toEqual([]);
  });
});
