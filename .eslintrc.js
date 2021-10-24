/* eslint-env node */
const sharedPlugins = ["prettier"];
const sharedExtends = ["eslint:recommended"];
const sharedPrettierExtends = ["prettier"];

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [...sharedPlugins],
  extends: [...sharedExtends, ...sharedPrettierExtends],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: [...sharedPlugins, "@typescript-eslint"],
      extends: [
        ...sharedExtends,
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        ...sharedPrettierExtends,
      ],
    },
  ],
};
