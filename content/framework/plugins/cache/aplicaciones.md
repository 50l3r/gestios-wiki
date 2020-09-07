# 📦 Aplicaciones

Dispondremos de toda la información de nuestras aplicaciones. Campos, propiedades, validaciones...etc.

Es posible que utilices en mayor medida las funciones de consulta de registros, dado que las demás se realizan de forma automática por otros plugins como el de GestiOS. Este se encarga de añadir, editar y eliminar los registros en la caché directamente.

## Listar aplicaciones
```this.$cache.apps()```

Devuelve todas las aplicaciones cacheadas del proyecto

``` js
this.$cache.apps();

// [
//	{
//	    ID: "102",
//	    Name: "Cars",
//	    NameSingular: "Car",
//	    Permalink: "cars",
//	    ElementsPerPage: "20",
//	    Fields:{
//		   date:{
//			  ID: "384",
//			  Name: "CarDate",
//			  Type: "date",
//			  Required:true,
//			  Maxlength: "0",
//			  Searchable:false,
//			  Placeholder: "Manufactured Date",
//			  Vars: "",
//			  Parser: ""
//		   },
//		   name:{
//			 ID: "387",
//			 Name: "Name",
//			 Type: "text",
//			 Required:true,
//			 Maxlength: "50",
//			 Searchable:true,
//			 Placeholder: "Car Name",
//			 Vars: "",
//			 Parser: ""
//		  },
//		  brand:{
//			  ID: "387",
//			  Name: "Brand",
//			  Type: "relation",
//			  Required:true,
//			  Maxlength: "50",
//			  Searchable:true,
//			  Placeholder: "Car Name",
//			  Vars: "{
//				"type": "single",
//				"table": "brands",
//				"column": "_EntityId",
//				"return":["name"],
//				"group_duplicates": "true",
//				"ondelete": "set_null"
//			  }",
//			  Parser: ""
//		  },
//	   }
//	},
//	{
//	    ID: "142",
//	    Name: "Brands",
//	    NameSingular: "Brand",
//	    Permalink: "brands",
//	    ElementsPerPage: "20",
//	    Fields:{
//		   category:{
//			  ID: "655",
//			  Name: "name",
//			  Type: "text",
//			  Required:true,
//			  Maxlength: "200",
//			  Searchable:true,
//			  Placeholder: "Brand Name",
//			  Vars: "",
//			  Parser: ""
//		   },
//		   name:{
//			  ID: "656",
//			  Name: "logo",
//			  Type: "media",
//			  Required:false,
//			  Maxlength: "",
//			  Searchable:false,
//			  Placeholder: "Image Logo",
//			  Vars: "",
//			  Parser: ""
//		  },
//	   }
//	}
// ]
```

## Listar campos de aplicaciones
```this.$cache.apps(APPNAME).fields```

Devuelve todos los campos de una aplicacion específica cacheadas del proyecto

``` js
this.$cache.apps('cars').fields

// {
// 	    date: {
// 		    ID: "384",
// 		    Name: "date",
// 		    Type: "date",
// 		    Required:true,
// 		    Maxlength: "0",
// 		    Searchable:false,
// 		    Placeholder: "Manufactured Date",
// 		    Vars: "",
// 		    Parser: ""
// 	    },
// 	    name: {
// 		    ID: "387",
// 		    Name: "name",
// 		    Type: "text",
// 		    Required:true,
// 		    Maxlength: "50",
// 		    Searchable:true,
// 		    Placeholder: "Car Name",
// 		    Vars: "",
// 		    Parser: ""
// 	    },
// 	    brand: {
// 		    ID: "387",
// 		    Name: "brand",
// 		    Type: "relation",
// 		    Required:true,
// 		    Maxlength: "50",
// 		    Searchable:true,
// 		    Placeholder: "Car Name",
// 		    Vars:{
// 			    "type": "single",
// 			    "table": "brands",
// 			    "column": "_EntityId",
// 			    "return":["name"],
// 			    "group_duplicates": "true",
// 			    "ondelete": "set_null"
// 		    },
// 		    Parser: ""
// 	    }
// }
```


