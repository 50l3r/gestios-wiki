# 🚦 Seguridad y autenticación

### Estado de conexión
```this.$gestios.connected```
Chequea si el usuario esta autenticado o no

``` js
this.$gestios.connected; // true|false
```

### Mi usuario
```this.$gestios.user```
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
```this.$gestios.auth.login({ username, password, project })```
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
|username|Nombre o email del usuario|```String```|<required />|
|password|Contraseña de acceso|```String```|<required />|
|project|Proyecto destino donde iniciar sesión|```String```|<required />|

### Cerrar sesión
```this.$gestios.auth.logout()```

Cierra la sesión del usuario

``` js
this.$gestios.auth.logout();

// {
//     ok: true
// }
```

### Solicitud de nueva clave
```this.$gestios.auth.forgot(user)```

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
|user|Nombre o email del usuario|```String```|<required />|

### Restablecimiento de clave
```this.$gestios.auth.restore({email, authcode, password})```

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
|email|Nombre o email del usuario|```String```|<required />|
|authcode|Código de autorización enviado por email|```String```|<required />|
|password|Nueva contraseña de acceso|```String```|<required />|


### Obtener roles de usuario
```this.$gestios.auth.roles(id = null)```

Obtiene los roles de un usuario determinado. Si no se especifica el usuario se usará el propio

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

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID de usuario a consultar|```Integer```|```null```|


#### Permisos necesarios: <role scope="_BOSS" />


### Chequear permisos de usuario
```this.$gestios.auth.check({user = null, scopes, strict = false})```

Verifica si un usuario dispone de los permisos especificados. Si no se especifica el usuario se usará el propio

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
|scopes|Array de roles a comprobar|```Array```|<required />|
|strict|Si es ```true``` se precisaran todos los roles|```Boolean```|```false```|
