import { describe, it, expect } from "vitest";
import { dirname, join } from "node:path";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import {
  validateProject,
  verifyGatesAgainstCi,
  verifyRelease,
  checkManagement,
  verifyRegistry,
  checkRegistryPacking,
  packedFilesAny,
} from "@chbrain/khai-tests";
import { referenceCard } from "@chbrain/khai-arch";
import { validateProjectLanguages } from "@chbrain/khai-language";
import { REPO, HOUSE } from "./house_root.mjs";

// Two roots, and each reader below takes the one that owns what it reads. The
// misfits, the concordance and the built indexes are the house's and move with
// it; the management cast is the repository's and does not.
const root = HOUSE;

// Every misfit in the Misfits house conforms to the canon. Green on an
// empty house (no misfits yet); as misfits land, each is validated against its
// type and the wiring the installed engines declare. The house holds; the
// misfits are written in khai-playwright mode.
describe("Misfits house: misfits conform to the canon", () => {
  // The timeout is raised because this assertion's **cost grows with the
  // house**: measured at ~1.0s fixed plus ~4.8ms per misfit, so it sits at
  // roughly half of vitest's default 5s at 282 misfits and crosses it at rest
  // somewhere near 840. That is not what made it fail. Load did: anything that
  // doubles wall-clock puts today's 2.4s over the wall, which reads as a flaky
  // gate and is a fixed wall the house is walking toward.
  //
  // A timeout here fails red, so it never passed a bad tree; it failed a good
  // one, which is the failure worth removing, because a gate that cries wolf
  // teaches people to re-run it. 60s is clear of the count for the life of the
  // house and still catches a genuine hang.
  it("every misfit validates against the canon (zero findings)", { timeout: 60_000 }, () => {
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
    const results = validateProject({ root: REPO, contentDir: join(REPO, "management") });
    const errors = results.flatMap((r) => r.errors.map((e) => `${r.file}: ${e}`));
    expect(errors).toEqual([]);
  });

  // This gate was VACUOUS, and it was the migration prep that found it rather
  // than any count moving. `validateProjectLanguages` defaults its content dir
  // to `<root>/plays`, which is a playhouse's shape and not a production
  // house's: this house keeps its content in `misfits/`, so the reader found no
  // directory, returned an empty array, and the assertion passed on nothing.
  // Every misfit ever staged went past it.
  //
  // It is named here for the same reason the canon validator two tests up names
  // its own, and the fix costs nothing today: with the right directory the
  // policy reports zero findings across all 327, so the gate goes from green on
  // an empty read to green on a real one.
  //
  // Worth keeping as the shape this whole step is about. A reader pointed at a
  // root with no content under it does not fail; it certifies. That is what the
  // move would have done to every gate in this directory at once, and it is why
  // the counts are taken before and compared after.
  //
  // It costs what a per-file detector costs, and the cost is the proof it is
  // now doing something: measured linear at ~0.12s per misfit with no fixed
  // part, so ~39s at 327 and crossing this timeout somewhere near 2,500. That
  // is the slowest gate in the house and roughly doubles the suite. Named here
  // so the trade is visible rather than discovered: forty seconds is the price
  // of a declared policy that had never once been applied.
  it("every misfit satisfies the language policy", { timeout: 300_000 }, () => {
    const results = validateProjectLanguages(root, { contentDir: join(root, "misfits") });
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

// The kit's own delivery walls: not about the misfits, about the house's
// delivery machinery holding to what it claims about itself. Wired here
// rather than left to a house-local reimplementation, the case this house
// already keeps for `tests/release.test.mjs` and `tests/packing.test.mjs`
// (both hand-written before the kit carried the same checks): a house that
// writes its own version of a wall the kit now ships is a second copy of one
// truth, and the retired preflight this house's own AGENTS.md already tells
// that story about. A later pass retires the house's local copies; this pass
// only adds the kit's.
describe("the delivery walls the kit holds", () => {
  it("the gates manifest matches the CI workflow's own job ids", () => {
    const findings = verifyGatesAgainstCi(REPO);
    expect(findings).toEqual([]);
  });

  it("the release workflow calls this house's own scripts", () => {
    const findings = verifyRelease(REPO);
    expect(findings).toEqual([]);
  });

  // `npm pack` over the whole tree takes tens of seconds, so this gets a
  // generous timeout the way the canon and language-policy checks above do.
  it(
    "the registry's promise is held against the tarball (flat house)",
    { timeout: 120_000 },
    () => {
      const packed = packedFilesAny(REPO);
      const findings = checkRegistryPacking(REPO, packed);
      expect(findings).toEqual([]);
    },
  );

  it("the management core converges on the installed blueprint", () => {
    const errors = checkManagement(REPO);
    expect(errors).toEqual([]);
  });

  it("the registry passes its own verification", () => {
    const { errors } = verifyRegistry(HOUSE);
    expect(errors).toEqual([]);
  });
});
