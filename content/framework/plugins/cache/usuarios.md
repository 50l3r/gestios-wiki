# 🙍 Usuarios


## Listar usuarios
```this.$cache.users```

Obtiene un listado de los usuarios previamente listados y cacheados en memoria

``` js
this.$cache.users;

// {
//     total: 1,
//     results: [{
// 		    API: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
// 		    BOSS: "0", // 1:true | 2:false
// 		    Email: "jhon@doe.com",
// 		    Group: {
// 			    ID: 5
// 			    Name: 'Operator'
// 		    },
// 		    ID: "123",
// 		    LastDate: '2020-08-27T17:46:14.434Z',
// 		    LastIp: '127.0.0.1',
// 		    Name: "Jhon Doe",
// 		    Nick: "jhondoe",
// 		    Phone: "+34 612 345 678",
// 		    RegisterDate: "2020-08-27T17:46:14.434Z",
// 		    Status: "0"
// 	   }]
// }
```


## Obtener usuario
```this.$cache.user(userId)```

Obtiene los datos de un usuario específico

``` js
this.$cache.user(1);

// {
//     API: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//     BOSS: "0", // 1:true | 2:false
//     Email: "jhon@doe.com",
//     Group: {
//     	   ID: 5
//     	   Name: 'Operator'
//     },
//     ID: "123",
//     LastDate: '2020-08-27T17:46:14.434Z',
//     LastIp: '127.0.0.1',
//     Name: "Jhon Doe",
//     Nick: "jhondoe",
//     Phone: "+34 612 345 678",
//     RegisterDate: "2020-08-27T17:46:14.434Z",
//     Status: "0"
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|userId|ID de usuario|```Number```|<required />|



