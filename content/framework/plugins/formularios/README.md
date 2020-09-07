# 📑 Formularios

Estos guardan toda la información de los campos rellenados en cada formulario de la plataforma. Podremos obtener los datos de cualquier formulario de la plataforma o incluso guardar los campos en cache si se necesita.

## Listar formularios
```this.$forms```

Devuelve todos los formularios instanciados

``` js
this.$forms;

// {
//     form1: {
//         name: "Hyundai Coupe 1.6",
//         date: "2019-05-04",
//         brand: 1,
//     },
//     form2: {
//         name: 'Mazda',
//         logo: ''
//     },
// }
```

## Obtener formulario
```this.$forms.get(key)```

Devuelve los datos del formulario especificado

``` js
this.$forms.get('form1');

// {
// 	name: "Hyundai Coupe 1.6",
// 	date: "2019-05-04",
// 	brand: 1,
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|key|Nombre del formulario|```String```|<required></required>|


## Obtener/Modificar campo
```this.$forms.get(key).field(name, value = null)```

Devuelve el campo del formulario. Si se especifica el segundo parámetro lo modifica.

``` js
this.$forms.get('form1').field('name', 'Hyundai Coupe 2.0');
this.$forms.get('form1').field('name');

// 	"Hyundai Coupe 1.6",
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|name|Nombre del campo|```String```|<required />|
|value|Valor del campo a modificar|```Mixed```|```null```|


## Limpiar formulario
```this.$forms.get(key).wipe()```

Establece a **```null```** los campos del formulario especificado.

``` js
this.$forms.get('form1').wipe();
// {
// 	name: null,
// 	date: null,
// 	brand: null,
// }
```

## Eliminar formulario
```this.$forms.get(key).delete()```

Elimina por completo el formulario

``` js
this.$forms.get('form1').delete();
