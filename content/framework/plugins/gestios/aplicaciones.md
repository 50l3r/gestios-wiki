# 📦 Aplicaciones

Dispondremos de toda la información de nuestras aplicaciones. Campos, propiedades, validaciones...etc.

<info> A lo largo de toda esta sección encontraras el término **APPNAME**. Este se sustituye por el permalink de la aplicacion que estes usando en ese momento.</info>

## Listar aplicaciones
```this.$gestios.apps()```

Devuelve todas las aplicaciones del proyecto


``` js
await this.$gestios.apps();

// [
//    {
//       "ID":"102",
//       "Name":"Cars",
//       "NameSingular":"Car",
//       "Permalink":"cars",
//       "ElementsPerPage":"20",
//       "Fields":{
//          "date":{
//             "ID":"384",
//             "Name":"date",
//             "Type":"date",
//             "Required":true,
//             "Maxlength":"0",
//             "Searchable":false,
//             "Placeholder":"Manufactured Date",
//             "Vars":"",
//             "Parser":""
//          },
//          "name":{
//             "ID":"387",
//             "Name":"name",
//             "Type":"text",
//             "Required":true,
//             "Maxlength":"50",
//             "Searchable":true,
//             "Placeholder":"Car Name",
//             "Vars":"",
//             "Parser":""
//          },
//         "brand":{
//             "ID":"387",
//             "Name":"brand",
//             "Type":"relation",
//             "Required":true,
//             "Maxlength":"50",
//             "Searchable":true,
//             "Placeholder":"Car Name",
//             "Vars":"{
//                "type":"single",
//                "table":"brands",
//                "column":"_EntityId",
//                "return":["name"],
//                "group_duplicates":"true",
//                "ondelete": "set_null"
//             }",
//             "Parser":""
//          },
//       }
//    },
//    {
//       "ID":"142",
//       "Name":"Brands",
//       "NameSingular":"Brand",
//       "Permalink":"brands",
//       "ElementsPerPage":"20",
//       "Fields":{
//          "name":{
//             "ID":"655",
//             "Name":"name",
//             "Type":"text",
//             "Required":true,
//             "Maxlength":"200",
//             "Searchable":true,
//             "Placeholder":"Brand Name",
//             "Vars":"",
//             "Parser":""
//          },
//          "logo":{
//             "ID":"656",
//             "Name":"logo",
//             "Type":"media",
//             "Required":false,
//             "Maxlength":"",
//             "Searchable":false,
//             "Placeholder":"Image Logo",
//             "Vars":"",
//             "Parser":""
//          },
//       }
//    }
// ]
```

## Listar registros
```this.$gestios.items(APPNAME).list({ page = 1, filters = null, order = null, limit = 20, silent = false, reset = false, view = null })```

Devuelve los registros de una aplicacion específica


``` js
this.$gestios.items('cars').list({
    page:1,
    order: {date:'desc', name: 'asc'},
    limit:20,
    silent: false,
    reset:false,
    view: 'carViewTable',
    filters: [{
        _ParentOperator:"OR",
        _Operator:"OR",
        Fields: {
            "name": {
                "type":4,
                "string":"hyundai",
                "opt":"%"
            }
         }
    }]
}).then((result) => {
	console.log(result);
});

// {
//     ok: true,
//     total: 2,
//     data: [{
//         name: "Hyundai Coupe 1.6",
//         date: "2019-05-04",
//         brand: 1,
// 		   _Comments: []
//         _EntityCreateDate: "2019-05-04 20:11:23"
//         _EntityCreateIp: "127.0.0.1"
//         _EntityCreateUser: {ID: 123, Nick: "jhondoe", Nombre: "Jhon Doe", Email: "jhon@doe.com"}
//         _EntityId: 18
//         _EntityStatus: 1
//         _EntityUpdateDate: null
//         _EntityUpdateIp: null
//         _EntityUpdateUser: null
// 	   },{
//         name: "Hyundai Accent 2.0",
//         date: "2019-06-01",
//         brand: 1,
// 		   _Comments: []
//         _EntityCreateDate: "2019-05-03 16:11:23"
//         _EntityCreateIp: "127.0.0.1"
//         _EntityCreateUser: {ID: 123, Nick: "jhondoe", Nombre: "Jhon Doe", Email: "jhon@doe.com"}
//         _EntityId: 19
//         _EntityStatus: 1
//         _EntityUpdateDate: null
//         _EntityUpdateIp: null
//         _EntityUpdateUser: null
// 	   }]
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|page|Número de página|```Integer```|```1```|
|limit|Limitar numero de registros devueltos|```Object```|```20```|
|view|Guarda los resultados en una caché de vista|```String```|```null```|
|[order](/api/ordenar)|Ordenar registros por campos|```Object```|```null```|
|[filter](/api/filtrar)|Filtra los registros por una serie de condiciones|```Object```|```null```|
|silent|No alerta ni muestra barra de progreso|```Boolean```|```false```|
|reset|Borra la caché de objetos|```Boolean```|```false```|


#### Permisos necesarios:

<div class="list-unstyle">

- **<role scope="view.APPNAME" />** Ver todos los registros
- **<role scope="view.mine.APPNAME" />** Ver registros propios

</div>



## Obtener registro
```this.$gestios.items(APPNAME).get({ id, silent = false })```

Devuelve el registro específico de una aplicacion

``` js
this.$gestios.items('cars').get({
    id: 18,
    silent: true,
}).then((result) => {
	console.log(result);
});

