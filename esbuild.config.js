require('esbuild')
  .build({
    entryPoints: ['./src/app.tsx'],
    bundle: true,
    outfile: 'dist/app.js',
  })
  .catch(() => process.exit(1));
