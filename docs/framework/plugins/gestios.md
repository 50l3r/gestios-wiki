# GestiOS
**```this.$gestios```**

Este grupo de plugins gestiona todo lo relacionado con los datos de la plataforma.Realiza todas las operaciones directas contra la API. Se divide en distintos módulos:

## 💈 Información general

### Versión de API
#### ```this.$gestios.version```
``` js
this.$gestios.version;  // Output: 1
```

### Información del sistema
``` js
console.log(this.$gestios.status);
//  Output: {
//     api: true
//     lambda: false
//     modules: true
//     sandbox: true
// }
```

### Proyecto
#### ```this.$gestios.project```
Devuelve o modifica el proyecto en el que estés conectado:

``` js
console.log(this.$gestios.project); // project1
this.$gestios.project = 'project2' // Change project to 'project2'
```
::: tip 🧠 Debes saber que...
Que si se cambia el proyecto en caliente será necesario volver a iniciar sesión
:::

### Pack
#### ```this.$gestios.pack```
Devuelve o modifica el pack de tu proyecto

``` js
console.log(this.$gestios.pack); // pack1
this.$gestios.pack = 'pack2' // Change pack to 'pack2'
```

::: tip 🧠 Debes saber que...
Que no suele ser necesario cambiar el pack salvo determinadas circustancias
:::

### Paths
#### ```this.$gestios.paths```
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

### Entorno de desarrollo
#### ```this.$gestios.env```
Devuelve o modifica el entorno de desarrollo en el que estes trabajando

``` js
console.log(this.$gestios.env); // development|production|local
this.$gestios.env = 'production' // Change environment to 'production'
```

::: warning ATENCIÓN
Presta mucha atención al entorno en el que estés conectado. **Salvo ninguna circustancia realices pruebas en el entorno de producción**
:::


## 🚦 Seguridad y autenticación

### Estado de conexión
#### ```this.$gestios.connected```
Chequea si el usuario esta autenticado o no

``` js
this.$gestios.connected; // true|false
```

### Mi usuario
#### ```this.$gestios.user```
Devuelve la información del usuario conectado

``` js
this.$gestios.user;

// {
//     API: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//     BOSS: "0", // 1:true | 2:false
//     Email: "jhon@doe.com",
//     Group: {
//         ID: 5
//         Name: 'Operator'
// 	   },
//     ID: "123",
//     LastDate: '2020-08-27T17:46:14.434Z',
//     LastIp: '127.0.0.1',
//     Name: "Jhon Doe",
//     Nick: "jhondoe",
//     Phone: "+34 612 345 678",
//     RegisterDate: "2020-08-27T17:46:14.434Z",
//     Roles: {
//         Readable: (...)
//         UnReadable: (...)
// 	   },
//     Status: "0"
// }
```


### Iniciar sesión
#### ```this.$gestios.auth.login(params)```
Inicia sesión en los servicios de GestiOS bajo el usuario y proyecto facilitado


``` js
this.$gestios.auth.login({
    username: 'jhondoe',
    password: 'jhondoe123',
    project: 'project1'
});

// {
//     ok: true
//     data: {
//         API: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//         BOSS: "0", // 1:true | 2:false
//         Email: "jhon@doe.com",
//         Group: {
//             ID: 5
//             Name: 'Operator'
//     	   },
//         ID: "123",
//         LastDate: '2020-08-27T17:46:14.434Z',
//         LastIp: '127.0.0.1',
//         Name: "Jhon Doe",
//         Nick: "jhondoe",
//         Phone: "+34 612 345 678",
//         RegisterDate: "2020-08-27T17:46:14.434Z",
//         Roles: {
//             Readable: (...)
//             UnReadable: (...)
//     	   },
//         Status: "0"
//     }
// }
```

#### Parámetros

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|username|Nombre o email del usuario|```String```|<Badge text="Obligatorio" type="error" />|
|password|Contraseña de acceso|```String```|<Badge text="Obligatorio" type="error" />|
|project|Proyecto destino donde iniciar sesión|```String```|<Badge text="Obligatorio" type="error" />|

### Cerrar sesión
#### ```this.$gestios.auth.logout()```

Cierra la sesión del usuario

``` js
this.$gestios.auth.logout();

// {
//     ok: true
// }
```

### Solicitud de nueva clave
#### ```this.$gestios.auth.forgot(params)```

