'use strict'

// Mensaje que confirma que el archivo JS se cargó correctamente
alert("Este archivo se cargo de la manera correcta (24_platillas)");

/*
PLANTILLAS DE TEXTO (TEMPLATE LITERALS)

Las plantillas de texto usan comillas invertidas (` `)
y permiten:

- Escribir texto en múltiples líneas
- Insertar variables usando ${variable}
- Evitar concatenaciones con +
*/

// Se solicita el nombre al usuario mediante un prompt
var nombre = prompt("Dime tu nombre");

// Se solicitan los apellidos al usuario
var apellidos = prompt("Dime tus apellidos");

// Forma tradicional (comentada) usando concatenación
// var texto = "Tu nombre es: "+nombre+" <br/> Tus apellidos son: "+apellidos;

/*
Uso de Template Literals:

- Se usan comillas invertidas ` `
- ${nombre} y ${apellidos} insertan las variables dentro del texto
- Permite escribir HTML en varias líneas de forma más limpia
*/
var texto = `
	<h1>Hola, buen día</h1>
	<h3>Mi nombre es: ${nombre}</h3>
	<h3>Mi apellido es: ${apellidos}</h3>
`;

// Se escribe el contenido generado directamente en el documento HTML
document.write(texto);