# 🔧 Configuraciones


## Listar configuraciones
```this.$cache.config```

Obtiene un listado de las configuraciones del proyecto

``` js
this.$cache.config;

// {
//     iva: 21,
//     work_hours: '09:00 18:00',
// }
```

## Obtener configuración
```this.$cache.config.get(key)```

Obtiene los datos de una parámetro de configuración específico

``` js
this.$cache.config.get('iva');
// 21
```

|Propiedad|Descripcion|Tipo|Predefinido|
|---------|---------|---------|---------|
|key|Clave de la configuraciñon|```String```|<required />|




