/* eslint-env node */
const { dirname } = require("path");
const del = require("rollup-plugin-delete");
const progress = require("rollup-plugin-progress");
const typescript = require("rollup-plugin-typescript2");

const pkg = require("./package.json");
const tsconfig = require("./tsconfig.json");

module.exports = {
  input: "src/index.ts",
  output: {
    dir: dirname(pkg.main),
    format: "cjs"
  },
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    del({
      targets: [dirname(pkg.main)],
      verbose: true
    }),
    progress({
      clearLine: false
    }),
    typescript({
      typescript: require("typescript"),
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          declarationDir: dirname(pkg.types)
        },
        exclude: [...tsconfig.exclude, "**/*.test.*"]
      }
    })
  ]
};
