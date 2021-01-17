/* eslint-env node */
const { dirname } = require("path");
const del = require("rollup-plugin-delete");
const typescript = require("rollup-plugin-typescript2");

const pkg = require("./package.json");
const tsconfig = require("./tsconfig.json");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      dir: dirname(pkg.main),
      format: "cjs",
    },
    {
      dir: dirname(pkg.module),
      format: "es",
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    del({
      targets: [dirname(pkg.main), dirname(pkg.module), dirname(pkg.types)],
      verbose: true,
    }),
    typescript({
      typescript: require("typescript"),
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          declarationDir: dirname(pkg.types),
        },
        exclude: [...tsconfig.exclude, "**/*.test.*"],
      },
    }),
  ],
};
