module.exports = {
    title: 'GestiOS Wiki',
	description: 'Despliegue automatizado con VuePress y GitHub Pages',
	theme: 'theme',
	parseHeaders: ['h2', 'h3', 'h4'],
    themeConfig: {
        nav: [
			{ text: 'Framework', link: '/framework/' },
			{ text: 'SDKs', link: '/sdk/' },
			{ text: 'API v1', link: '/api/' }
		],
		// sidebarDepth: 2,
		sidebar: {
			'/framework': [
				{
					title: '👶 Primeros pasos',   // required
					path: '/framework/primeros-pasos',      // optional, link of the title, which should be an absolute path and must exist
					collapsable: false, // optional, defaults to true
					sidebarDepth: 2,    // optional, defaults to 1
					children: [

					]
				},
				{
					title: '📁 Estructura de carpetas',   // required
					path: '/framework/estructura-de-carpetas',      // optional, link of the title, which should be an absolute path and must exist
					collapsable: false, // optional, defaults to true
					sidebarDepth: 2,    // optional, defaults to 1
					children: [

					]
				},
				{
					title: '⚡ Plugins',   // required
					path: '/framework/plugins',      // optional, link of the title, which should be an absolute path and must exist
					collapsable: false, // optional, defaults to true
					sidebarDepth: 2,    // optional, defaults to 1
					children: [
						'/framework/plugins/axios',
						'/framework/plugins/gestios',
					]
				},
				{
					title: '🔧 Configuración',   // required
					path: '/framework/configuracion',      // optional, link of the title, which should be an absolute path and must exist
					collapsable: false, // optional, defaults to true
					sidebarDepth: 2,    // optional, defaults to 1
					children: [
						// '/framework/primeros-pasos',
						// '/framework/estructura-de-carpetas',
						// '/framework/configuracion'
					]
				}
			],
			'/api/': [
				{
					title: '📦 Registros',   // required
					path: '/api/',      // optional, link of the title, which should be an absolute path and must exist
					collapsable: false, // optional, defaults to true
					sidebarDepth: 2,    // optional, defaults to 1
					children: [
						'/api/filtrar',
						'/api/ordenar',
					]
				},
			],

			'/': 'auto'
		},
	},
	plugins: {
		'@vuepress/medium-zoom': {
			selector: 'img.zoom',
			options: {
				margin: 16
			}
		}
	}
}
