/* eslint-env node */

module.exports = {
  root: true,

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  env: {
    browser: false,
    es6: true,
    node: true,
  },

  extends: ["standard", "prettier"],

  plugins: ["@typescript-eslint", "prettier", "jest"],

  rules: {
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        caughtErrors: "all",
      },
    ],
    "@typescript-eslint/no-useless-constructor": "error",
    // 'no-console': 'error'
  },

  ignorePatterns: ["node_modules/", "@generated-types", "bin", "_generated/"],
};