// {
//     ok: true,
//     data: {
//         name: "Hyundai Coupe 1.6",
//         date: "2019-05-04",
//         brand: 1,
// 		   _Comments: []
//         _EntityCreateDate: "2019-05-04 20:11:23"
//         _EntityCreateIp: "127.0.0.1"
//         _EntityCreateUser: {ID: 123, Nick: "jhondoe", Nombre: "Jhon Doe", Email: "jhon@doe.com"}
//         _EntityId: 18
//         _EntityStatus: 1
//         _EntityUpdateDate: null
//         _EntityUpdateIp: null
//         _EntityUpdateUser: null
// 	   }
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID único del registro|```Integer```|<required />|
|silent|No alerta ni muestra barra de progreso|```Boolean```|```false```|


#### Permisos necesarios:

<div class="list-unstyle">

- **<role scope="view.APPNAME" />** Ver todos los registros
- **<role scope="view.mine.APPNAME" />** Ver registros propios

</div>

<info>Hay que sustituir **APPNAME** por el nombre de la aplicacion especifica. En este ejemplo sería ***view.cars*** o ***view.mine.cars***</info>

## Añadir registro
```this.$gestios.items(APPNAME).add({ params, view = null, callback = null })```

Añade un registro nuevo en la aplicación específica


``` js
this.$gestios.items('cars').add({
    params: {
        name: 'Alfa Romeo',
        date: '2019-06-07',
        brand: 4
    },
    view: 'carViewTable',
    callback: 'http://midominio.com/script.php'
}).then((result) => {
	console.log(result);
});

// {
//     ok: true,
//     data: {
//         name: "Alfa Romeo",
//         date: "2019-06-07",
//         brand: 4,
// 		   _Comments: []
//         _EntityCreateDate: "2020-05-04 20:11:23"
//         _EntityCreateIp: "127.0.0.1"
//         _EntityCreateUser: {ID: 123, Nick: "jhondoe", Nombre: "Jhon Doe", Email: "jhon@doe.com"}
//         _EntityId: 24
//         _EntityStatus: 1
//         _EntityUpdateDate: null
//         _EntityUpdateIp: null
//         _EntityUpdateUser: null
// 	   }
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|params|Campos de la aplicación|```Object```|<required />|
|view|Vista en la que se añadirá el registro una vez creado|```String```|```null```|
|callback|URL externa a la que se llamará una vez el registro sea añadido|```String```|```null```|


#### Permisos necesarios:

<div class="list-unstyle">

- **<role scope="add.APPNAME" />** Añadir registros
- **<role scope="add.mod.APPNAME" />** Añadir registros en estado deshabilitado

</div>


## Editar registro
```this.$gestios.items(APPNAME).edit({ id, params, callback = null })```

Modifica un registro previamente creado de una aplicación específica

``` js
this.$gestios.items('cars').edit({
    id: 24,
    params: {
        name: 'Alfa Romeo Jullieta',
    },
    callback: 'http://midominio.com/script.php'
}).then((result) => {
	console.log(result);
});

