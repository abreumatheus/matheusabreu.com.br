export default {
	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: 'server',
	/*
	 ** Headers of the page
	 ** See https://nuxtjs.org/api/configuration-head
	 */
	head: {
		title: 'Matheus Abreu - Software Engineer',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content:
					'Matheus Abreu is a Software Engineer working at olist',
			},
			{
				hid: 'og:title',
				property: 'og:title',
				content: 'Matheus Abreu - Software Engineer',
			},
			{
				hid: 'og:site_name',
				property: 'og:site_name',
				content: 'Matheus Abreu - Software Engineer',
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content:
					'Matheus Abreu is a Software Engineer working at olist',
			},
			{
				hid: 'og:url',
				property: 'og:url',
				content: 'https://matheusabreu.com.br',
			},
			{
				hid: 'og:image',
				property: 'og:image',
				content:
					'https://avatars2.githubusercontent.com/u/13948812?s=460&v=4',
			},
			{
				hid: 'og:image:type',
				property: 'og:image:type',
				content: 'image/jpeg',
			},
			{
				hid: 'og:image:width',
				property: 'og:image:width',
				content: '460',
			},
			{
				hid: 'og:image:height',
				property: 'og:image:height',
				content: '460',
			},
			{ hid: 'og:type', property: 'og:type', content: 'website' },
			{
				hide: 'twitter:title',
				name: 'twitter:title',
				content: 'Matheus Abreu - Software Engineer',
			},
			{
				hid: 'twitter:description',
				name: 'twitter:description',
				content:
					'Matheus Abreu is a Software Engineer working at olist',
			},
			{
				hide: 'twitter:card',
				name: 'twitter:card',
				content: 'summary_large_image',
			},
			{
				hide: 'twitter:image',
				name: 'twitter:image',
				content:
					'https://avatars2.githubusercontent.com/u/13948812?s=460&v=4',
			},
			{
				hide: 'twitter:site',
				name: 'twitter:site',
				content: '@abreucodes',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	/*
	 ** Global CSS
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [{ src: '@/plugins/vueTyper.js', ssr: false }],
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		'@nuxtjs/pwa',
		'@nuxtjs/toast',
		[
			'@nuxtjs/device',
			{
				defaultUserAgent:
					'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36',
			},
		],
		'@nuxtjs/robots',
		'@nuxtjs/sitemap',
	],
	sitemap: {
		hostname: 'https://matheusabreu.com.br',
	},
	robots: [
		{
			sitemap: 'https://matheusabreu.com.br/sitemap.xml',
		},
	],
	toast: {
		position: 'bottom-right',
	},
	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {},
}
