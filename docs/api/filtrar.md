# Filtrar resultados

Los filtros nos permiten recibir información preciosa simplemente facilitando unas propiedades especificas:

``` js
[{
	_ParentOperator:"OR",
	_Operator:"AND",
	Fields: {
        date: {
			type:2,
			date_to:"2020-01-01", //YYYY-MM-DD
			date_from:"2020-02-01" //YYYY-MM-DD
		},
		name: {
			type:4,
			string:"hyundai",
			opt:"%"
		}
	}
},{
	_ParentOperator:"OR",
	_Operator:"AND",
	Fields: {
        _EntityCreateUser_: {
			type:2,
			string:123,
			opt:"="
		}
	}
}]
```

En este ejemplo recogemos los coches con el **nombre** que **contenga** ***"hyundai"*** y sean de **fecha entre** el ***1 de enero de 2010 y el 2 de febrero de 2020***, o que los haya dado de alta en el sistema el usuario 123 (Jhon Doe)


| Propiedad  |Descripcion |Tipo | Predefinido |
|---------|---------|---------|---------|
|_ParentOperator     | Define si el condicional padre será **AND** u **OR**        | ```String``` | <Badge text="Obligatorio" type="error" /> |
|_Operator     | Define si el condicional entre sus campos será **AND** u **OR**        | ```String``` | <Badge text="Obligatorio" type="error" /> |
|Fields     | Objeto que contiene todos los campos por los que se filtraran | ```Object``` | <Badge text="Obligatorio" type="error" /> |

### Fields

::: warning 🧠 Debes saber que...
Es importante recalcar que los filtros como Categoria, Fecha o Relacion solo funcionaran en los casos en los que los campos a filtrar sean de ese tipo
:::

#### 1: Categoria
Permite filtrar por un campo tipo categoria, donde el valor enviado son las claves de cada opcion de la categoria (0,1,2...etc)

| Propiedad  |Descripcion |Tipo | Predefinido |
|---------|---------|---------|---------|
|type     | Tipo de filtro <small>*(1 en este caso)*</small> | ```String``` | <Badge text="Obligatorio" type="error" /> |
|string     | Valor del filtro | ```String``` | <Badge text="Obligatorio" type="error" /> |

#### 2: Fecha
Permite acotar los resultados por fechas en campos de este tipo

| Propiedad  |Descripcion |Tipo | Predefinido |
|---------|---------|---------|---------|
|type     | Tipo de filtro <small>*(2 en este caso)*</small> | ```String``` | <Badge text="Obligatorio" type="error" /> |
|date_from     | Valor del filtro <small>*(Formato: YYYY-MM-DD)*</small> | ```String``` |  |
|date_to     | Valor del filtro <small>*(Formato: YYYY-MM-DD)*</small> | ```String``` |  |

::: warning  🧠 Debes saber que...
Al menos uno de los dos campos debe existir <small>*(date_from o date_to)*</small>
:::

#### 3: Número
Filtra resultados en base a un numero determinado, pudiendo realizar distintas operaciones de comparacion. Igual, mayor o menos, diferente...etc.

| Propiedad  |Descripcion |Tipo | Predefinido |
|---------|---------|---------|---------|
|type     | Tipo de filtro <small>*(3 en este caso)*</small> | ```String``` | <Badge text="Obligatorio" type="error" /> |
|opt     | Tipo de operacion para la comparación (=, <=, >=, !=) | ```String``` | <Badge text="Obligatorio" type="error" /> |
|int     | Valor del filtro | ```Number``` | <Badge text="Obligatorio" type="error" /> |

#### 4: Texto
Permite buscar un string en un campo concreto.

| Propiedad  |Descripcion |Tipo | Predefinido |
|---------|---------|---------|---------|
|type     | Tipo de filtro <small>*(4 en este caso)*</small> | ```String``` | <Badge text="Obligatorio" type="error" /> |
|string     | Valor del filtro | ```String``` | <Badge text="Obligatorio" type="error" /> |

#### 5: Relacion
Filtra el campo segun el campo relacional dado

| Propiedad  |Descripcion |Tipo | Predefinido |
|---------|---------|---------|---------|
|type     | Tipo de filtro <small>*(5 en este caso)*</small> | ```String``` | <Badge text="Obligatorio" type="error" /> |
|string     | Valor del filtro | ```String``` | <Badge text="Obligatorio" type="error" /> |

::: warning  🧠 Debes saber que...
Este filtro esta en desuso y puede ser reemplazado por el filtro 3 con operacion "="
:::
