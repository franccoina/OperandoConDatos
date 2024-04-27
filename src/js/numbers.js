// David Francisco Blandón Mena
// Clan Gates, RIWI
// 21.04.2024

// EJERCICIOS JS: Numbers

//1. Sumar dos números.
let numSuma1 = 4;
let numSuma2 = 2;
let sumaNumeros1 = numSuma1 + numSuma2;

console.log("La suma de los numeros es:", sumaNumeros1);
console.log("");

//2. Restar dos números.
let numResta1 = 4;
let numResta2 = 2;

let restaNumeros1 = numResta1 - numResta2;

console.log("La resta de los numeros es:", restaNumeros1);
console.log("");

//3. Multiplicar dos números.
let numMulti1 = 4;
let numMulti2 = 2;

let multiNumeros1 = numMulti1 * numMulti2;

console.log("La multiplicación de los numeros es:", multiNumeros1);
console.log("");

//4. Dividir dos números.
let numDiv1 = 4;
let numDiv2 = 2;

let divNumeros1 = numDiv1 / numDiv2;

console.log("La división de los numeros es:", divNumeros1);
console.log("");

//5. Calcular el módulo (resto) de una división.
let numMod1 = 4;
let numMod2 = 2;

let modNumeros1 = numMod1 % numMod2;

console.log("El módulo de los numeros es:", modNumeros1);
console.log("");

//6. Generar un número aleatorio entre 1 y 10.
let randomNum1 = Math.floor(Math.random() * ((10 - 1 + 1) + 1));

console.log("Tu número al azar es:", randomNum1)
console.log("");

//7. Elevar un número a la potencia de otro.
let numParaPow = 4;
let numPow = 5

console.log("La potencia del número",numParaPow,"a la",numPow,"es:", Math.pow(numParaPow, numPow));
console.log("");

//8. Calcular la raíz cuadrada de un número.
let numSqrt1 = 4;

console.log("La raíz cuadrada del número es:", Math.sqrt(numSqrt1));
console.log("");

//9. Convertir grados Celsius a Fahrenheit.
let celsius1 = 100
let fahrenheit1 = (celsius1 * (9 / 5)) + 32

console.log("De centigrados a fahreneit es:", fahrenheit1);
console.log("");

//10. Calcular el área de un círculo.
let radioCirculo1 = 3
let areaCirculo1 = Math.PI * (Math.pow(radioCirculo1, 2))

console.log("El perímetro del círculo definido es:",areaCirculo1);
console.log("");

//11.Calcular el perímetro de un cuadrado.
let ladoCuadradoA = 2
let perimetroCuadrado1 = 4 * (ladoCuadradoA)

console.log("El perímetro del cuadrado definido es:",perimetroCuadrado1);
console.log("");

//12.Calcular el volumen de una esfera.
let radioEsfera2 = 3
let volEsfera1 = Math.PI * (Math.pow(radioEsfera2, 3)) * (4 / 3)

console.log("El volumen de la esfera definida es:",volEsfera1);
console.log("");

//13. Calcular el área de un triángulo
let baseTriangulo1 = 2
let alturaTriangulo1 = 4
let areaTriangulo1 = (baseTriangulo1 * alturaTriangulo1) / 2

console.log("El área del triángulo definido es:",areaTriangulo1);
console.log("");

//14. Generar la tabla de multiplicar del número 5.
let tablaMulti1 = 5

console.group("Tabla de multiplicar numero 5");
for (let i = 1; i <= 10; i++) {
    console.log(tablaMulti1 * i);
};
console.groupEnd()
console.log("");

//15. Encontrar el número mayor entre 3, 7 y 2.
let listaNum1 = [3, 7, 2]

console.log("El número mayor de la lista de números 1, es:",Math.max(...listaNum1));
console.log("");

//16. Encontrar el número mayor entre 10, 20 y 5.
let listaNum2 = [10, 20, 5]

console.log("El número menor de la lista de números 2, es:",Math.min(...listaNum2));
console.log("");

//17. Calcular el promedio de 4, 6 y 8.
let listaNum3 = [4, 6, 8];
let sumaListaNum3 = 0

for (let j = 0; j < (listaNum3.length); j++) {
    sumaListaNum3 = sumaListaNum3 + listaNum3[j]
}

let promListaNum3 = sumaListaNum3 / listaNum3.length
console.log("El promedio de la lista de números 3, es:",Math.trunc(promListaNum3))
console.log("");

//18. Calcular la factorial de 5.
let factorial1 = 1;

for (let k = 1; k <= 5; k++) {
    factorial1 *= k;
}

