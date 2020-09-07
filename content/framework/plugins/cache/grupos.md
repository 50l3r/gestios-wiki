

# 👨‍👩‍👧‍👦 Grupos


## Listar grupos
```this.$cache.groups```

Obtiene un listado de los grupos del proyecto

``` js
this.$cache.groups;

// {
//     total: 2,
//     results: [
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

## Obtener grupo
```this.$cache.group(groupId)```

Obtiene los datos de un usuario específico

``` js
this.$cache.group(5);

// {
// 	    Name: "Operator",
// 	    ID: 5,
// }
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|groupId|ID de grupo|```Number```|<required />|