Solicita credenciales nuevas del usuario o email especificado

``` js
this.$gestios.auth.forgot('jhondoe');

// {
//     ok: true
// }
```

#### Parámetros

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|user|Nombre o email del usuario|```String```|<Badge text="Obligatorio" type="error" />|

### Restablecimiento de clave
#### ```this.$gestios.auth.restore(params)```

Solicita credenciales nuevas del usuario o email especificado

``` js
this.$gestios.auth.restore({
    email: 'jhondoe',
    authcode: 'jhondoe',
    password: 'jhondoe'
});

// {
//     ok: true
// }
```

#### Parámetros

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|email|Nombre o email del usuario|```String```|<Badge text="Obligatorio" type="error" />|
|authcode|Código de autorización enviado por email|```String```|<Badge text="Obligatorio" type="error" />|
|password|Nueva contraseña de acceso|```String```|<Badge text="Obligatorio" type="error" />|


### Obtener roles de usuario
#### ```this.$gestios.auth.roles(id)```

Obtiene los roles de un usuario determinado. Si no se especifica el id de usuario se usará el propio

``` js
this.$gestios.auth.roles(123);

// {
//     ok: true,
//     UnReadable: {
//         App: [],
//         Custom: []
//     },
//     Readable: []
// }
```

#### Permisos necesarios: <Badge text="_BOSS" type="error" />


### Chequear permisos de usuario
#### ```this.$gestios.auth.check(params)```

Verifica si un usuario dispone de los permisos especificados

``` js
this.$gestios.auth.check({
    user: 123,
    scopes: ['view.cars','view.mine.cars'],
    strict: true
});

// true / false
```

#### Parámetros

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|user|Objeto de usuario. Si no se precisa se usa el tuyo.|```String```|```null```|
|scopes|Array de roles a comprobar|```Array```|<Badge text="Obligatorio" type="error" />|
|strict|Si es ```true``` se precisaran todos los roles|```Boolean```|```false```|
























## 🙍 Usuarios



### Avatares
#### ```this.$gestios.avatars(avatarId)```
Obtiene la ruta del avatar de un usuario

``` js
this.$gestios.avatars(123); // https://gestios.dev/api/1/project1/avatar/123
```


### Listar usuarios
#### ```this.$gestios.users.list(params)```

Obtiene un listado de los usuarios del proyecto

``` js
this.$gestios.users.list({
    page: 1,
    search: 'jhon',
    limit: 20,
    reset: true,
    silent: false
});

// {
//     ok: true,
//     total: 1,
//     data: [{
// 		API: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
// 		BOSS: "0", // 1:true | 2:false
// 		Email: "jhon@doe.com",
// 		Group: {
// 			ID: 5
// 			Name: 'Operator'
// 			},
// 		ID: "123",
// 		LastDate: '2020-08-27T17:46:14.434Z',
// 		LastIp: '127.0.0.1',
// 		Name: "Jhon Doe",
// 		Nick: "jhondoe",
// 		Phone: "+34 612 345 678",
// 		RegisterDate: "2020-08-27T17:46:14.434Z",
// 		Status: "0"
// 	}]
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|page|Número de página a consultar|```Number```|```1```|
|search|Búsqueda de usuario|```String```|```''```|
|limit|Numero de elementos a recoger|```Number```|```20```|
|reset|Borra la caché de objetos|```Boolean```|```false```|
|silent|No alerta ni muestra barra de progreso |```Boolean```|```false```|

#### Permisos necesarios: <Badge text="view._users" type="error" />


### Obtener usuario
#### ```this.$gestios.users.get(params)```

Obtiene los datos de un usuario específico

``` js
this.$gestios.users.get({
    id: 123,
    silent: true
});

// {
//     ok: true,
//     data: {
// 		API: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
// 		BOSS: "0", // 1:true | 2:false
// 		Email: "jhon@doe.com",
// 		Group: {
// 			ID: 5
// 			Name: 'Operator'
// 			},
// 		ID: "123",
// 		LastDate: '2020-08-27T17:46:14.434Z',
// 		LastIp: '127.0.0.1',
// 		Name: "Jhon Doe",
// 		Nick: "jhondoe",
// 		Phone: "+34 612 345 678",
// 		RegisterDate: "2020-08-27T17:46:14.434Z",
// 		Status: "0"
// 	}
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID de usuario|```Number```|<Badge text="Obligatorio" type="error" />|
|silent|No alerta ni muestra barra de progreso |```Boolean```|```false```|