console.info("La factorial del número 5 es:",factorial1);

//19. Redondear el número 3.6.
let numRound1 = 3.6

console.log("El equivalente redondeado del número es:",Math.round(numRound1));
console.log("");

//20. Calcular el doble de 9.
let numDoble1 = 9

console.log("El doble del número es:",numDoble1 * 2);
console.log("");

//21. Calcular el triple de 4.
let numTriple1 = 4

console.log("El triple del número es:", numTriple1 * 3);
console.log("");

//22. .Calcular el cuadrado de 6.

let cuadradoDeNum1 = 6
console.log("El cuadrado del número es:", Math.pow(cuadradoDeNum1, 2));
console.log("");

//23. Calcular el cubo de 3.
let cuboDeNum1 = 3;

console.log("El cubo del número es:", Math.pow(cuboDeNum1, 3));
console.log("");

//24. .Calcular la suma de los primeros 10 números naturales.
let sumNaturales10 = 0

for (let l = 1; l <= 10; l++) {
    sumNaturales10 = sumNaturales10 + l;
}
console.log("La suma de los primeros 10 numeros naturales es:", sumNaturales10)
console.log("");

//25. Calcular la resta entre 50 y 25.
let numResta3 = 50;
let numResta4 = 25;
let restaNumeros2 = numRestaCincuenta - numRestaVenticinco;

console.log("La resta de los numeros es:", restaNumeros2);
console.log("");

//26. Multiplicar 7 por 9.
let numMulti3 = 7
let numMulti4 = 9
let multiNumeros2 = numMulti3 * numMulti4

console.log("La multiplicación de los numeros es:", multiNumeros2)
console.log("");

//27. Dividir 144 por 12.
let numDiv3 = 144
let numDiv4 = 12
let divNumeros2 = numDiv3 * numDiv4

console.log("La división de los numeros es:", divNumeros2)
console.log("");

//28. Obtener el módulo de 17 dividido por 4.
let numMod3 = 17
let numMod4 = 4
let modNumeros2 = numMod3 % numMod4

console.log("El módulo de los numeros es:", modNumeros2)
console.log("");

//29. Generar un número aleatorio entre 20 y 30.
let randomVeinteTreinta = Math.floor(Math.random() * (30 - 20 + 1) + 30);
console.log("Tu número al azar entre 20 y 30 es:", randomVeinteTreinta)
console.log("");

//30. Elevar 2 a la potencia de 8.
let numDosPowOcho = Math.pow(2, 8)
console.info("La potencia de 8 a la 2 es:", numDosPowOcho);
console.log("");

//31. Calcular la raíz cuadrada de 144.
let numSqrt2 = 144
console.log("La raíz cuadrada del número es:", Math.sqrt(144))
console.log("");

//32. Convertir 100 grados Celsius a Fahrenheit.
let celsius2 = 100;
let fahrenheit2 = (celsius2 * 9 / 5) + 32;
console.log("De centigrados a fahreneit es:", fahrenheit2);
console.log("");

//33. Calcular el área de un rectángulo de base 5 y altura 10.
let baseRectangulo1 = 5
let alturaRectangulo1 = 10
let areaRectangulo1 = baseRectangulo1 * alturaRectangulo1
console.info("El área del rectángulo definido es:",areaRectangulo1)
console.log("");

//34. Calcular el perímetro de un círculo con radio 6.
let radioCirculo2 = 6;
let perimetroCirc2 = Math.round(2 * Math.PI * radioCirculo2)
console.log("El perímetro del círculo definido es:",perimetroCirc2);
console.log("");

//35. Calcular el volumen de un cubo con lado 4.
let ladoCubo1 = 4;
let volumenCubo1 = Math.pow(ladoCubo1, 3);
console.log("El volumen del cubo definido es:",volumenCubo1);
console.log("");

//36. Calcular el área de un rombo con diagonales de 8 y 10.
let diagMenorRombo1 = 8;
let diagMayorRombo1 = 10;
let areaRombo1 = (diagMenorRombo1 * diagMayorRombo1) / 2;
console.log("El área del rombo definido es:",areaRombo1);
console.log("");

//37. Calcular el área de un trapecio con bases 6 y 10 y altura 4.
let alturaTrap1 = 4
let baseMenorTrap1 = 6
let baseMayorTrap1 = 10
let areaTrap1 = (baseMenorTrap1 + baseMayorTrap1) * (alturaTrap1 / 2)

console.log("El área del trapecio definido es:",areaTrap1)
console.log("")

//38. Generar la tabla de multiplicar del número 8.
let tablaMulti2 = 8

