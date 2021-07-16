require('esbuild').serve(
	{
		servedir: 'public',
		port: 8000,
		host: '127.0.0.1'
	},
	{
		entryPoints: ['src/main.tsx'],
		outdir: 'public/js',
	  bundle: true
	}
).then(server => {
	console.log(`运行在 http://${server.host}:${server.port}`)
//	console.log(server)
  // server.stop()
})
