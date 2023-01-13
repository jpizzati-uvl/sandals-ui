import resolve from '@rollup/plugin-node-resolve';

// Converts commonjs modules to ES6 modules
import commonjs from '@rollup/plugin-commonjs';

// Tells rollup how to process Typescript files
import typescript from '@rollup/plugin-typescript';

// CSS Processing
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
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
  banner: `/*
 * Library Boilerplate
 * Dev: Jorge Pizzati (@jpizzati-uvl)
 */`,
};

export default [
  {
    input: 'src/index.ts', // Entry point from where we export all modules
    external: ['react-dom'],
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        ...outputOptions,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs({ extensions: ['.js', '.ts'] }),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.tsx', '**/*.stories.tsx'],
      }),
      postcss({
        plugins: [autoprefixer()],
        extract: false,
        modules: {
          generateScopedName: '[hash:base64:5]',
        },
        autoModules: false,
        sourceMap: true,
        minimize: true,
        use: [
          [
            'sass',
            {
              data: "@use './src/styles/abstracts/mixins'; @use './src/styles/abstracts/functions'; @use './src/styles/abstracts/variables';",
            },
          ],
        ],
      }),
      copy({
        targets: [{ src: 'src/styles', dest: 'dist' }],
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
    input: 'dist/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