// {
//     ok: true,
//     data: {
//         name: "Alfa Romeo Jullieta",
//         date: "2019-06-07",
//         brand: 4,
// 		   _Comments: []
//         _EntityCreateDate: "2020-05-04 20:11:23"
//         _EntityCreateIp: "127.0.0.1"
//         _EntityCreateUser: {ID: 123, Nick: "jhondoe", Nombre: "Jhon Doe", Email: "jhon@doe.com"}
//         _EntityId: 18
//         _EntityStatus: 1
//         _EntityUpdateDate: null
//         _EntityUpdateIp: null
//         _EntityUpdateUser: null
// 	   }
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID único del registro|```String```|<required />|
|params|Campos de la aplicación a modificar|```Object```|<required />|
|callback|URL externa a la que se llamará una vez el registro sea modificado|```String```|```null```|

<info>La información del registro se actualiza en la plataforma de forma automática en todas las vistas que se este usando.</info>

#### Permisos necesarios:

<div class="list-unstyle">

- **<role scope="set.APPNAME" />** Editar registros
- **<role scope="set.mine.APPNAME" />** Editar registros propios

</div>


## Bloquear/Desbloquear registro
```this.$gestios.items(APPNAME).status(id)```

Cambia el estado de un registro, de bloqueado a desbloqueado o viceversa.

``` js
this.$gestios.items('cars').status(24).then((item) => {
	console.log(item);
});

// {
//     ok: true,
//     data: {
//         name: "Alfa Romeo Jullieta",
//         date: "2019-06-07",
//         brand: 4,
// 		   _Comments: []
//         _EntityCreateDate: "2020-05-04 20:11:23"
//         _EntityCreateIp: "127.0.0.1"
//         _EntityCreateUser: {ID: 123, Nick: "jhondoe", Nombre: "Jhon Doe", Email: "jhon@doe.com"}
//         _EntityId: 18
//         _EntityStatus: 0
//         _EntityUpdateDate: null
//         _EntityUpdateIp: null
//         _EntityUpdateUser: null
// 	   }
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID único del registro|```String```|<required />|

<info>El estado del registro se actualiza en la plataforma de forma automática en todas las vistas que se este usando.</info>

#### Permisos necesarios:

<div class="list-unstyle">

- **<role scope="mod.APPNAME" />** Moderar registros

</div>

## Eliminar registro
```this.$gestios.items(APPNAME).delete({ id, callback = null })```

Elimina un registro de una aplicación específica

``` js
this.$gestios.items('cars').delete({
    id: 24,
    callback: 'http://midominio.com/script.php'
}).then((result) => {
	console.log(result);
});

// {
//     ok: true,
//     data: {
//         name: "Alfa Romeo Jullieta",
//         date: "2019-06-07",
//         brand: 4,
// 		   _Comments: []
//         _EntityCreateDate: "2020-05-04 20:11:23"
//         _EntityCreateIp: "127.0.0.1"
//         _EntityCreateUser: {ID: 123, Nick: "jhondoe", Nombre: "Jhon Doe", Email: "jhon@doe.com"}
//         _EntityId: 18
//         _EntityStatus: 0
//         _EntityUpdateDate: null
//         _EntityUpdateIp: null
//         _EntityUpdateUser: null
// 	   }
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID único del registro|```String```|<required />|
|callback|URL externa a la que se llamará una vez el registro sea eliminado|```String```|```null```|

<info>El registro se eliminará de todas las vistas cacheadas de la plataforma de forma automática.</info>

#### Permisos necesarios:

<div class="list-unstyle">

- **<role scope="del.APPNAME" />** Eliminar registros
- **<role scope="del.mine.APPNAME" />** Eliminar registros propios

</div>

## Verificar autorización
```this.$gestios.items(APPNAME).auth({ scopes, item, strict = true, user = null })```

Comprueba si tu usuario tiene autorización de un registro en funcion de los roles especificados

``` js
const check = this.$gestios.items('cars').auth({
    scopes = [
        'view.cars',
        'view.mine.cars'
    ],
    item: (... ItemObject),
    user: (... UserObject),
    strict: false
})
console.log(check);

// true / false
```
En este caso comprobariamos si el usuario especificado tiene permisos frente al registro dado en modo lectura.

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|scopes|Array de roles|```Array```|<required />|
|item|Objeto de registro|```String```|<required />|
|user|Objeto de usuario. Si no se precisa se usa el tuyo.|```String```|```null```|
|strict|Si es ```true``` se precisaran todos los roles|```Boolean```|```false```|


<info>El registro se eliminará de todas las vistas cacheadas de la plataforma de forma automática.</info>

#### Permisos necesarios:

<div class="list-unstyle">

- **<role scope="del.APPNAME" />** Eliminar registros
- **<role scope="del.mine.APPNAME" />** Eliminar registros propios

</div>

