# Estructura de carpetas

Te enumeramos la principal estructura de ficheros y carpetas del framework. Los archivos de linting y estilizado de código como ```.eslint``` o ```.editorconfig``` no se enumeran


```
.
├── src
│   ├── config
│   │   ├── menu.js
│   │   ├── router.js
│   │   └── settings.js
│   ├── store
│   │   ├── modules.js
│   │   │   └── example.js
│   │   └── index.js
│   ├── views
│   │   ├── example
│   │   │   └── index.vue
│   │   └── _config.vue
│   ├── bg.vue
│   └── main.js
├── dev.js
├── express.js
└── package.json
```



::: warning NOTA
Se recomienda no modificar los elementos marcados con una 🔥
:::

- ```./express.js``` 🔥 Miniservidor express local para desarrollo
- ```./dev.js``` 🔥 Script para levantar servidor de desarrollo y compilacion automatica
- ```./src/main.js``` 🔥 Elementos visuales del menu de navegación
- ```./src/bg.vue``` Elementos visuales del menu de navegación

### 📁 config
- ```./src/config/menu.js``` Elementos visuales del menu de navegación
- ```./src/config/router.js``` Rutas del proyecto
- ```./src/config/settings.js``` Configuraciones del proyecto

### 📁 store
- ```./src/store/modules/*.js``` Módulos de [Vuex](https://vuex.vuejs.org/guide/modules.html). *Se autoimportan al crear el fichero.*
- ```./src/store/index.js``` Carga y definición de tipo de storage para cada módulo

### 📁 views
- ```./src/views/*.vue``` Componentes del proyecto
- ```./src/views/_config.vue``` Página de configuración del proyecto
