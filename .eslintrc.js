module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:jest/style",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "jest", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    "node_modules/",
    "plop/",
    "dist/",
    "coverage/",
    ".cache/",
  ],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "typescript-eslint/no-explicit-any": "off"
  },
};