#### Permisos necesarios: <Badge text="view._users" type="error" />
<small>*No se requieren permisos si se trata de tu propio usuario*</small>


### Añadir usuario
#### ```this.$gestios.users.add(params)```

Añade un nuevo usuario al proyecto

``` js
this.$gestios.users.add({
    email: 'matt@damon.com',
    nick: 'matt',
    name: 'Matt Damon',
    phone: '+12 666 222 111',
    group: 2,
    password: 'damonmatt123'
});

// {
//     ok: true,
//     data: {
// 		API: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
// 		BOSS: "0",
// 		Email: "matt@damon.com",
// 		Group: {
// 			ID: 2
// 			Name: 'Worker'
// 			},
// 		ID: "124",
// 		LastDate: '2020-08-27T17:46:14.434Z',
// 		LastIp: '127.0.0.1',
// 		Name: "Matt Damon",
// 		Nick: "matt",
// 		Phone: "+12 666 222 111",
// 		RegisterDate: "2020-08-27T17:46:14.434Z",
// 		Status: "0"
// 	}
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|email|Email de acceso y notificaciones|```String```|<Badge text="Obligatorio" type="error" />|
|nick|Nick de acceso|```String```|<Badge text="Obligatorio" type="error" />|
|name|Nombre completo|```String```|<Badge text="Obligatorio" type="error" />|
|phone|Teléfono de contacto|```String```|```null```|
|group|ID de grupo al que asignarlo|```Integer```|```null```|
|password|Clave de acceso al proyecto |```String```|```null```|

#### Permisos necesarios: <Badge text="add._users" type="error" />

::: warning 🧠 Debes saber que...
Si no se especifica contraseña se generará una automaticamente y se le enviará al usuario por correo
:::


### Editar usuario
#### ```this.$gestios.users.edit(params)```

Edita los datos del usuario especificado

``` js
this.$gestios.users.edit({
    id: 124,
    email: 'mattew@damon.com',
    nick: 'mattew',
    name: 'Mattew Damon',
    phone: '+12 666 222 111',
    group: 2,
    password: 'damonmatt123'
});

// {
//     ok: true,
//     data: {
// 		API: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
// 		BOSS: "0",
// 		Email: "mattew@damon.com",
// 		Group: {
// 			ID: 2
// 			Name: 'Worker'
// 		},
// 		ID: "124",
// 		LastDate: '2020-08-27T17:46:14.434Z',
// 		LastIp: '127.0.0.1',
// 		Name: "Mattew Damon",
// 		Nick: "mattew",
// 		Phone: "+12 666 222 111",
// 		RegisterDate: "2020-08-27T17:46:14.434Z",
// 		Status: "0"
// 	}
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID de usuario|```Integer```|<Badge text="Obligatorio" type="error" />|
|email|Email de acceso y notificaciones|```String```|<Badge text="Obligatorio" type="error" />|
|nick|Nick de acceso|```String```|<Badge text="Obligatorio" type="error" />|
|name|Nombre completo|```String```|<Badge text="Obligatorio" type="error" />|
|phone|Teléfono de contacto|```String```|```null```|
|group|ID de grupo al que asignarlo|```Integer```|```null```|
|password|Clave de acceso al proyecto |```String```|```null```|

#### Permisos necesarios: <Badge text="edit._users" type="error" />


### Bloquear/Desbloquear usuario
#### ```this.$gestios.users.status(userId)```

Bloquea o desbloquea a un usuario específico

``` js
this.$gestios.users.status(123);

// {
//     ok: true,
//     data: {
// 		API: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
// 		BOSS: "0", // 1:true | 2:false
// 		Email: "jhon@doe.com",
// 		Group: {
// 			ID: 5
// 			Name: 'Operator'
// 		},
// 		ID: "123",
// 		LastDate: '2020-08-27T17:46:14.434Z',
// 		LastIp: '127.0.0.1',
// 		Name: "Jhon Doe",
// 		Nick: "jhondoe",
// 		Phone: "+34 612 345 678",
// 		RegisterDate: "2020-08-27T17:46:14.434Z",
// 		Status: "1"
// 	}
// }
```

#### Permisos necesarios: <Badge text="mod._users" type="error" />

### Eliminar usuario
#### ```this.$gestios.users.delete(userId)```

