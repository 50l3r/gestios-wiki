
# 💈 Información general

Este grupo de plugins gestiona todo lo relacionado con los datos de la plataforma. Realiza todas las operaciones directas contra la API. Se divide en distintos módulos:


## Versión de API
```this.$gestios.version```

Facilita la versión de api usada

``` js
this.$gestios.version;  // Output: 1
```

## Información del sistema

Detecta el estado de cada entorno de GestiOS usado

``` js
console.log(this.$gestios.status);
//  Output: {
//     api: true
//     lambda: false
//     modules: true
//     sandbox: true
// }
```

## Proyecto
```this.$gestios.project```

Devuelve o modifica el proyecto en el que estés conectado:

``` js
console.log(this.$gestios.project); // project1
this.$gestios.project = 'project2' // Change project to 'project2'
```

<info>Si se cambia el proyecto en caliente será necesario volver a iniciar sesión</info>

## Pack
```this.$gestios.pack```
Devuelve o modifica el pack de tu proyecto

``` js
console.log(this.$gestios.pack); // pack1
this.$gestios.pack = 'pack2' // Change pack to 'pack2'
```

<info>No suele ser necesario cambiar el pack salvo determinadas circustancias</info>

## Paths
```this.$gestios.paths```
Devuelve los paths de cada entorno

``` js
console.log(this.$gestios.paths);
// {
//     api: "https://gestios.dev/api/1/project1"
//     domain: "https://gestios.dev/api/1"
//     lambda: "https://fn.gestios.dev/project1"
//     modules: "http://localhost:8200/index.umd.min.js"
//     sandbox: "https://sandbox.gestios.dev/project1"
// }
```

## Entorno de desarrollo

```this.$gestios.env```
Devuelve o modifica el entorno de desarrollo en el que estes trabajando

``` js
console.log(this.$gestios.env); // development|production|local
this.$gestios.env = 'production' // Change environment to 'production'
```

<error>Presta mucha atención al entorno en el que estés conectado. <br/>**Salvo ninguna circustancia realices pruebas en el entorno de producción**</error>

