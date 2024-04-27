// David Francisco Blandón Mena
// Clan Gates, RIWI
// 21.04.2024

// EJERCICIOS JS: Condicionales

// 1. Verifica si un número es positivo.

let num1 = 3

if (num1>0){
    console.log(num1,"es positivo")
}else {
    console.log(num1,"no es positivo")
}
console.log("")

// 2. Verifica si un número es negativo.

let num2 = 3

if (num2<0){
    console.log(num2,"es negativo")
}else {
    console.log(num2,"no es negativo")
}
console.log("")

// 3. Comprueba si un número es par.

let num3 = 3

if ((num3%2)==0){
    console.log(num3,"es par")
}else {
    console.log(num3,"no es par")
}
console.log("")

// 4. Comprueba si un número es impar.

let num4 = 3

if ((num4%2)!=0){
    console.log(num4,"es impar")
}else {
    console.log(num4,"no es impar")
}
console.log("")

// 5. Determina si un número es múltiplo de 5.

let num5 = 3

if ((num5%5)==0){
    console.log(num5,"es multiplo de 5")
}else {
    console.log(num5,"no es multiplo de 5")
}
console.log("")

// 6. Verifica si un número es divisible entre 3.

let num6 = 3

if ((num6%3)==0){
    console.log(num6,"es multiplo de 6")
}else {
    console.log(num6,"no es multiplo de 6")
}
console.log("")

// 7. Determina si un número es mayor que 100.

let num7 = 3

if (num7>100){
    console.log(num7,"es mayor que 100")
}else {
    console.log(num7,"no es mayor que 100")
}
console.log("")

// 8. Verifica si un número es menor que -50.

let num8 = 3

if (num8<(-50)){
    console.log(num8,"es mayor que -50")
}else {
    console.log(num8,"no es mayor que -50")
}
console.log("")

// 9. Comprueba si un número está en el rango de 20 a 50.

let num9 = 3

if ((num9>20) && (num9<50)) {
    console.log(num9,"está en el rango de 20 a 50")
}else {
    console.log(num9,"no está en el rango de 20 a 50")
}
console.log("")

// 10.Determina si un número es igual a 0.

let num10 = 3

if (num10==0){
    console.log(num10,"es igual a 0")
}else {
    console.log(num10,"no es igual a 0")
}
console.log("")

// 11.Verifica si un número es mayor que -10 y menor que 10.

let num11 = 3

if ((num11>(-10)) && (num1<10)) {
    console.log(num11,"está en el rango de -10 a 10")
}else {
    console.log(num11,"no está en el rango de -10 a 10")
}
console.log("")

// 12.Determina si un número es un año bisiesto.

let diasAno = {
    2020:366, 
    2021:365, 
    2022:365, 
    2023:365, 
    2024:366}

for (let ano in diasAno) {
    if ((diasAno[ano])==366) {
        console.log(ano, "es un año bisiesto")
    }else {
        console.log(ano, "no es un año bisiesto")
    }
}
console.log("")

// 13.Verifica si una persona es mayor de edad (mayor o igual a 18 años).

let user = 'Ricardo'
let userAge = 20

if ((userAge>=18)) {
    console.log(user,"es una persona mayor de edad")
}else {
    console.log(user,"no es una persona mayor de edad")
}
console.log("")

// 14.NONE

// 15.Verifica si un número es un cuadrado perfecto.

let num12 = 169
let raizNum12 = Math.sqrt(num12)
let verifyCuadPerfecto = Number.isInteger(raizNum12)

if (verifyCuadPerfecto === true) {
    console.log(num12,"es un cuadrado perfecto")
}else{
    console.log(num12,"no es un cuadrado perfecto")
}
console.log("")

// 16.Determina si un número es un número de Fibonacci.

let num13 = 12
let numsFibonacci = [1,2,3,5,8,13,21,34,55,89]

if (numsFibonacci.includes(num13)) {
    console.log(num13,"es un número de Fibonacci")
}else {
    console.log(num13,"no es un número de Fibonacci")
}
console.log("")

// 17.Verifica si un número es una potencia de 2.

let num14 = 64

if (Number.isInteger(Math.log2(num14))){
    console.log(num14,"es una potencia de 2")
}else {
    console.log(num14,"no es una potencia de 2")
}
console.log("")

// 18.Determina si un número es un palíndromo.

let num15 = 1029202
let num15String = num15.toString()
let listaNum15 = num15String.split("")
let listaNum15Reversed = (num15String.split("")).reverse()
let verifyPalindromo = true

