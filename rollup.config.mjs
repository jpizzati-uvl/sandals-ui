// Needed in order to import package.json after rollup 3 upgrade
import { createRequire } from "node:module";

// Uses the node resolution algorithm for modules
import resolve from "@rollup/plugin-node-resolve";

// Converts commonjs modules to ES6 modules
import commonjs from "@rollup/plugin-commonjs";

// Teaches rollup how to process Typescript files
import typescript from "@rollup/plugin-typescript";

// CSS Processing
import postcss from "rollup-plugin-postcss";

// CSS Vendor Prefixes
import autoprefixer from "autoprefixer";

// rollup your .d.ts files
import dts from "rollup-plugin-dts";

// Minify bundle
import terser from "@rollup/plugin-terser";

// Prevents module duplication
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts", // Entry point from where we export all modules
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.stories.tsx"],
      }),
      postcss({
        plugins: [autoprefixer()],
        extract: false,
        modules: {
          generateScopedName: "[hash:base64:5]", // Prod only
        },
        sourceMap: true,
        minimize: true,
        use: ["sass"],
      }),
      terser(),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
