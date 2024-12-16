// duckdb/esbuild.config.js
const esbuild = require('esbuild');
const fs = require('fs');
const commonConfig = require('../esbuild.common.js');

const watch = false;

esbuild
  .build({
    ...commonConfig,
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    external: [
      'react-ai-assist',
      '@duckdb/duckdb-wasm',
      'react',
      'react-dom',
      'apache-arrow',
    ],
  })
  .then((result) => {
    if (watch) {
      console.log('Watching for changes...');
    }
    if (result.metafile) {
      fs.writeFileSync('./dist/metafile.json', JSON.stringify(result.metafile));
    }
  });