Bloquea o desbloquea a un usuario específico

``` js
this.$gestios.users.status(123);

// {
//     ok: true,
// }
```

#### Permisos necesarios: <Badge text="del._users" type="error" />









































## 👨‍👩‍👧‍👦 Grupos


### Listar grupos
#### ```this.$gestios.groups.list(params)```

Obtiene un listado de los grupos del proyecto

``` js
this.$gestios.groups.list({
    reset: true,
    silent: false
});

// {
//     ok: true,
//     total: 2,
//     data: [
//         {
//             Name: "Worker",
//             ID: 2,
//         },
//         {
//             Name: "Operator",
//             ID: 5,
//         }
//     ]
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|reset|Borra la caché de objetos|```Boolean```|```false```|
|silent|No alerta ni muestra barra de progreso |```Boolean```|```false```|

#### Permisos necesarios: <Badge text="view._groups" type="error" />
















## 📦 Aplicaciones

Podemos realizar una gestion integra de todas nuestras aplicaciones del proyecto

::: tip 🧠 Debes saber que...
A lo largo de toda esta sección encontraras el término **APPNAME**. Este se sustituye por el permalink de la aplicacion que estes usando en ese momento.
:::



### Listar aplicaciones
#### ```this.$gestios.apps.list()```

Devuelve todas las aplicaciones del proyecto


``` js
this.$gestios.apps.list().then((apps) => {
	console.log(apps);
});

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
//             "Name":"CarDate",
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
//             "Name":"Name",
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
//             "Name":"Brand",
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
//          "category":{
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
//          "name":{
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

### Listar registros
#### ```this.$gestios.items(appName).list(params)```

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

- **<Badge text="view.APPNAME" type="error" />** Ver todos los registros
- **<Badge text="view.mine.APPNAME" type="error" />** Ver registros propios

</div>



### Obtener registro
#### ```this.$gestios.items(appName).get(params)```

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
|id|ID único del registro|```Integer```|```1```|
|silent|No alerta ni muestra barra de progreso|```Boolean```|```false```|


#### Permisos necesarios:

<div class="list-unstyle">

- **<Badge text="view.APPNAME" type="error" />** Ver todos los registros
- **<Badge text="view.mine.APPNAME" type="error" />** Ver registros propios

</div>

::: tip 🧠 Debes saber que...
Hay que sustituir **APPNAME** por el nombre de la aplicacion especifica. En este ejemplo sería ***view.cars*** o ***view.mine.cars***
:::



### Añadir registro
#### ```this.$gestios.items(appName).add(params)```

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
|params|Campos de la aplicación|```Object```|<Badge text="Obligatorio" type="error" />|
|view|Vista en la que se añadirá el registro una vez creado|```String```|```null```|
|callback|URL externa a la que se llamará una vez el registro sea añadido|```String```|```null```|


#### Permisos necesarios:

<div class="list-unstyle">

- **<Badge text="add.APPNAME" type="error" />** Añadir registros
- **<Badge text="add.mod.APPNAME" type="error" />** Añadir registros en estado deshabilitado

</div>


### Editar registro
#### ```this.$gestios.items(appName).edit(params)```

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
|id|ID único del registro|```String```|<Badge text="Obligatorio" type="error" />|
|params|Campos de la aplicación a modificar|```Object```|<Badge text="Obligatorio" type="error" />|
|callback|URL externa a la que se llamará una vez el registro sea modificado|```String```|```null```|

::: tip 🧠 Debes saber que...
La información del registro se actualiza en la plataforma de forma automática en todas las vistas que se este usando.
:::

#### Permisos necesarios:

<div class="list-unstyle">

- **<Badge text="set.APPNAME" type="error" />** Editar registros
- **<Badge text="set.mine.APPNAME" type="error" />** Editar registros propios

</div>


### Bloquear/Desbloquear registro
#### ```this.$gestios.items(appName).status(id)```

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
|id|ID único del registro|```String```|<Badge text="Obligatorio" type="error" />|

::: tip 🧠 Debes saber que...
El estado del registro se actualiza en la plataforma de forma automática en todas las vistas que se este usando.
:::

#### Permisos necesarios:

<div class="list-unstyle">

- **<Badge text="mod.APPNAME" type="error" />** Moderar registros

</div>

### Eliminar registro
#### ```this.$gestios.items(appName).delete(params)```

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
|id|ID único del registro|```String```|<Badge text="Obligatorio" type="error" />|
|callback|URL externa a la que se llamará una vez el registro sea eliminado|```String```|```null```|

