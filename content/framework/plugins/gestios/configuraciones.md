
# 🔧 Configuraciones

Cada proyecto puede disponer de parámetros de configuración propios o claves. Estas sirven para gestionar de forma rapida y sencilla valores que cambian cada cierto tiempo, como puede ser el porcentaje de impuestos de una factura.

<error>Todos los usuarios del proyecto tienen acceso a estos parámetros. Es importante que no lo utilices para guardar información confidencial como contraseñas.</error>

### Listar claves
```this.$gestios.config.list(keys)```

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

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|keys|Array de claves a consultar|```Array```|<required />|



### Modificar claves
```this.$gestios.config.edit(keys)```

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
|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|keys|Objeto con las claves a modificar|```Object```|<required />|


#### Permisos necesarios: <role scope="set._config" />


### Eliminar claves
```this.$gestios.config.del(keys)```

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

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|keys|Array de claves a eliminar|```Array```|<required />|


#### Permisos necesarios: <role scope="del._config" />
