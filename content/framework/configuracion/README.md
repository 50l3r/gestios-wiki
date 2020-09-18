# 🔧 Configuración

Todos los archivos de configuración estan alojados en la carpeta ```./src/config/```

Desde estos podremos configurar todo lo relacionado con el proyecto. Rutas, menu, opciones funcionales...etc

## 🎫 Menú de navegación

📁 **Ruta del archivo: ```./src/config/menu.js```**

Este fichero nos permite definir el menu de navegación del panel de administración:

<img src="/images/framework/menu_cap.png" medium-zoom />

``` js
export default [
	// Category
	{
		category: true, // Required for category mode
		title: 'General' // Category title
	},
	// Menu Item
	{
		title: 'Example', // Menu title
		key: 'example', // Primary key for active menu detection
		icon: ['fal', 'file'], // Font Awesome Icon
		url: {
			name: 'example' // Url Slug
		},
		auth: {
			strict: false, // Require all roles or not
			roles: ['view.example', 'view.mine.example'] // Required Roles
		},
		children: [ // Children items
			{
				title: 'Example SubMenu',
				key: 'example_submenu',
				icon: ['far', 'list'],
				url: {
					name: 'example'
				},
				auth: {
					strict: false,
					roles: ['add.example', 'add.mod.example']
				}
			}
		]
	}
];
```

A continuación pasamos a relatar los parametros:


|Propiedad  |Descripcion  |Tipo  |
|---------|---------|---------|
|category     | Define si el item es una categoria o un menú | ```Boolean``` |
|title     | Nombre del item        | ```String``` |
|key     | Clave unica del menú        | ```String``` |
|icon     | Icono de FontAwesome         | ```Array``` |
|url     | Parámetros de [```router-link```](https://router.vuejs.org/api/#router-link)        | ```Object``` |
|auth     | Parámetros de [autenticación](#propiedad)        | ```Object``` |
|children     | Array con menús descendentes de este        | ```Array``` |

#### Propiedad ```auth```

Desde aquí podemos definir si un usuario tiene acceso visual a dicho elemento, en base a una lista de roles definidos. Es posible precisar si el usuario necesita disponer de todos los permisos necesarios o por el contrario solo de uno.

<error>Recuerda que la reestricción de permisos que se aplica solo afecta a la visualización del menú. Para impedir que un usuario acceda a una ruta en concreta es necesario definirlo también en la configuración de las rutas</error>


|Propiedad  |Descripcion  |Tipo  |
|---------|---------|---------|
|strict     | Fuerza la posesión de todos los roles especificados        | ```Boolean``` |
|roles     | Listado de roles necesarios para que el menú sea accesible        | ```Array``` |


## 🚏 Rutas de navegación

📁 **Ruta del archivo: ```./src/config/router.js```**

Desde aquí podremos definir todas las rutas del aplicativo.
``` js
function loadView(path) { // Async component
	return () => import(`../views/${path}`);
}

export default [
	{
		name: '_home',
		path: '/',
		redirect: '/example', 							// Redirect to another url
		meta: {
			auth: true
		}
	},
	{
		name: 'example', 								// Primary route key
		path: '/example', 								// Slug
		component: loadView('example/index.vue'), 		// Route's component
		meta: {
			title: 'Example', 							// Bread's title
			icon: ['fal', 'file'], 						// Bread's icon (FontAwesome)
			auth: true, 								// Only auth users or not
			topbar: {
				buttons: [ 								// Topbar Buttons
					{
						text: 'New Button', 			// Button text
						icon: ['far', 'plus-square'], 	// Button icon
						variant: 'primary', 			// Button Variant (https://www.antdv.com/components/button/)
						class: '', 						// Button classes
						event: 'eventButton' 			// $hub.$emit('XXXXX') Event called
					}
				]
			}
		}
	},
	{
		name: '_config',
		path: '/config',
		component: loadView('_config.vue'),
		meta: {
			title: 'Configuración',
			icon: ['far', 'wrench'],
			auth: {
				strict: false,
				roles: ['_BOSS']
			}
		}
	}
];
```

La configuración de estas se define en la documentación de [Vue Router](https://router.vuejs.org/guide/essentials/named-routes.html) aunque pasaremos a explicar algunos parametros añadidos que son necesarios

|Propiedad |Descripcion  |Tipo  |Necesario  |
|---------|---------|---------|---------|
|name | Nombre único de la página | ```String``` |<required /> |
|path | Ruta de la página | ```String``` |<required /> |
|redirect | Ruta de la página a redirigir <small>*(Si se precisa)*</small> | ```String``` | |
|component| Componente que cargará la página | ```Componente``` | <required /> |
|children | Array con páginas descendentes de esta        | ```Array``` | |
|[meta](#propiedad-2) | Información adicional de cada página  | ```Componente``` | <required /> |

#### Propiedad <a-tag>meta</a-tag>

En esta propiedad definimos muchos aspectos de la página en concreto que vitaminan cada vista que definimos:

|Propiedad  |Descripcion  |Tipo  |
|---------|---------|---------|
|title     | Título de la página para los breadcrumbs | ```String``` |
|icon     | Icono FontAwesome para los breadcrumbs | ```Array``` |
|auth     | Autenticación necesaria para la vista. ```true/false``` o [Auth](#propiedad) | ```Boolean``` ```Auth``` |
|topbar.buttons     | Array de botones para los breadcrumbs | ```Objecto``` |

## 🔧 Configuraciones adicionales

📁 **Ruta del archivo: ```./src/config/settings.js```**


Cada proyecto tiene la posibilidad de definir una serie de funcionalidades tanto visuales como funcionales en este apartado:

|Propiedad  |Descripcion  |Tipo  |
|---------|---------|---------|
|slug     | Permalink del proyecto | ```String``` |
|name     | Nombre visual del Proyecto | ```String``` |
|version     | Version del aplicativo | ```Number``` ```String``` |
|globalSearch     | Activa en el topbar la búsqueda global | ```Boolean``` |
|config     | Activa el menú de configuracion personalizada | ```Boolean``` |
|icon     | Icono FontAwesome para el proyecto | ```Array``` |
|keepalive     | Componentes que van a ser cacheados | ```Array``` |


<alert>Todos los parámetros son obligatorios</alert>