::: tip 🧠 Debes saber que...
El registro se eliminará de todas las vistas cacheadas de la plataforma de forma automática.
:::

#### Permisos necesarios:

<div class="list-unstyle">

- **<Badge text="del.APPNAME" type="error" />** Eliminar registros
- **<Badge text="del.mine.APPNAME" type="error" />** Eliminar registros propios

</div>

### Verificar autorización
#### ```this.$gestios.items(appName).auth(params)```

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
|scopes|Array de roles|```Array```|<Badge text="Obligatorio" type="error" />|
|item|Objeto de registro|```String```|<Badge text="Obligatorio" type="error" />|
|user|Objeto de usuario. Si no se precisa se usa el tuyo.|```String```|```null```|
|strict|Si es ```true``` se precisaran todos los roles|```Boolean```|```false```|


::: tip 🧠 Debes saber que...
El registro se eliminará de todas las vistas cacheadas de la plataforma de forma automática.
:::

#### Permisos necesarios:

<div class="list-unstyle">

- **<Badge text="del.APPNAME" type="error" />** Eliminar registros
- **<Badge text="del.mine.APPNAME" type="error" />** Eliminar registros propios

</div>
















































## 📨 Emails

Disponemos de un servicio de envío de email con tracking incluido, que nos permite compartir información con terceros o enviar notificaciones específicas.

::: tip  🧠 Debes saber que...
Este servicio no ofrece la opción de correo entrante. En el caso de que la persona a la que se le ha enviado el email responda al mismo este llegará a la dirección de email del usuario que lo envió.
:::



### Listar emails
#### ```this.$gestios.emails.list(params)```

Lista los emails enviados en el proyecto


``` js
this.$gestios.emails.list({
    page:1,
    folder:'cars',
    silent: false,
    reset:false
}).then((result) => {
	console.log(result);
});

// {
//     ok: true,
//     total: 1,
//     data: [{
//         ID : 5,
//         Asunto: 'Subject Email',
//         Destinatario: 'don@joe.com',
//         Mensaje: 'Lorem ipsum dolor sit amet',
//         Fecha:'2020-05-05 17:05:02',
//         Categoria: 'cars',
//         Leido: '2020-05-05 18:05:02',
//         Abierto: '2020-05-05 18:06:02',
//         Resultado: '',
//         CC: '',
//         Usuario: {
//         	ID: 13,
//         	Nick:   => 'jhondoe',
//         	Nombre: => 'Jhon Doe',
// 		},
//         Email:   => 'jhon@doe.com',
//     }]
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|page|Número de página|```Integer```|```1```|
|folder|Carpeta de correo en la que buscar|```String```|```null```|
|silent|No alerta ni muestra barra de progreso|```Boolean```|```false```|
|reset|Borra la caché de objetos|```Boolean```|```false```|


#### Permisos necesarios:

<div class="list-unstyle">

- **<Badge text="view._emails" type="error" />** Ver todos los emails

</div>

### Listar carpetas
#### ```this.$gestios.emails.folders(params)```

Lista la estructura de carpetas de los emails del proyecto


``` js
this.$gestios.emails.folders({
    page:1,
    silent: false,
    reset:false
}).then((result) => {
	console.log(result);
});

// {
//     ok: true,
//     total: 2
//     data: [
//         "cars",
//         "invoices"
//     ],

// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|page|Número de página|```Integer```|```1```|
|silent|No alerta ni muestra barra de progreso|```Boolean```|```false```|
|reset|Borra la caché de objetos|```Boolean```|```false```|


#### Permisos necesarios:

<div class="list-unstyle">

- **<Badge text="view._emails.folders" type="error" />** Ver todas las carpetas

</div>


### Enviar email
#### ```this.$gestios.emails.send(params)```

Envia un email con los parámetros especificados