## Obtener campo de aplicación
```this.$cache.apps(APPNAME).field(fieldName)```

Devuelve todos los campos de una aplicacion específica cacheadas del proyecto

``` js
this.$cache.apps('cars').fields('name')

// {
//      ID: "387",
// 	    Name: "name",
// 	    Type: "text",
// 	    Required: true,
// 	    Maxlength: "50",
// 	    Searchable: true,
//      Placeholder: "Car Name",
// 	    Vars: "",
// 	    Parser: ""
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|fieldName|Nombre del campo a consultar|```String```|<required />|




## Listar registros
```this.$cache.items(APPNAME).list```

Devuelve todos los registros cacheados de una aplicacion específica


``` js
this.$cache.items('cars').list;

// {
//	    total: 2,
//	    results: [{
//		    name: "Hyundai Coupe 1.6",
//		    date: "2019-05-04",
//		    brand: 1,
// 		    _Comments: [],
//		    _EntityCreateDate: "2019-05-04 20:11:23",
//		    _EntityCreateIp: "127.0.0.1",
//		    _EntityCreateUser: {ID: 123, Nick: "jhondoe", Nombre: "Jhon Doe", Email: "jhon@doe.com"},
//		    _EntityId: 18,
//		    _EntityStatus: 1,
//		    _EntityUpdateDate: null,
//		    _EntityUpdateIp: null,
//		    _EntityUpdateUser: null
// 	    },{
//		    name: "Hyundai Accent 2.0",
//		    date: "2019-06-01",
//		    brand: 1,
// 		    _Comments: [],
//		    _EntityCreateDate: "2019-05-03 16:11:23",
//		    _EntityCreateIp: "127.0.0.1",
//		    _EntityCreateUser: {ID: 123, Nick: "jhondoe", Nombre: "Jhon Doe", Email: "jhon@doe.com"},
//		    _EntityId: 19,
//		    _EntityStatus: 1,
//	        _EntityUpdateDate: null,
//	        _EntityUpdateIp: null,
//		    _EntityUpdateUser: null
// 	    }]
// }
```


## Obtener registro
```this.$cache.items(APPNAME).get(id)```

Devuelve el registro específico cacheado de una aplicacion

``` js
this.$cache.items('cars').get(18);

// {
// 	    name: "Hyundai Coupe 1.6",
// 	    date: "2019-05-04",
// 	    brand: 1,
// 	    _Comments: [],
// 	    _EntityCreateDate: "2019-05-04 20:11:23",
//     	_EntityCreateIp: "127.0.0.1",
// 	    _EntityCreateUser: {ID: 123, Nick: "jhondoe", Nombre: "Jhon Doe", Email: "jhon@doe.com"},
// 	    _EntityId: 18,
// 	    _EntityStatus: 1,
//     	_EntityUpdateDate: null,
// 	    _EntityUpdateIp: null,
// 	    _EntityUpdateUser: null
// }

```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID único del registro|```Integer```|<required />|


## Añadir registro
```this.$cache.items(APPNAME).add(params)```

Añade un registro a la cache de la aplicación

``` js
this.$cache.items('cars').add({
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
	_EntityUpdateUser: null
});
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|params|Datos del registro a añadir|```Object```|<required />|


## Editar registro
```this.$cache.items(APPNAME).edit({ id, params })```

Modifica un registro en la cache de la aplicación

``` js
this.$cache.items('cars').edit({
    id: 18,
    params: {
    	name: "Hyundai Coupe 1.8",
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
    	_EntityUpdateUser: null
    }
});
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID único del registro|```Integer```|<required />|
|params|Datos del registro a añadir|```Object```|<required />|


## Eliminar registro
```this.$cache.items(APPNAME).delete(id)```

Elimina un registro de la cache de la aplicación

``` js
this.$cache.items('cars').delete(18);
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|id|ID único del registro|```Integer```|<required />|