console.group("Tabla de multiplicar numero 8");
for (let m = 1; m <= 10; m++) {
    console.log(tablaMulti2 * m);
};
console.groupEnd()
console.log("");

//39. Encontrar el número mayor entre 15, 20 y 25.
let listaNum4 = [15, 20, 25]

console.log("El número mayor de la lista de números 4, es:",Math.max(...listaNum4));
console.log("");

//40. Encontrar el número menor entre 50, 75 y 100.
let listaNum5 = [50, 75, 100]

console.log("El número menor de la lista de números 5, es:",Math.min(...listaNum5));
console.log("");

//41. Calcular el promedio de 7, 9 y 12.
let listaNum6 = [7, 9, 12];
let sumaListaNum6 = 0

for (let n = 0; n < (listaNum6.length); n++) {
    sumaListaNum6 += listaNum6[n]
}

let promListaNum6 = sumaListaNum6 / listaNum6.length
console.log("El promedio de la lista de números 6, es:",Math.trunc(promListaNum6))
console.log("");

//42. Calcular la factorial de 7.
let factorial2 = 1;

for (let o = 1; o <= 7; o++) {
    factorial2 *= o;
}

console.info("La factorial del número 7 es:",factorial2);
console.log("");

//43. Redondear el número 7.9.
let numRound2 = 7.9
console.log("El equivalente redondeado del número es:",Math.round(numRound2))
console.log("");

//44. Calcular el doble de 15.
let numDoble2 = 15

console.log("El doble del número es:",2 * numDoble2)
console.log("");

//45. Calcular el triple de 6.
let numTriple2 = 6

console.log("El triple del número es:", 3 * numTriple2)
console.log("");

//46. Calcular el cuadrado de 8.
let cuadradoDeNum2 = 8

console.log("El cuadrado del número es:", Math.pow(cuadradoDeNum2, 2))
console.log("");

//47. Calcular el cubo de 4.
let cuboDeNum2 = 4

console.log("El cubo del número es:", Math.pow(cuboDeNum2, 3))
console.log("");

//48. Calcular la suma de los primeros 15 números naturales.
let sumaNaturales15 = 0
for (let p = 0; p < 16; p++) {
    sumaNaturales15 += p;
}
console.log("La suma de los primeros 15 numeros naturales es:", sumaNaturales15)
console.log("");

//49. Calcular la resta entre 100 y 55.
let numResta5 = 100
let numResta6 = 55
let restaNumeros3 = numResta5 - numResta6

console.log("La resta de los numeros es:", restaNumeros3)
console.log("");

//50. Multiplicar 6 por 8.
let numMulti5 = 6;
let numMulti6 = 8;
let multiNumeros3 = numMulti5 * numMulti6

console.log("La multiplicación de los numeros es:", multiNumeros3);
console.log("");

//51. Dividir 225 por 15.
let numDiv5 = 225;
let numDiv6 = 15;
let divNumeros3 = numDiv5 / numDiv6

console.log("La división de los numeros es:", divNumeros3);
console.log("");

// 52. Obtener el módulo de 20 dividido por 7.
let numMod5 = 20;
let numMod6 = 7;
let modNumeros3 = numMod5 % numMod6

console.log("El módulo de los numeros es:", modNumeros3);
console.log("");

//53. Generar un número aleatorio entre 40 y 50.
let randomNum2 = Math.round(Math.random() * (50 - 40) + 40);
console.log("Tu número al azar es:", randomNum2)
console.log("");

//54. Elevar 3 a la potencia de 4.
let cuadradoDeNum3= 4

console.log("El cuadrado del número es:", Math.pow(cuadradoDeNum3, 4));
console.log("");

//55. Calcular la raíz cuadrada de 169.
let numSqrt3 = 169

console.log("La raíz cuadrada del número es:", Math.sqrt(numSqrt3));
console.log("");

//56. Convertir 80 grados Celsius a Fahrenheit.
let celsius3 = 80;
let fahrenheit3 = (celsius3 * 9) / 5 + 32;

console.log("De centigrados a fahreneit es:", fahrenheit3);
console.log("");

//57. Calcular el área de un rectángulo de base 8 y altura 12.
let baseRectangulo2 = 8;
let alturaRectangulo2 = 12;
let areaRectangulo2 = baseRectangulo2 * alturaRectangulo2;
console.info("El área del rectángulo definido es:",areaRectangulo2);
console.log("");

//58. Calcular el perímetro de un círculo con radio 8.
let radioCirculo3 = 8;
let perimetroCirc3 = Math.round(Math.PI * Math.pow(radioCirculo3, 2))
console.log("El perímetro del círculo definido es:",perimetroCirc3);
console.log("");

