module.exports = {
    title: 'Gestios Wiki',
	description: 'Despliegue automatizado con VuePress y GitHub Pages',
	theme: 'theme',
    themeConfig: {
        nav: [
			{ text: 'App Framework', link: '/vue-app/' },
			{ text: 'SDKs', link: '/sdk/' },
			{ text: 'API v1', link: '/', target: '_blank' }
		],
		sidebar: {
			'/vue-app/': [
				'',
				'primeros-pasos',
				'estructura-de-carpetas',
				'configuracion',
			],

			'/sdk/': [
				'',      /* /bar/ */
				'three', /* /bar/three.html */
				'four'   /* /bar/four.html */
			],
			'/': [
				'',        /* / */
				'contact', /* /contact.html */
				'about'    /* /about.html */
			]
		}
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
