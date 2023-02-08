import resolve from '@rollup/plugin-node-resolve';

// Converts commonjs modules to ES6 modules
import commonjs from '@rollup/plugin-commonjs';

// Tells rollup how to process Typescript files
import typescript from '@rollup/plugin-typescript';

// CSS Processing
import copy from 'rollup-plugin-copy';

// rollup your .d.ts files
import dts from 'rollup-plugin-dts';

// Minify bundle
import terser from '@rollup/plugin-terser';

// Prevents module duplication
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// Generate bundle stats
import analyze from 'rollup-plugin-analyzer';

const outputOptions = {
  exports: 'named',
  preserveModules: true,
  sourcemap: true,
};

export default [
  {
    input: 'index.ts', // Entry point from where we export all modules
    external: ['react-dom'],
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        ...outputOptions,
      },
      {
        dir: 'dist/esm',
        format: 'esm',
        ...outputOptions,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs({ extensions: ['.js', '.ts'] }),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      copy({
        targets: [
          {
            src: ['styles'],
            dest: 'dist',
          },
        ],
      }),
      terser(),
      analyze({
        hideDeps: true,
        limit: 0,
        summaryOnly: true,
      }),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