//59. Calcular el volumen de un cubo con lado 5.
let ladoCubo3 = 5;
let volumenCubo3 = Math.pow(ladoCubo3, 3)
console.log("El volumen del cubo definido es:",volumenCubo3);
console.log("");

//60. Calcular el área de un rombo con diagonales de 12 y 16.
let diagMayorRombo2 = 16;
let diagMenorRombo2 = 12;
let areaRombo2 = (diagMayorRombo2 * diagMenorRombo2) / 2
console.log("El rombo del triángulo definido es:",areaRombo2);
console.log("");

//61. Calcular el área de un trapecio con bases 8 y 12 y altura 6.
let baseMenorTrap2 = 12;
let baseMayorTrap2 = 8;
let alturaTrap2 = 6;
let areaTrap2 = ((baseMayorTrap2 + baseMenorTrap2) * alturaTrap2) / 2;
console.info("El área del trapecio definido es:",areaTrap2);
console.log("");

//62. Generar la tabla de multiplicar del número 9.
let tablaMulti3 = 9

console.group("Tabla de multiplicar numero 9");
for (let q = 1; q <= 10; q++) {
    console.log(tablaMulti3 * q);
}
console.groupEnd()
console.log("");

//63. Encontrar el número mayor entre 25, 30 y 35.

let listaNum7 = [25, 30, 35];
console.info("El número mayor de la lista de números 7, es:",Math.max(...listaNum7));
console.log("");

//64. Encontrar el número menor entre 80, 95 y 110.

let listaNum8 = [80, 95, 110];
console.info("El número mayor de la lista de números 8, es:",Math.min(...listaNum8));
console.log("");

//65. Calcular el promedio de 8, 10 y 14.

let listaNum9 = [8, 10, 14];
let sumaListaNum9 = 0;

for (let r = 0; r < listaNum9.length; r++) {
    sumaListaNum9 += listaNum9[r];
}

let promListaNum9 = sumaListaNum9 / listaNum9.length;
console.info("El promedio de la lista de números 9, es:",Math.trunc(promListaNum9));
console.log("");

//66. Calcular la factorial de 8.
let factorial3 = 1;

for (let s = 1; s <= 8; s++) {
    factorial3 *= s;
}

console.log("La factorial del número 8 es:",factorial3);
console.log("");

//67. Redondear el número 9.2.
let numRound3 = 9.2
console.log("El equivalente redondeado del número es:",Math.round(numRound3));
console.log("");

//68. Calcular el doble de 18.
let numDoble3 = 18
console.log("El doble del número es:", numDoble3 * 2);
console.log("");

//69. Calcular el triple de 7.
let numTriple3 = 7
console.log("El triple del número es:", numTriple3 * 3);
console.log("");

//70. Calcular el cuadrado de 10.
let cuadradoDeNum4 = 10
console.info("El cuadrado del número es:", Math.pow(cuadradoDeNum4, 2))
console.log("");

//71. Calcular el cubo de 5.
let cuboDeNum3 = 5
console.info("El cubo del número es:", Math.pow(cuboDeNum3, 3))
console.log("");

//72. Calcular la suma de los primeros 20 números naturales.
let sumaNaturales20 = 0;
for (let t = 0; t <= 20; t++) {
    sumaNaturales20 += t;
}
console.log("La suma de los primeros 20 numeros naturales es:", sumaNaturales20)
console.log("");

//73. Calcular la resta entre 200 y 75.
let numResta7 = 200
let numResta8 = 75
let restaNumeros4 = numResta7 - numResta8
console.log("La resta de los numeros es:", restaNumeros4)
console.log("");

//74. Multiplicar 9 por 11.
let numMulti7 = 9
let numMulti8 = 11
let multiNumeros4 = numMulti7 * numMulti8
console.log("La multiplicación de los numeros es:", multiNumeros4)
console.log("");

//75. Dividir 300 por 25.
let numDiv7 = 300
let numDiv8 = 25
let divNumeros4 = numDiv7 / numDiv8
console.log("La división de los numeros es:", divNumeros4)
console.log("");

//76. Obtener el módulo de 30 dividido por 9.
let numMod7 = 300
let numMod8 = 25
let modNumeros4 = numMod7 / numMod8
console.log("El módulo de los numeros es:", modNumeros4)
console.log("");

//77. Generar un número aleatorio entre 60 y 70.
let randomNum3 = Math.trunc(Math.random() * (70 - 60 + 1) + 60)
console.log("Tu número al azar es:", randomNum3)
console.log("");

