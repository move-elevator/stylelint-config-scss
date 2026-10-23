import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import stylelint from "stylelint";

const configFile = new URL("../.stylelintrc.json", import.meta.url).pathname;
const fixture = (name) => new URL(`fixtures/${name}`, import.meta.url).pathname;

const lintFixture = async (name) => {
    const { results: [result] } = await stylelint.lint({ configFile, files: fixture(name) });

    return result;
};

test("config is valid and uses no deprecated rules", async () => {
    const { deprecations, invalidOptionWarnings } = await lintFixture("valid.scss");

    assert.deepEqual(invalidOptionWarnings, []);
    assert.deepEqual(deprecations, []);
});

test("valid fixture passes", async () => {
    const { warnings } = await lintFixture("valid.scss");

    assert.deepEqual(warnings, []);
});

test("every configured rule is reported by the invalid fixture", async () => {
    const { rules } = JSON.parse(await readFile(configFile, "utf8"));
    const { warnings } = await lintFixture("invalid.scss");
    const reportedRules = new Set(warnings.map(({ rule }) => rule));
    const missingRules = Object.keys(rules).filter((rule) => !reportedRules.has(rule));

    assert.deepEqual(missingRules, []);
});