for (let i = 0; i <= listaNum15.length; i++) {
    if (listaNum15[i] == listaNum15Reversed[i]) {
        verifyPalindromo
    }else{
        verifyPalindromo = false
    }
}

if (verifyPalindromo === false) {
    console.log(num15,"no es un palíndromo")
}else{
    console.log(num15,"es un palíndromo")
}
console.log("")

// 19.Verifica si una cadena de texto contiene la palabra "JavaScript".

let cadenaText1 = 'I love programming in Python.'

if (cadenaText1.includes("JavaScript")) {
    console.log("La cadena: '"+cadenaText1+"' contiene la palabra 'JavaScript'")
}
else {
    console.log("La cadena: '"+cadenaText1+"' NO contiene la palabra 'JavaScript'")
}
console.log("")

// 20.Determina si una cadena tiene más de 10 caracteres.

let cadenaText2 = 'I do not like programming in Java.'

if (cadenaText2.length>10) {
    console.log("La cadena: '"+cadenaText2+"' tiene MÁS de 10 caracteres")
}else {
    console.log("La cadena: '"+cadenaText2+"' tiene MENOS de 10 caracteres")
}
console.log("")

// 21.Verifica si una cadena de texto está en minúsculas.

let cadenaText3 = 'HELLO.'
let cadenaText3Lower = cadenaText3.toLowerCase()

if (cadenaText3Lower === cadenaText3) {
    console.log("La cadena: '"+cadenaText3+"' SÍ está en minúsculas")
}else{
    console.log("La cadena: '"+cadenaText3+"' NO está en minúsculas")
}
console.log("")

// 22.Determina si una cadena de texto contiene al menos un número.

let cadenaText4 = 'Meet me at 4pm.'
let listaCadenaText4 = cadenaText4.replaceAll(" ","").split("")
let verifyNumCadena = false

for (j = 0; j < listaCadenaText4.length; j++) {
    if (!(isNaN(listaCadenaText4[j]))) {
        verifyNumCadena = true
    }else {
        verifyNumCadena
    }
}

if (verifyNumCadena == false) {
    console.log("La cadena: '"+cadenaText4+"' NO contiene al menos un número")
}else{
    console.log("La cadena: '"+cadenaText4+"' SÍ contiene al menos un número")
}
console.log("")

// 23.Verifica si una cadena de texto termina con un punto (.).

let cadenaText5 = 'Dusk Till Dawn.'

if (cadenaText5.endsWith('.')) {
    console.log("La cadena: '"+cadenaText5+"' SÍ termina con un punto")
}else {
    console.log("La cadena: '"+cadenaText5+"' NO termina con un punto")
}
console.log("")

// 24.Determina si una cadena de texto es un pangrama (contiene todas las letras del alfabeto).

let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 
'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let cadenaText6 = 'El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja'
let verifyPangrama = true

for (let k = 0 ; k < alfabeto.length ; k++) {
    if (cadenaText6.includes(alfabeto[k])) {
        verifyPangrama
    }else {
        verifyPangrama = false
    }
}

if (verifyPangrama == true) {
    console.log("La cadena: '"+cadenaText6+"' SÍ es un pangrama")
}else{
    console.log("La cadena: '"+cadenaText6+"' NO es un pangrama")
}
console.log("")

// 25.Verifica si un día de la semana es laborable (de lunes a viernes).

let diasSemana = ['lunes','martes','miercoles',
'jueves','viernes','sabado','domingo']

let diasSemanaLabor = diasSemana.slice(0,5)
let diaActual1 = 'viernes'

if ((Object.values(diasSemanaLabor)).includes(diaActual1)) {
    console.log(diaActual1,"SÍ es laborable")
}else{
    console.log(diaActual1,"NO es laborable")
}
console.log("")

// 26.Determina si un día es fin de semana (sábado o domingo).

let diasFinDeSemana = diasSemana.slice(5)
let diaActual2 = 'lunes'

if ((Object.values(diasFinDeSemana)).includes(diaActual2)) {
    console.log(diaActual2,"SÍ es Fin de Semana")
}else{
    console.log(diaActual2,"NO es Fin de Semana")
}
console.log("")

// 27.Verifica si un número representa un mes válido (del 1 al 12).
let mesIngresado = 10

if (mesIngresado >= 1 && mesIngresado <= 12) {
    console.log('El mes número',mesIngresado,"SÍ es un mes válido")
}else {
    console.log('El mes número',mesIngresado,"NO es un mes válido")
}
console.log("")

// 28.Determina si una hora está en el rango de 9 AM a 6 PM.

let horaIngresada = 18

