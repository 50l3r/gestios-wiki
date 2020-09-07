export default {
	menu: {
		framework: {
			title: 'Framework',
			icon: ['fab', 'vuejs']
		},
		sdk: {
			title: 'SDK',
			icon: ['fab', 'js-square']
		},
		api: {
			title: 'API',
			icon: ['fad', 'rocket-launch']
		}
	},
	routes: {
		index: {
			sidebar: false
		}
	},
	sidebars: {
		framework: [
			{
				key: 'primeros-pasos',
				title: '👶 Primeros pasos',
				url: '/framework/primeros-pasos'
			},
			{
				key: 'estructura-de-carpetas',
				title: '📁 Estructura de carpetas',
				url: '/framework/estructura-de-carpetas'
			},
			{
				key: 'plugins',
				title: '⚡ Plugins',
				url: '/framework/plugins',
				children: [
					{
						key: 'vistas',
						title: '👀 Vistas',
						url: '/framework/plugins/vistas'
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
		]
	}
};
