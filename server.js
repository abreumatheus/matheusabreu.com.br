const { loadNuxt, build } = require('nuxt')
const redirectSSL = require('redirect-ssl')

const app = require('express')()
const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

async function start() {
	// We get Nuxt instance
	const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

	app.use(
		redirectSSL.create({
			enabled: process.env.NODE_ENV === 'production',
			redirectHost: 'matheusabreu.com.br',
		})
	)
	// Render every route with Nuxt.js
	app.use(nuxt.render)

	// Build only in dev mode with hot-reloading
	if (isDev) {
		build(nuxt)
	}
	// Listen the server
	app.listen(port, '0.0.0.0')
	console.log('Server listening on `localhost:' + port + '`.')
}

start()