``` js
this.$gestios.emails.send({
    email: [
        'don@joe.com',
        'jon@joe.com'
    ],
    subject: 'Subject message',
    message: '<h1>Lorem</h1> ipsum <b>dolor sit</b>',
    replyto: 'jhon@doe.com',
    folder: 'cars'
}).then((result) => {
	console.log(result);
});

// {
//     ok: true,
//     data: {
//         ID : 7,
//         Asunto: 'Subject message',
//         Destinatario: 'don@joe.com,jon@joe.com',
//         Mensaje: '<h1>Lorem</h1> ipsum <b>dolor sit</b>',
//         Fecha:'2020-05-06 17:05:02',
//         Categoria: 'cars',
//         Leido: null,
//         Abierto: null,
//         Resultado: 1,
//         CC: '',
//         Usuario: {
//         	ID: 13,
//         	Nick:   => 'jhondoe',
//         	Nombre: => 'Jhon Doe',
// 		}
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|email|Emails destinatarios|```Array```|<Badge text="Obligatorio" type="error" />|
|subject|Asunto del mensaje|```String```|<Badge text="Obligatorio" type="error" />|
|message|Cuerpo del mensaje en formato HTML|```String```|<Badge text="Obligatorio" type="error" />|
|cc|Emails en copia|```Array```|```null```|
|replyto|Direccion de email de respuesta|```String```|```null```|
|folder|Carpeta en la que se guardara el email|```String```|```null```|

::: tip 🧠 Debes saber que...
Si no se especifica el parámetro **replyto** se asignará por defecto la dirección de email del usuario que lo haya enviado
:::

#### Permisos necesarios:

<div class="list-unstyle">

- **<Badge text="send._emails" type="error" />** Ver todas las carpetas

</div>


### Eliminar email
#### ```this.$gestios.emails.delete(id)```

Elimina el email especificado

``` js
this.$gestios.emails.delete(7);

// {
//     ok: true,
//     data: {
//         ID : 7,
//         Asunto: 'Subject message',
//         Destinatario: 'don@joe.com,jon@joe.com',
//         Mensaje: '<h1>Lorem</h1> ipsum <b>dolor sit</b>',
//         Fecha:'2020-05-06 17:05:02',
//         Categoria: 'cars',
//         Leido: null,
//         Abierto: null,
//         Resultado: 1,
//         CC: '',
//         Usuario: {
//         	ID: 13,
//         	Nick:   => 'jhondoe',
//         	Nombre: => 'Jhon Doe',
// 		}
// }
```

#### Permisos necesarios: <Badge text="del._emails" type="error" />













































## 📨 Configuraciones

Cada proyecto puede disponer de parámetros de configuración propios o claves. Estas sirven para gestionar de forma rapida y sencilla valores que cambian cada cierto tiempo, como puede ser el porcentaje de impuestos de una factura.

::: warning  🧠 Debes saber que...
Todos los usuarios del proyecto tienen acceso a estos parámetros. Es importante que no lo utilices para guardar información confidencial como contraseñas.
:::



### Listar claves
#### ```this.$gestios.config.list(keys)```

Lista las claves de configuración especificadas

``` js
this.$gestios.config.list([
    'iva',
    'work_hours'
]).then((result) => {
	console.log(result);
});

// {
//     ok: true,
//     total: 2,
//     data: {
//         iva : 21,
//         work_hours: '09:00 18:00',
//     }
// }
```


### Modificar claves
#### ```this.$gestios.config.edit(keys)```

Modifica las claves de configuracion especificadas en los parametros

``` js
this.$gestios.config.edit({
    iva: 11,
    work_hours: '09:00 17:00'
}).then((result) => {
	console.log(result);
});

// {
//     ok: true,
//     total: 2,
//     data: {
//         iva : 11,
//         work_hours: '09:00 17:00',
//     }
// }
```

#### Permisos necesarios: <Badge text="set._config" type="error" />


### Eliminar claves
#### ```this.$gestios.config.del(keys)```

Modifica las claves de configuracion especificadas

``` js
this.$gestios.config.del([
    'work_hours'
]).then((result) => {
	console.log(result);
});

// {
//     ok: true,
// }
```

#### Permisos necesarios: <Badge text="del._config" type="error" />


























































## 📨 Ficheros

Disponemos de un servicio de gestión de ficheros que nos permitirá subir ciertos tipos de documento a la plataforma y adjuntarlos a registros de aplicaciones. Un ejemplo pueden ser documentos de contratos, facturas, imagenes...etc.

Este servicio tiene un sistema de versionado que permite mantener copias antiguas de los ficheros modificados, y llevar un registro de quien los modificó o añadió.


### Obtener fichero
#### ```this.$gestios.media.get(id)```

Obtiene los datos del fichero especificado

``` js
this.$gestios.media.get(54).then((result) => {
	console.log(result);
});

