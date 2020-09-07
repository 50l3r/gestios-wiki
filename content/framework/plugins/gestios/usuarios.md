
# 🙍 Usuarios

### Avatares
```this.$gestios.avatars(id = null)```

Obtiene la ruta del avatar de un usuario por su id. Si no se especifica se obtiene tu propio usuario.

``` js
this.$gestios.avatars(123); // https://gestios.dev/api/1/project1/avatar/123
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID de usuario a consultar|```Integer```|```null```|



### Listar usuarios
```this.$gestios.users.list({page = 1, search = null, limit = 10, reset = false, silent = false})```

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

#### Permisos necesarios: <role scope="view._users" />


### Obtener usuario
```this.$gestios.users.get(id = null)```

Obtiene los datos de un usuario específico. Si no se especifica se obtiene tu propio usuario.

``` js
this.$gestios.users.get(123);

// {
//     ok: true,
//     data: {
// 		   API: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
// 		   BOSS: "0", // 1:true | 2:false
// 		   Email: "jhon@doe.com",
// 		   Group: {
// 			   ID: 5
// 			   Name: 'Operator'
// 		   },
// 		   ID: "123",
// 		   LastDate: '2020-08-27T17:46:14.434Z',
// 		   LastIp: '127.0.0.1',
// 		   Name: "Jhon Doe",
// 		   Nick: "jhondoe",
// 		   Phone: "+34 612 345 678",
// 		   RegisterDate: "2020-08-27T17:46:14.434Z",
// 		   Status: "0"
// 	   }
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID de usuario a consultar|```Integer```|```null```|

#### Permisos necesarios: <role scope="view._users" />
<small>*No se requieren permisos si se trata de tu propio usuario*</small>


### Añadir usuario
```this.$gestios.users.add({ email, nick, name, phone = null, group = null, password = null })```

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
// 		    API: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
// 		    BOSS: "0",
// 		    Email: "matt@damon.com",
// 		    Group: {
// 			    ID: 2
// 			    Name: 'Worker'
// 			    },
// 		    ID: "124",
// 		    LastDate: '2020-08-27T17:46:14.434Z',
// 		    LastIp: '127.0.0.1',
// 		    Name: "Matt Damon",
// 		    Nick: "matt",
// 		    Phone: "+12 666 222 111",
// 		    RegisterDate: "2020-08-27T17:46:14.434Z",
// 		    Status: "0"
// 	    }
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|email|Email de acceso y notificaciones|```String```|<required />|
|nick|Nick de acceso|```String```|<required />|
|name|Nombre completo|```String```|<required />|
|phone|Teléfono de contacto|```String```|```null```|
|group|ID de grupo al que asignarlo|```Integer```|```null```|
|password|Clave de acceso al proyecto |```String```|```null```|

#### Permisos necesarios: <role scope="add._users" />

<info>Si no se especifica contraseña se generará una automaticamente y se le enviará al usuario por correo</info>

### Editar usuario
```this.$gestios.users.edit({ id, email, nick, name, phone = null, group = null, password = null })```

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
// 		    API: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
// 		    BOSS: "0",
// 		    Email: "mattew@damon.com",
// 		    Group: {
// 			    ID: 2
// 			    Name: 'Worker'
// 		    },
// 		    ID: "124",
// 		    LastDate: '2020-08-27T17:46:14.434Z',
// 		    LastIp: '127.0.0.1',
// 		    Name: "Mattew Damon",
// 		    Nick: "mattew",
// 		    Phone: "+12 666 222 111",
// 		    RegisterDate: "2020-08-27T17:46:14.434Z",
// 		    Status: "0"
// 	    }
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID de usuario|```Integer```|<required />|
|email|Email de acceso y notificaciones|```String```|<required />|
|nick|Nick de acceso|```String```|<required />|
|name|Nombre completo|```String```|<required />|
|phone|Teléfono de contacto|```String```|```null```|
|group|ID de grupo al que asignarlo|```Integer```|```null```|
|password|Clave de acceso al proyecto |```String```|```null```|

#### Permisos necesarios: <role scope="edit._users" />


### Bloquear/Desbloquear usuario
```this.$gestios.users.status(id)```

Bloquea o desbloquea a un usuario específico.

<alert>No puedes bloquear tu propio usuario</alert>

``` js
this.$gestios.users.status(123);

// {
//     ok: true,
//     data: {
// 		    API: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
// 		    BOSS: "0", // 1:true | 2:false
// 		    Email: "jhon@doe.com",
// 		    Group: {
// 		    	ID: 5
// 		    	Name: 'Operator'
// 		    },
// 		    ID: "123",
// 		    LastDate: '2020-08-27T17:46:14.434Z',
// 		    LastIp: '127.0.0.1',
// 		    Name: "Jhon Doe",
// 		    Nick: "jhondoe",
// 		    Phone: "+34 612 345 678",
// 		    RegisterDate: "2020-08-27T17:46:14.434Z",
// 		    Status: "1"
// 	    }
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID de usuario|```Integer```|<required />|

#### Permisos necesarios: <role scope="mod._users" />

### Eliminar usuario
```this.$gestios.users.delete(id)```

Bloquea o desbloquea a un usuario específico

``` js
this.$gestios.users.status(123);

// {
//     ok: true,
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID de usuario|```Integer```|<required />|


#### Permisos necesarios: <role scope="del._users" />













