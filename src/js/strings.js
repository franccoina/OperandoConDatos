// David Francisco Blandón Mena
// Clan Gates, RIWI
// 21.04.2024

// EJERCICIOS JS: Scripts

// 1. SUMA DE NUMEROS

let num1 = 23;
let num2 = 90;
let sum = num1 + num2;

console.log(sum);
console.log("");

// 2. LENGHT Y 7. CONCATENAR FUNCTION

let simpleString1 = "Hola";
let simpleString2 = "Mundooo";
let concatenado1 = simpleString1.concat(simpleString2);

console.log(simpleString1.length);
console.log(simpleString2.length);
console.log(concatenado1.length);
console.log("");

// 3. STRING FUNCTION

let stringUsingString1 = String("JavaScript");
let stringUsingString2 = String("Ejercicios");

console.log(stringUsingString1, stringUsingString2);
console.log("");

// 4. NEW STRING FUNCTION

let stringUsingNewString1 = new String("Concatenar");
let stringUsingNewString2 = new String("Strings");

console.log(stringUsingNewString1, stringUsingNewString2);
console.log("");

// 5. SEARCH

console.log(simpleString1.search("la"));
console.log("");

// 6. INCLUDES

console.log(simpleString2.includes("ndo"));
console.log("");

// 8. CONCATENAR +

console.log(simpleString1 + " " + simpleString2);
console.log("");

// 9. TEMPLATE STRING

console.log(`${simpleString1} ${simpleString2}`);
console.log("");

// 10. TRIMS

let stringWithSpaces1 = " TrimStart";
let stringWithSpaces2 = "TrimEnd ";

console.log(stringWithSpaces1.trimStart());
console.log(stringWithSpaces2.trimEnd());
console.log("");

// 11. REPLACE

console.log(simpleString1.replace("o", "i"));
console.log("");

// 12. SLICE

console.log(simpleString2.slice(0, 3));
console.log("");

// 13. SUBSTRING

console.log(simpleString2.substring(2));
console.log("");

//14. REPEAT

console.log(simpleString1.repeat(2));
console.log("");

//15. DIVISION CON SPLIT

let text = "Esto es una oración de ejemplo";

console.table(text.split(" "));
console.log(text.split(" "));
console.log("");

//16. MAYUS Y 17. MINUS

console.log(simpleString2.toUpperCase());
console.log(simpleString1.toLowerCase());
console.log("");

//18. BOOL VAR, TYPE OF

let booleana = false;

console.log(typeof booleana);
console.log("");

//19. LENGTH ARRAY

let array = ['pera','mora','mango','piña','fresa']

console.log(array.length);
console.log("");

//20. OBJ CON 3 PROPIEDADES, TYPE OF

let object = {1:'pera',2:333330,3:true}

console.log(typeof object[1]);
console.log(typeof object[2]);
console.log(typeof object[3]);
console.log("");

//21. NULL VAR, TYPE OF

let nulo = null

console.log(typeof nulo);
console.log("");

//22. UNDEFINED VAR, TYPE OF

let undef = undefined

console.log(typeof undef);
console.log("");

//23. DECIMAL VAR, TYPE OF

let decimal = 3.5

console.log(typeof decimal);
console.log("");

//24. NEG VAR, TYPE OF

let negativo = -37

console.log(typeof negativo);
console.log("");

//25. INDEX OF

let casa = 'casa'

console.log(simpleString1.indexOf("a"));
console.log("");

//26.INCLUDES

let cadenaJS = "Javascript";

console.log(simpleString1.includes("Script"));
console.log("");

//27.CONCATENAR FUNCTION

let hola = "Hola";
let mundo = "Mundo";

console.log(hola.concat(" ",mundo));
console.log("");

//28.CONCATENAR +

console.log(hola + " " + mundo);
console.log("");

//29.TEMPLATE STRING

console.log(`${hola} ${mundo}`);
console.log("");

//30. TRIM
let cadenaConEspacios = "  Ejemplo con espacios  ";
console.log(cadenaConEspacios.trimStart());
console.log(cadenaConEspacios.trimEnd());
console.log("");

//31. REPLACE
let message = "El cielo es azul";
console.log(`Text ${message} `);
console.log(message.replace("azul", "rojo"));
console.log("");

//32. SLICE
let programming = "programacion";
console.log(programming.slice(8));
console.log("");

//33. SUBSTRING
let messageJs = "JavaScript";
console.log(messageJs.substring(2));
console.log("");

//34. REPEAT
let messageH = "Hola";
console.log(messageH.repeat(3));
console.log("");

//35. SPLIT
let messageO = "Esto es una oracion de ejemplo";
console.table(messageO.split(" "));
console.log("");

//36. MAYUS
/* se utiliza la variable ya declara messageJs */
console.log(messageJs.toUpperCase());
console.log("");

//37. MINUS
let example = "Ejemplo";
console.log(example.toLowerCase());
console.log("");

//38. NUM VAR, TYPE OF
let numero = 2;
console.log(typeof numero);
console.log("");

//39. BOOL VAR, TYPE OF
let datos = true;
console.log(typeof datos);
console.log("");

//40. LENGTH ARRAY
let arreglo = ["tigre", "gato", "puerco"];
console.log(arreglo.length);
console.log("");

//41. OBJ CON 3 PROPIEDADES, TYPE OF

let objeto = {name: "Luisa",lastName: "Ramirez",age: 22,};

console.info("Ver dato de un objeto");
console.log(objeto.lastName);
console.log("");

//42. NULL VAR, TYPE OF
let nulo2 = null;
console.log(typeof nulo2);
console.log("");

//43. UNDEFINED VAR, TYPE OF
let indefinido;
console.log(typeof indefinido);
console.log("");

//44. DECIMAL, TYPE OF
let decimal2 = 3.14;
console.log(typeof decimal2);
console.log("");

