module.exports = {
  globals: {},
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig2.json",
    sourceType: "module",
    ecmaVersion: "latest",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
};
