# 🌆 Ficheros


## Listar ficheros
```this.$cache.media```

Obtiene un listado de los ficheros previamente listados y cacheados en memoria

``` js
this.$cache.media;

// {
//     total: 1,
//     results: [{
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
//     }]
// }
```




## Obtener fichero
```this.$cache.media.get(id)```

Obtiene los datos de un fichero específico segun su id

``` js
this.$cache.media.get(1);

// {
// 	    id: 1,
// 	    file: "avatares/jhondoe/beach.jpg",
// 	    name: "beach.jpg",
// 	    ext: "jpg",
// 	    mimetype: "image/jpeg",
// 	    size: 24.33,
// 	    ip: "192.168.1.201",
// 	    date: "2020-08-07 17:46:44",
// 	    token: "8f673959ef1db1bef6c16a391c5246e13529f64bc39e1382e80159679bd2add48a49789de4b72e144cd5bbd22eb62f38be924e98abdbda1e2c6cc2554590fs869bf4ae3144ed",
// 	    vars: {
// 		    width: 1200,
// 		    height: 600
// 	    },
// 	    user: {
// 		    ID: 123,
// 		    Nick: "jhondoe",
// 		    Name: "Jhon Doe"
// 	    },
// 	    link: "http://gestios.es/api/1/project1/media/1/8f673959ef1db1bef6c16a391c5246e13529f64bc39e1382e80159679bd2add48a49789de4b72e144cd5bbd22eb62f38be924e98abdbda1e2c6cc2554590fs869bf4ae3144ed",
// 	    versions: [
// 		    {
// 			    id: "Mm4cwzwl4SYaQ297RfqfetsqCaXFK6DT",
// 			    size: 24.33,
// 			    date: "2020-08-07 17:46:47"
// 		    }
// 	    ]
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID de fichero|```String```|<required />|