//78. Elevar 4 a la potencia de 5.
let cuadradoDeNum5 = 4
console.info("El cuadrado del número es:", Math.pow(cuadradoDeNum5, 5))
console.log("");

//79. Calcular la raíz cuadrada de 196.
let numSqrt4 = 196
console.log("La raíz cuadrada del número es:", Math.sqrt(numSqrt4))
console.log("");

//80. Convertir 120 grados Celsius a Fahrenheit.
let celsius4 = 120;
let fahrenheit4 = celsius4 * (9 / 5) + 32;
console.log("De centigrados a fahreneit es:", fahrenheit4);
console.log("");

//81. Calcular el área de un rectángulo de base 10 y altura 15.
let baseRectangulo3 = 10;
let alturaRectangulo3 = 15;
let areaRectangulo3 = baseRectangulo3 * alturaRectangulo3;
console.log("El área es: ", areaRectangulo3);
console.log("");

//82. Calcular el perímetro de un círculo con radio 10.
let radioCirculo4 = 10;
let perimetroCirc4 = 2 * Math.PI * radioCirculo4;
console.log("El perímetro del círculo definido es:",perimetroCirc4);
console.log("");

//83. Calcular el volumen de un cubo con lado 6.
let ladoCubo2 = 6;
let volumenCubo2 = Math.pow(ladoCubo2, 3);
console.log("El volumen del cubo definido es:",volumenCubo2);
console.log("");

//84. Calcular el área de un rombo con diagonales de 14 y 18.
let diagMenorRombo3 = 14
let diagMayorRombo3 = 18
let areaRombo3 = (diagMenorRombo3 * diagMayorRombo3) / 2;
console.log("El área del rombo definido es:",areaRombo3);
console.log("");

//85. Calcular el área de un trapecio con bases 10 y 15 y altura 8.
let baseMayorTrap3 = 10;
let baseMenorTrap3 = 15;
let alturaTrap3 = 8;
let areaTrap3 = ((baseMayorTrap3 + baseMenorTrap3) * alturaTrap3) / 2
console.log("El área del trapecio definido es:",areaTrap3);
console.log("");

//86. Generar la tabla de multiplicar del número 10.
let tablaMulti4 = 10

console.group("Tabla de multiplicar numero 10");
for (let u = 1; u <= 10; u++) {
    console.log(tablaMulti4 * u);
}
console.groupEnd()
console.log("");

//87. Encontrar el número mayor entre 35, 40 y 45.
let listaNum10 = [35, 40, 45];
console.log("El número mayor de la lista de números 10, es:",Math.max(...listaNum10));
console.log("");

//88. Encontrar el número menor entre 90, 105 y 120.
let listaNum11 = [90, 105, 120];
console.log("El número mínimo de la lista de números 11, es:",Math.min(...listaNum11));
console.log("");

//89. Calcular el promedio de 9, 11 y 15 (otra manera, sin for).

let listaNum12 = [9, 11, 15];
let sumaListaNum12 = 0;

for (let v = 0; v < listaNum12.length; v++) {
    sumaListaNum12 += listaNum12[v];
}

let promListaNum12 = sumaListaNum12 / listaNum12.length;
console.info("El promedio de la lista de números 12, es:",Math.trunc(promListaNum12));
console.log("");

//90. Calcular la factorial de 9.
let factorial4 = 1;

for (let w = 1; w <= 9; w++) {
    factorial4 *= w;
}

console.log("La factorial del número 9 es:",factorial4);
console.log("");

//91. Redondear el número 10.8.
let numRound4 = 10.8;
console.log("El equivalente redondeado del número es:",Math.round(numRound4));
console.log("");

//92. Calcular el doble de 21.
let numDoble4 = 21;
console.log("El doble del número es:",numDoble4 * 2);
console.log("");

//93. Calcular el triple de 8.
let numTriple4 = 8;
console.log("El triple del número es:", numTriple4 * 3);
console.log("");

//94. Calcular el cuadrado de 12.
let cuadradoDeNum6 = 12;
console.log("El cuadrado del número es:", Math.pow(cuadradoDeNum6, 2));
console.log("");

//95. Calcular el cubo de 6.
let cuboDeNum4 = 6
console.log("El cubo del número es:", Math.pow(cuboDeNum4, 3));
console.log("");

//96. Calcular la suma de los primeros 25 números naturales.
let sumaNaturales25 = 0;
for (let x = 0; x <= 25; x++) {
    sumaNaturales25 += x;
}
console.log("La suma de los primeros 25 numeros naturales es:", sumaNaturales25);
console.log("");
