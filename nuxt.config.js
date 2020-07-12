import redirectSSL from 'redirect-ssl'

export default {
	/*
	 ** Nuxt rendering mode
	 ** See https://nuxtjs.org/api/configuration-mode
	 */
	mode: 'universal',
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
		title: 'Matheus Abreu - Python / Web Developer',
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
					'Matheus Abreu is a Python / Web developer working at HBSIS / AmBev',
			},
			{ hid: 'og:title', name: 'og:title', content: this.head.title },
			{
				hid: 'og:site_name',
				name: 'og:site_name',
				content: this.head.title,
			},
			{
				hid: 'og:description',
				name: 'og:description',
				content: this.head.description,
			},
			{
				hid: 'og:url',
				name: 'og:url',
				content: this.info.pageURL,
			},
			{
				hid: 'og:image',
				name: 'og:image',
				content: this.info.coverImage,
			},
			{
				hid: 'og:image:type',
				name: 'og:image:type',
				content: this.info.coverImageType,
			},
			{
				hid: 'og:image:width',
				name: 'og:image:width',
				content: this.info.coverImageSize,
			},
			{
				hid: 'og:image:height',
				name: 'og:image:height',
				content: this.info.coverImageSize,
			},
			{ hid: 'og:type', name: 'og:type', content: 'website' },
			{
				hide: 'twitter:card',
				name: 'twitter:card',
				content: this.info.coverImage
					? 'summary_large_image'
					: 'summary',
			},
			{
				hide: 'twitter:site',
				name: 'twitter:site',
				content: this.info.twitterHandle,
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	data() {
		return {
			info: {
				coverImage:
					'https://avatars2.githubusercontent.com/u/13948812?s=460&v=4',
				coverImageType: 'image/jpeg',
				coverImageSize: '460',
				pageURL: 'https://matheusabreu.com.br',
				twitterHandle: '@abreucodes',
			},
		}
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
	],
	toast: {
		position: 'bottom-right',
	},
	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {},
	serverMiddleware: [
		redirectSSL.create({
			enabled: process.env.NODE_ENV === 'production',
		}),
	],
}
