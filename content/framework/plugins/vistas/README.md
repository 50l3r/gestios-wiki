# 👀 Vistas

Las vistas recogen información de un aplicativo con unos determinados filtros y se almacena en caché para evitar consultas adicionales a los servicios de API. Pueden ser accesibles desde cualquier sitio y son reactivas a cualquier cambio.

## Listar vistas

```this.$views```

Devuelve todas las vistas almacenadas en cache

``` js
this.$views;

// {
//     carViewTable: {
//         total: 1,
//         results: [{
//             name: "Hyundai Coupe 1.6",
//             date: "2019-05-04",
//             brand: 1,
//     		   _Comments: [],
//             _EntityCreateDate: "2019-05-04 20:11:23",
//             _EntityCreateIp: "127.0.0.1",
//             _EntityCreateUser: {ID: 123, Nick: "jhondoe", Nombre: "Jhon Doe", Email: "jhon@doe.com"},
//             _EntityId: 18,
//             _EntityStatus: 1,
//             _EntityUpdateDate: null,
//             _EntityUpdateIp: null,
//             _EntityUpdateUser: null
//     	  }]
//     },
//     view1: {
//         total: 0,
//         results: []
//     },
// }
```



## Crear vista
```this.$views.init(key)```

Instancia una nueva vista con el nombre proporcionado

``` js
this.$views.init('carViewTable');
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|key|Nombre único de la vista|```String```|<required />|



## Obtener vista
```this.$views.get(key)```

Obtiene los datos de una vista

``` js
this.$views.get('carViewTable');

// {
//      app: 'cars',
//      total: 1,
// 	    results: [{
// 		    name: "Hyundai Coupe 1.6",
// 		    date: "2019-05-04",
// 		    brand: 1,
// 			_Comments: [],
// 		    _EntityCreateDate: "2019-05-04 20:11:23",
// 		    _EntityCreateIp: "127.0.0.1",
// 		    _EntityCreateUser: {ID: 123, Nick: "jhondoe", Nombre: "Jhon Doe", Email: "jhon@doe.com"},
// 		    _EntityId: 18,
// 		    _EntityStatus: 1,
// 		    _EntityUpdateDate: null,
// 		    _EntityUpdateIp: null,
// 		    _EntityUpdateUser: null
// 	    }]
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|key|Nombre único de la vista|```String```|<required />|


## Vaciar vista
```this.$views.get(key).wipe()```

Vacia la vista seleccionada

``` js
this.$views.get('carViewTable').wipe();
```
|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|key|Nombre único de la vista|```String```|<required />|


## Rellenar vista
```this.$views.get(key).fill({ app, data, reset = false })```

Inserta datos en la vista seleccionada

``` js
this.$views.get('carViewTable').fill({
    app: 'cars',
    data: {
        total: 1,
        data: [{
    		name: "Hyundai Coupe 1.6",
    		date: "2019-05-04",
    		brand: 1,
    		_Comments: [],
    		_EntityCreateDate: "2019-05-04 20:11:23",
    		_EntityCreateIp: "127.0.0.1",
    		_EntityCreateUser: {ID: 123, Nick: "jhondoe", Nombre: "Jhon Doe", Email: "jhon@doe.com"},
    		_EntityId: 18,
    		_EntityStatus: 1,
    		_EntityUpdateDate: null,
    		_EntityUpdateIp: null,
    		_EntityUpdateUser: null,
    	}]
	},
    reset: false
});
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|app|Nombre de la aplicación|```String```|<required />|
|data|Array de registros a insertar|```Array```|<required />|
|reset|Limpiar los registros anteriores o añadir sobre ellos|```Boolean```|```false```|
