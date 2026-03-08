'use strict'

/*
JSON - JavaScript Object Notation

JSON es un formato de datos utilizado para almacenar
y transportar información.

En JavaScript se representa mediante objetos con
propiedades clave:valor.

Ejemplo:
{
    titulo: "Batman",
    year: 2005,
    pais: "USA"
}
*/


/*
CREACIÓN DE UN OBJETO

Se crea un objeto llamado "pelicula" con diferentes
propiedades que describen una película.
*/

var pelicula = {
    titulo: 'Batman El caballero inicia',
    year: 2095,
    pais: 'Estados unidos'
};


/*
CREACIÓN DE UN ARRAY DE OBJETOS

Se crea un arreglo llamado "peliculas" que contiene:

1. Un objeto literal con información de una película
2. El objeto "pelicula" previamente creado

Esto demuestra que los arrays pueden almacenar objetos.
*/

var peliculas = [
    {titulo: "No se aceptan devoluciones", year: 2015, pais: "México"},
    pelicula
];


/*
SELECCIÓN DEL CONTENEDOR EN EL DOM

Se selecciona el elemento HTML con id="peliculas"
donde se mostrarán las películas.
*/

var cajaPeliculas = document.querySelector("#peliculas"); 

/*
RECORRER EL ARRAY DE PELÍCULAS

Se utiliza un bucle for...in para recorrer cada elemento
del arreglo "peliculas".
*/

var index;

for(index in peliculas){

    /*
    CREACIÓN DE ELEMENTO HTML
    Se crea un elemento <p> para mostrar la información
    de cada película.
    */
    var p = document.createElement("p");

    /*
    SE INSERTA TEXTO DENTRO DEL PÁRRAFO
    Se concatena el título y el año de la película.
    */
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);

    /*
    SE AGREGA EL PÁRRAFO AL CONTENEDOR DEL DOM
    */
    cajaPeliculas.append(p);
}