if (horaIngresada >= 9 && horaIngresada <= 18) {
    console.log('La hora número',horaIngresada,"SÍ está en el rango de 9 AM a 6 PM")
}else {
    console.log('La hora número',horaIngresada,"NO está en el rango de 9 AM a 6 PM")
}
console.log("")

// 29.Verifica si una persona es mayor de 65 años o menor de 18 años.

let edadIngresada = 18

if (edadIngresada > 65 || edadIngresada < 18) {
    console.log('La edad número',edadIngresada,"SÍ es mayor de 65 años o menor de 18 años")
}else{
    console.log('La edad número',edadIngresada,"NO es mayor de 65 años o menor de 18 años")
}
console.log("")

// 30.Determina si un triángulo es equilátero (tres lados iguales).

let ladoTrianguloA = 3
let ladoTrianguloB = 3
let ladoTrianguloC = 3

if (ladoTrianguloA == ladoTrianguloB && ladoTrianguloB == ladoTrianguloC) {
    console.log("El triángulo SÍ es equilátero")
}else {
    console.log("El triángulo NO es equilátero")
}
console.log("")

// 31.Verifica si un triángulo es isósceles (dos lados iguales).

let ladoTrianguloX = 6
let ladoTrianguloY = 4
let ladoTrianguloZ = 2

if (ladoTrianguloY == ladoTrianguloX || ladoTrianguloY == ladoTrianguloZ || (ladoTrianguloZ == ladoTrianguloX)) {
    console.log("El triángulo SÍ es isósceles")
}else {
    console.log("El triángulo NO es isosceles")
}
console.log("")

// 32.Determina si un triángulo es escaleno (todos los lados diferentes).

let ladoTrianguloL = 1
let ladoTrianguloM = 2
let ladoTrianguloN = 3

if ((ladoTrianguloM != ladoTrianguloN) && (ladoTrianguloM!= ladoTrianguloL) && (ladoTrianguloL!= ladoTrianguloN)) {
    console.log("El triángulo SÍ es escaleno")
}else {
    console.log("El triángulo NO es escaleno")
}
console.log("")

// 33.Verifica si un número es mayor que el doble de otro número.

let num16 = 90
let num17 = 10

if (num16 > (2 * num17)) {
    console.log("El número",num16,"SÍ es mayor que el doble de",num17)
}else {
    console.log("El número",num16,"NO es mayor que el doble de",num17)
}
console.log("")

// 34.Determina si la suma de dos números es mayor que 100.

let num18 = 90
let num19 = 10

if ((num18 + num19) > 100) {
    console.log("La suma de",num18,"y",num19,"SÍ es mayor que 100")
}else {
    console.log("La suma de",num18,"y",num19,"NO es mayor que 100")
}
console.log("")

// 35.Verifica si la resta de dos números es menor que 50.

let num20 = 40
let num21 = 30

if ((num20 - num21) < 50) {
    console.log("La resta de",num20,"y",num21,"SÍ es menor que 100")
}else {
    console.log("La resta de",num20,"y",num21,"NO es menor que 100")
}
console.log("")

// 36.Determina si un número es el doble del otro número.

let num22 = 20
let num23 = 10

if (num22 == (2 * num23)) {
    console.log("El número",num22,"SÍ es el doble de",num23)
}else {
    console.log("El número",num22,"NO es el doble de",num23)
}
console.log("")

// 37.Verifica si el doble de un número es igual al triple de otro número.

let num24 = 30
let num25 = 20

if ((2 * num24) == (3 * num25)) {
    console.log("El doble del número",num24,"SÍ es el triple de",num25)
}else {
    console.log("El doble del número",num24,"NO es el triple de",num25)
}
console.log("")

// 38.Determina si la suma de dos números es igual a 50.

let num26 = -5
let num27 = 70

if ((num26 + num27) == 50) {
    console.log("La suma de",num26,"y",num27,"SÍ es igual a 50")
}else {
    console.log("La suma de",num26,"y",num27,"NO es igual a 50")
}
console.log("")

// 39.Verifica si el producto de dos números es mayor que 500.

let num28 = 30
let num29 = 12

if ((num28 * num29) > 500) {
    console.log("El producto de",num28,"por",num29,"SÍ es mayor que 500")
}else {
    console.log("El producto de",num28,"por",num29,"NO es mayor que 500")
}
console.log("")

// 40.Determina si la división de dos números es menor que 10.

let num30 = 21
let num31 = 20

if ((num30 / num31) < 10) {
    console.log("La división de",num30,"entre",num31,"SÍ es menor que 10")
}else {
    console.log("La división de",num30,"entre",num31,"NO es menor que 10")
}
console.log("")