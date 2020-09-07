
# 👨‍👩‍👧‍👦 Grupos


### Listar grupos
```this.$gestios.groups.list({ reset = false, silent = false })```

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

#### Permisos necesarios: <role scope="view._groups" />
