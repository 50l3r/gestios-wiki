
# 🌆 Ficheros

Disponemos de un servicio de gestión de ficheros que nos permitirá subir ciertos tipos de documento a la plataforma y adjuntarlos a registros de aplicaciones. Un ejemplo pueden ser documentos de contratos, facturas, imagenes...etc.

Este servicio tiene un sistema de versionado que permite mantener copias antiguas de los ficheros modificados, y llevar un registro de quien los modificó o añadió.


### Obtener fichero
```this.$gestios.media.get(id)```

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

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID de fichero|```Integer```|<required />|


### Compartir fichero
```this.$gestios.media.share({ id, ts })```

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
|id|ID del fichero|```Integer```|<required />|
|ts|Fecha de caducidad en timestamp|```String```|<required />|


### Subir fichero
```this.$gestios.media.add({ file, name, folder = '' })```

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
|file|Fichero a subir|```Blob```|<required />|
|name|Nombre del fichero|```String```|<required />|
|folder|Carpeta en donde se alojará el fichero|```String```|```null```|


#### Permisos necesarios: <role scope="add._media" />


### Eliminar fichero
```this.$gestios.media.delete(id)```

Genera un enlace publico para compartir el fichero hasta una fecha determinada

``` js
this.$gestios.media.delete(1).then((result) => {
	console.log(result);
});

// {
//     ok: true,
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID del fichero|```Integer```|<required />|


#### Permisos necesarios: <role scope="del._media" />


