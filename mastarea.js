// 1) Programa una función que cuente el número de caracteres de una cadena de texto,
//  pe. miFuncion("Hola Mundo") devolverá 10. y otra donde no se cuente el espacio como caracter.

//  2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
//  pe. miFuncion("Hola Mundo", 4) devolverá "Hola". y otra donde no importa cuantos espacios se coloquen delante
// la palabra, la funcion los va a ignorar , ademas de los espacios dentro del string ,que tambien seran ignorados,
// empezara a contar desde la primera letra

//  3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
//  pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

//  4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
// devolverá Hola Mundo Hola Mundo Hola Mundo.

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo")
//  devolverá "odnuM aloH".

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
//  pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
// (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
//  pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// 5) Programa una función que invierta las palabras de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
// pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo
//  (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
//  pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, 
// pe. miFuncion(7) devolverá true.

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") 
// devolverá 32°F.

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) 
// devolverá 4 base 10.

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
// pe. miFuncion(1000, 20) devolverá 800.

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
//  pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
// pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") 
// devolverá verdadero.

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") 
// devolverá verdadero.

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
//  pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
// pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero 
// almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá 
// {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
//  el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
//  pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
//  pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

// 26) Programa una función que dado un arreglo de números obtenga el promedio,
//  pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB,
//  titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
//  RESULTADO DEL ULTIMO EJERCICIO https://www.youtube.com/watch?v=LqXh7jOfLlM&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=44&ab_channel=jonmircha
const $boton1= document.getElementById("boton-resultados-1");
const $boton2= document.getElementById("boton-resultados-2");
const $boton3= document.getElementById("boton-resultados-3");
const $boton4= document.getElementById("boton-resultados-4");
const $boton5= document.getElementById("boton-resultados-5");
const $boton6= document.getElementById("boton-resultados-6");
const $boton7= document.getElementById("boton-resultados-7");
const $boton8= document.getElementById("boton-resultados-8");

const $botonHide1 = document.getElementById("button-hide-1");
const $botonHide2 = document.getElementById("button-hide-2");
const $botonHide3 = document.getElementById("button-hide-3");
const $botonHide4 = document.getElementById("button-hide-4");
const $botonHide5 = document.getElementById("button-hide-5");
const $botonHide6 = document.getElementById("button-hide-6");
const $botonHide7 = document.getElementById("button-hide-7");
const $botonHide8 = document.getElementById("button-hide-8");


let $resultado1 =document.getElementById("resultado-1");
let $resultado2 =document.getElementById("resultado-2");
let $resultado3 =document.getElementById("resultado-3");
let $resultado4 =document.getElementById("resultado-4");
let $resultado5 =document.getElementById("resultado-5");
let $resultado6 =document.getElementById("resultado-6");
let $resultado7 =document.getElementById("resultado-7");
let $resultado8 =document.getElementById("resultado-8");

$boton1.addEventListener("click",mostrarRespuesta);
$boton2.addEventListener("click",mostrarRespuesta2);
$boton3.addEventListener("click",mostrarRespuesta3);
$boton4.addEventListener("click",mostrarRespuesta4);
$boton5.addEventListener("click",mostrarRespuesta5);
$boton6.addEventListener("click",mostrarRespuesta6);
$boton7.addEventListener("click",mostrarRespuesta7);
$boton8.addEventListener("click",mostrarRespuesta8);

$botonHide1.addEventListener("click",ocultarRespuesta);
$botonHide2.addEventListener("click",ocultarRespuesta2);
$botonHide3.addEventListener("click",ocultarRespuesta3);
$botonHide4.addEventListener("click",ocultarRespuesta4);
$botonHide5.addEventListener("click",ocultarRespuesta5);
$botonHide6.addEventListener("click",ocultarRespuesta6);
$botonHide7.addEventListener("click",ocultarRespuesta7);
$botonHide8.addEventListener("click",ocultarRespuesta8);



function mostrarRespuesta(){
    $botonHide1.style.display ="unset";
    $boton1.style.display = "none";
    $resultado1.style.display = "flex";
}
function mostrarRespuesta2(){
    $botonHide2.style.display ="unset";
    $boton2.style.display = "none";
    $resultado2.style.display = "flex";
}
function mostrarRespuesta3(){
    $botonHide3.style.display ="unset";
    $boton3.style.display = "none";
    $resultado3.style.display = "flex";
}
function mostrarRespuesta4(){
    $botonHide4.style.display ="unset";
    $boton4.style.display = "none";
    $resultado4.style.display = "flex";
}
function mostrarRespuesta5(){
    $botonHide5.style.display ="unset";
    $boton5.style.display = "none";
    $resultado5.style.display = "flex";
}
function mostrarRespuesta6(){
    $botonHide6.style.display ="unset";
    $boton6.style.display = "none";
    $resultado6.style.display = "flex";
}
function mostrarRespuesta7(){
    $botonHide7.style.display ="unset";
    $boton7.style.display = "none";
    $resultado7.style.display = "flex";
}
function mostrarRespuesta8(){
    $botonHide8.style.display ="unset";
    $boton8.style.display = "none";
    $resultado8.style.display = "flex";
}



function ocultarRespuesta(){
    $botonHide1.style.display = "none";
    $resultado1.style.display = "none";
    $boton1.style.display = "";

}
function ocultarRespuesta2(){
    $botonHide2.style.display = "none";
    $resultado2.style.display = "none";
    $boton2.style.display = "";

}
function ocultarRespuesta3(){
    $botonHide3.style.display = "none";
    $resultado3.style.display = "none";
    $boton3.style.display = "";

}
function ocultarRespuesta4(){
    $botonHide4.style.display = "none";
    $resultado4.style.display = "none";
    $boton4.style.display = "";

}
function ocultarRespuesta5(){
    $botonHide5.style.display = "none";
    $resultado5.style.display = "none";
    $boton5.style.display = "";

}
function ocultarRespuesta6(){
    $botonHide6.style.display = "none";
    $resultado6.style.display = "none";
    $boton6.style.display = "";

}
function ocultarRespuesta7(){
    $botonHide7.style.display = "none";
    $resultado7.style.display = "none";
    $boton7.style.display = "";

}
function ocultarRespuesta8(){
    $botonHide8.style.display = "none";
    $resultado8.style.display = "none";
    $boton8.style.display = "";

}
// ___________________________________________________________________________________________________

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
// (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
