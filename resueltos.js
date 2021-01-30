
// 1) Programa una función que cuente el número de caracteres de una cadena de texto,
//  pe. miFuncion("Hola Mundo") devolverá 10. y otra donde no se cuente el espacio como caracter.
function contarCaracteres(string){
    return console.log(string.length)
}
contarCaracteres("hola mundo");

function contarCaracteresSinEspacio(string){
    let contador = 0 ;
    for (i=0; i < string.length;i++){
        if(string[i] != " "){
            contador++;
        }
    }
    return console.log(contador);
}
contarCaracteresSinEspacio("hola mundo");

//  2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
//  pe. miFuncion("Hola Mundo", 4) devolverá "Hola". y otra donde no importa cuantos espacios se coloquen delante
// la palabra, la funcion los va a ignorar , ademas de los espacios dentro del string ,que tambien seran ignorados,
// empezara a contar desde la primera letra

function recortarString(string, number){
    let palabraRecortada = string[0];
    for (i=1;i<string.length;i++){
        if (number >= i){
            palabraRecortada += string[i];
        }
    }
    console.log(palabraRecortada);
}
recortarString("hola mundo", 7);

function recortarStringSinEspacios(string, number){
    let i2;
    for(let i=0;i<string.length;i++){
        if (string[i] != " "){
            i2 = i;
            break;
        }
    }
    let number2 = number + i2;
    let i3 = i2++
    let palabraRecortada= string[i3]
    for(i2;i2<string.length;i2++){
        if (number2 >= i2){
            palabraRecortada += string[i2];
        }
    }    
    console.log(palabraRecortada);
}
recortarStringSinEspacios("     hola mundo", 5);

//  5) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
//  pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function stringToArray(string){
let array =[];
let palabra= string[0];

for (let i=1;i<string.length;i++){
    if(string[i] != " "){
        palabra += string[i];
    }
    if (string[i] === " "){
    array.push(palabra);
    i+=1;      
    palabra=string[i];
    }
}
return console.log(array);
}
stringToArray("Hola que tal como andas todo bien ");

//  6) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
// devolverá Hola Mundo Hola Mundo Hola Mundo.

function repiteTextoXVeces(string,veces){
    string = string + " ";
    string= string.repeat(veces);
    console.log(string);
    string = string + " ";
    string= string.trim()
     return console.log(string);
}
repiteTextoXVeces("hola mundo",16);

// 7) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo")
//  devolverá "odnuM aloH".
function darVueltaPalabra(string){
    let p = (string.length - 1 );           
    let ultimaLetra= string[p];     

    for(let i=(string.length - 2);i>=0;i--){
        ultimaLetra += string[i];
    }
    return console.log(ultimaLetra);
}
darVueltaPalabra("hola mundo como andan");
// 8) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
//  pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

function contarPalabrasRepetidas(string,string2){
    let contador =0;

    stringSeparado = string.split(' ');
    console.log(stringSeparado);
    for (let i=0;i<stringSeparado.length;i++){
        console.log(stringSeparado[i]);
        if (stringSeparado[i] === string2){
            contador++;
        }
    }
    return console.log("La palabra que eligio se repite "+contador+" veces.");
}
contarPalabrasRepetidas("hola mundo adios mundo que bello mundo te amo mundo", "mundo");