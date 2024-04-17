import * as esbuild from 'esbuild';

let ctx = await esbuild.context({
  entryPoints: ['app.js'],
  bundle: true,
  minify: true,
  sourcemap: false,
  define: {
    'process.env.WEATHER_API_KEY': '"YOUR WEATHER API KEY"',
    'process.env.RAPID_API_KEY':
      '"YOUR RAPID API KEY"',
  },
  //   target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  target: 'es2016',
  outfile: 'index.js',
});

await ctx.watch();
console.log('watching...');

await new Promise((r) => setTimeout(r, 10 * 100000));
await ctx.dispose();
console.log('stopped watching');