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
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800&display=auto'
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=auto'
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300;400;500;600;700&display=auto'
			}
		]
	},
	/*
	** Global CSS
	*/
	css: [
		'~/assets/styles/theme.less'
	],
	/*
	** Plugins to load before mounting the App
	** https://nuxtjs.org/guide/plugins
	*/
	plugins: [
		'@/plugins/antd-ui',
		'@/plugins/font-awesome',
		'@/plugins/utils',
		'@/plugins/badge',
		'@/plugins/vue-debounce'
	],
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
		'@nuxtjs/eslint-module'
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		// Doc: https://github.com/nuxt/content
		'@nuxt/content'
	],
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {},
	/*
	** Content module configuration
	** See https://content.nuxtjs.org/configuration
	*/
	content: {
		dir: 'content',
		liveEdit: false,
		fullTextSearchFields: ['title', 'description'],
		markdown: {
			prism: {
				theme: 'prism-themes/themes/prism-atom-dark.css'
			},
			remarkPlugins: [
				'remark-external-links'
			],
			remarkExternalLinks: {
				content: {
					type: 'element',
					tagName: 'svg',
					properties: {
						className: ['-mt-1', 'stroke-2'],
						style: ['stroke-linecap: round;', 'stroke-linejoin: round;'],
						fill: 'none',
						viewBox: '0 0 24 24',
						stroke: 'currentColor'
					},
					children: [
						{
							type: 'element',
							tagName: 'path',
							properties: {
								d:
									'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
							}
						}
					]
				},
				contentProperties: {
					className: [
						'inline-block',
						'align-middle',
						'externalIcon'
					]
				}
			}
		}
	},
	/*
	** Build configuration
	** See https://nuxtjs.org/api/configuration-build/
	*/
	build: {
		loaders: {
			less: {
				lessOptions: {
					javascriptEnabled: true
				}
			}
		},
		extend(config) {
			config.resolve.alias.vue = 'vue/dist/vue.common';
		}
	},

	loading: {
		color: '#1b55e3',
		height: '5px'
	}
};
