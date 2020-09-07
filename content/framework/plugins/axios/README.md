
# 🌏 Axios

Este plugin se divide en 3 instancias distintas de [axios](https://github.com/axios/axios), y cada uno se utilizará en funcion del destino al que vaya dirigido la peticion.

Es usado para **ejecutar las funciones que la API de GestiOS no realiza**, tales como generar documentos, importar o exportar datos...etc.

No es necesaria ninguna configuración previa. Cada plugin **inyecta su url base y credenciales** necesarias para simplificar la llamada.

## Sandbox
```this.$sandbox```

Esta pensado para realizar peticiones al entorno de sandbox de GestiOS:

``` js{2}
//Download & open invoices excel
const response = await this.$sandbox.post('invoices/excel', params, { responseType: 'blob' });
const url = window.URL.createObjectURL(new Blob([response.data]));
window.open(url)
```

<alert>Este entorno esta en desuso y será removido en favor de **$lambda**</alert>

## Lambda
```this.$lambda```

Esta pensado para realizar peticiones al entorno de lambda. El funcionamiento es similar al de sandbox:

``` js{2}
//Generate pdf invoice
this.$lambda.get(`invoices-pdf/${invoice._EntityId}/${invoice.token}`).then((response) => {
	const item = response.data;
	this.$cache.items('invoices').edit({ id: item._EntityId, params: item });
	this.$message.error('Albaran generado 😄');
}).catch((err) => {
	this.$message.error(err.message);
});
```

## Otros
```this.$http```

Pensado para peticiones externas que no tienen que ver con GestiOS
