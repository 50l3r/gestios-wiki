# 📨 Emails


## Listar emails
```this.$cache.emails```

Obtiene un listado de los emails previamente listados y cacheados en memoria

``` js
this.$cache.emails;

// {
//     total: 1,
//     results: [{
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


## Listar carpetas
```this.$cache.emails.folders```

Obtiene un listado de las carpetas de emails

``` js
this.$cache.emails.folders;

// {
//     total: 2
//     results: [
//         "cars",
//         "invoices"
//     ],
// }
```


## Obtener email
```this.$cache.emails.get(id)```

Obtiene los datos de un email específico segun su id

``` js
this.$cache.emails.get(5);

// {
// 	ID : 5,
// 	Asunto: 'Subject Email',
// 	Destinatario: 'don@joe.com',
// 	Mensaje: 'Lorem ipsum dolor sit amet',
// 	Fecha:'2020-05-05 17:05:02',
// 	Categoria: 'cars',
// 	Leido: '2020-05-05 18:05:02',
// 	Abierto: '2020-05-05 18:06:02',
// 	Resultado: '',
// 	CC: '',
// 	Usuario: {
// 		ID: 13,
// 		Nick:   => 'jhondoe',
// 		Nombre: => 'Jhon Doe',
// 	},
// 	Email:   => 'jhon@doe.com',
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID de email|```String```|<required />|














