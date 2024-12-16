// esbuild.common.js
module.exports = {
  bundle: true,
  platform: 'browser',
  format: 'esm',
  target: 'esnext',
  sourcemap: true,
  splitting: false,
  metafile: true,
  assetNames: '[name]',
  minify: true,
  drop: ['console', 'debugger'],
};