// {
//     ok: true,
//     data: {
//         id: 1,
//         file: "avatares/jhondoe/beach.jpg",
//         name: "beach.jpg",
//         ext: "jpg",
//         mimetype: "image/jpeg",
//         size: 24.33,
//         ip: "192.168.1.201",
//         date: "2020-08-07 17:46:44",
//         token: "8f673959ef1db1bef6c16a391c5246e13529f64bc39e1382e80159679bd2add48a49789de4b72e144cd5bbd22eb62f38be924e98abdbda1e2c6cc2554590fs869bf4ae3144ed",
//         vars: {
//             width: 1200,
//             height: 600
//         },
//         user: {
//             ID: 123,
//             Nick: "jhondoe",
//             Name: "Jhon Doe"
//         },
//         link: "http://gestios.es/api/1/project1/media/1/8f673959ef1db1bef6c16a391c5246e13529f64bc39e1382e80159679bd2add48a49789de4b72e144cd5bbd22eb62f38be924e98abdbda1e2c6cc2554590fs869bf4ae3144ed",
//         versions: [
//             {
//                 id: "Mm4cwzwl4SYaQ297RfqfetsqCaXFK6DT",
//                 size: 24.33,
//                 date: "2020-08-07 17:46:47"
//             }
//         ]
//     }
// }
```



### Compartir fichero
#### ```this.$gestios.media.share(params)```

Genera un enlace publico para compartir el fichero hasta una fecha determinada

``` js
this.$gestios.media.share({
    id: 1,
    ts: 1598997761
}).then((result) => {
	console.log(result);
});

// {
//     ok: true,
//     data: "https://gestios-media-project1.s3.eu-west-1.amazonaws.com/avatares/jhondoe/beach.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AEIAUO5N3UFLD5IKIJR3%2F22200951%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200901T190355Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10726&X-Amz-Signature=d0cecAa2d28a81d24197a39033d9bccebec028567079b9bN725b615209cfe591"
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID del fichero|```Integer```|<Badge text="Obligatorio" type="error" />|
|ts|Fecha de caducidad en timestamp|```String```|<Badge text="Obligatorio" type="error" />|


### Subir fichero
#### ```this.$gestios.media.add(params)```

Genera un enlace publico para compartir el fichero hasta una fecha determinada

``` js
this.$gestios.media.add({
    file: (... BlobFile),
    name: 'invoice1.pdf',
    folder: 'invoices'
}).then((result) => {
	console.log(result);
});

// {
//     ok: true,
//     data: {
//         id: 2,
//         file: "invoices/invoice1.pdf",
//         name: "invoice1.pdf",
//         ext: "pdf",
//         mimetype: "application/pdf",
//         size: 14.25,
//         ip: "192.168.1.201",
//         date: "2020-08-07 19:42:21",
//         token: "1f673959ef1db1baf6c16a391c5246e13529f64bc39e1382e80159679bd2add48as9789de4b72e144cd5bbd22eb62f38be924e98abdbda1e2as2432554590fs869bf4ae314456",
//         vars: {},
//         user: {
//             ID: 123,
//             Nick: "jhondoe",
//             Name: "Jhon Doe"
//         },
//         link: "http://gestios.es/api/1/project1/media/2/1f673959ef1db1baf6c16a391c5246e13529f64bc39e1382e80159679bd2add48as9789de4b72e144cd5bbd22eb62f38be924e98abdbda1e2as2432554590fs869bf4ae314456",
//         versions: [
//             {
//                 id: "1m4cwzwl4SYaQ2d6RfqfetsqCaXFK6g5",
//                 size: 14.25,
//                 date: "2020-08-07 19:42:21"
//             }
//         ]
//     }
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|file|Fichero a subir|```Blob```|<Badge text="Obligatorio" type="error" />|
|name|Nombre del fichero|```String```|<Badge text="Obligatorio" type="error" />|
|folder|Carpeta en donde se alojará el fichero|```String```|```null```|


#### Permisos necesarios: <Badge text="add._media" type="error" />


### Eliminar fichero
#### ```this.$gestios.media.delete(fileId)```

Genera un enlace publico para compartir el fichero hasta una fecha determinada

``` js
this.$gestios.media.delete(1).then((result) => {
	console.log(result);
});

// {
//     ok: true,
// }
```

#### Permisos necesarios: <Badge text="del._media" type="error" />
