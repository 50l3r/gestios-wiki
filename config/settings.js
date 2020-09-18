export default {
	menu: {
		framework: {
			title: '🚁 Framework',
			url: '/framework',
			disabled: false
		},
		sdk: {
			title: '🛸 SDK',
			url: '/sdk',
			disabled: true
		},
		api: {
			title: '🚀 API',
			url: '/api',
			disabled: false
		}
	},
	sidebars: {
		framework: [
			{
				key: 'introduccion',
				title: '👓 Introducción',
				breadTitle: '🚁 Framework',
				url: '/framework'
			},
			{
				key: 'primeros-pasos',
				title: '👶 Primeros pasos',
				url: '/framework/primeros-pasos'
			},
			{
				key: 'estructura-de-carpetas',
				title: '📁 Estructura de carpetas',
				url: '/framework/estructura-de-carpetas',
				pag: {
					next: {
						title: '⚡ Plugins',
						url: '/framework/plugins/vistas'
					}
				}
			},
			{
				key: 'plugins',
				title: '⚡ Plugins',
				url: '/framework/plugins',
				children: [
					{
						key: 'vistas',
						title: '👀 Vistas',
						url: '/framework/plugins/vistas',
						pag: {
							next: {
								title: '🚀 GestiOS',
								url: '/framework/plugins/gestios/informacion'
							}
						}
					},
					{
						key: 'gestios',
						title: '🚀 GestiOS',
						url: '/framework/plugins/gestios',
						children: [
							{
								title: '💈 Información general',
								url: '/framework/plugins/gestios/informacion'
							},
							{
								title: '🚦 Seguridad y autenticación',
								url: '/framework/plugins/gestios/seguridad'
							},
							{
								title: '📦 Aplicaciones',
								url: '/framework/plugins/gestios/aplicaciones'
							},
							{
								title: '🙍 Usuarios',
								url: '/framework/plugins/gestios/usuarios'
							},
							{
								title: '👨‍👩‍👧‍👦 Grupos',
								url: '/framework/plugins/gestios/grupos'
							},
							{
								title: '📨 Emails',
								url: '/framework/plugins/gestios/emails'
							},
							{
								title: '🌆 Ficheros',
								url: '/framework/plugins/gestios/ficheros'
							},
							{
								title: '🔧 Configuraciones',
								url: '/framework/plugins/gestios/configuraciones'
							}
						]
					},
					{
						key: 'cache',
						title: '💾 Caché de objetos',
						url: '/framework/plugins/cache',
						children: [
							{
								title: '💈 Información general',
								url: '/framework/plugins/cache/informacion'
							},
							{
								title: '📦 Aplicaciones',
								url: '/framework/plugins/cache/aplicaciones'
							},
							{
								title: '🙍 Usuarios',
								url: '/framework/plugins/cache/usuarios'
							},
							{
								title: '👨‍👩‍👧‍👦 Grupos',
								url: '/framework/plugins/cache/grupos'
							},
							{
								title: '📨 Emails',
								url: '/framework/plugins/cache/emails'
							},
							{
								title: '🌆 Ficheros',
								url: '/framework/plugins/cache/ficheros'
							}
						]
					},
					{
						key: 'formularios',
						title: '📑 Formularios',
						url: '/framework/plugins/formularios'
					},
					{
						key: 'personalizacion',
						title: '🍹 Personalización',
						url: '/framework/plugins/personalizacion'
					},
					{
						key: 'traducciones',
						title: '🏳️‍🌈 Traducciones',
						url: '/framework/plugins/traducciones'
					},
					{
						key: 'axios',
						title: '🌏 Axios',
						url: '/framework/plugins/axios'
					},
					{
						key: 'utilidades',
						title: '📐 Utilidades',
						url: '/framework/plugins/utilidades'
					}
				]
			},
			{
				key: 'configuracion',
				title: '🔧 Configuración',
				url: '/framework/configuracion'
			}
		],
		api: [
			{
				key: 'aplicaciones',
				title: '📦 Aplicaciones',
				url: '#operations-tag-Aplicaciones'
			}
		]
	}
};
