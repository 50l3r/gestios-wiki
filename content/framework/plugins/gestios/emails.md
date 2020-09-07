
# 📨 Emails

Disponemos de un servicio de envío de email con tracking incluido, que nos permite compartir información con terceros o enviar notificaciones específicas.

<alert>Este servicio no ofrece la opción de correo entrante. En el caso de que la persona a la que se le ha enviado el email responda al mismo este llegará a la dirección de email del usuario que lo envió.</alert>

### Listar emails
```this.$gestios.emails.list({ page = 1, folder = null, reset = false, silent = false })```

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

- **<role scope="view._emails" />** Ver todos los emails

</div>

### Listar carpetas
```this.$gestios.emails.folders({ page = 1, reset = true, silent = false })```

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

- **<role scope="view._emails.folders" />** Ver todas las carpetas

</div>


### Enviar email
```this.$gestios.emails.send({ email, subject, message, cc = [], replyto = '', folder = '' })```

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
|email|Emails destinatarios|```Array```|<required />|
|subject|Asunto del mensaje|```String```|<required />|
|message|Cuerpo del mensaje en formato HTML|```String```|<required />|
|cc|Emails en copia|```Array```|```null```|
|replyto|Direccion de email de respuesta|```String```|```null```|
|folder|Carpeta en la que se guardara el email|```String```|```null```|


<info>Si no se especifica el parámetro **replyto** se asignará por defecto la dirección de email del usuario que lo haya enviado</info>

#### Permisos necesarios:

<div class="list-unstyle">

- **<role scope="send._emails" />** Ver todas las carpetas

</div>


### Eliminar email
```this.$gestios.emails.delete(id)```

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

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID de email|```Integer```|<required />|


#### Permisos necesarios: <role scope="del._emails" />




