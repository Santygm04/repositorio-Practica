//Funcions en js
 
//Funciones declarativas (son declarativas porq tienen un nombre)
//Sin retorno o tipo void
// function saludar(){
//     document.write("Hola comision 69i")
// }
 
// function resta(a, b){
//     let resultado = a - b
//     return resultado
// }

// console.log(resta(5, 3))

// saludar()

//Con retorno
// function suma(a, b){
//     return a + b
// }

// const resultado = suma(15, 15);
// console.log(resultado);

 //Funciones anonimas
//no se pueden usar antes de ser declaradas, solo empiezan a ocupar espacio cuando la empezamos a usar.
//  console.log(suma(23, 50))
//  const suma = function (a, b){
//     let resultado = a + b
//     return resultado 
//  }

//Funciones flechas o arrow functions
//  const multiplo = (a, b) => a * b;
//  console.log(multiplo(10, 10))

// const saludar = nombre => console.log(`Hola ${nombre}`)


//Funciones callback

// const mascotas = ["gato", "perro", "tortuga", "loro", "conejo", "peces"]
// mascotas.map((mascota) =>{
// console.log(mascota)
// }) 




































//Ejercicios de funciones de js

// Ejercicio 1: Función declarativa simple
// Crea una función llamada saludar que reciba un parámetro nombre y devuelva el string "Hola, <nombre>". Luego, llama a la función y muestra el resultado en consola.

// function saludar (nombre) {
//   console.log(`Hola ${nombre}`)
// }

// saludar("Santiago")

// Ejercicio 2: Función anónima
// Declara una variable multiplicar y asígnale una función anónima que reciba dos números y devuelva su producto. Luego, muestra en consola el resultado de llamar a esa función con 3 y 4.

// const multi = function (a, b) {
//   let resultado = a * b
//   return resultado
// }

// console.log(multi(3, 4))

// Ejercicio 3: Función flecha con retorno implícito
// Declara una función flecha llamada esPar que reciba un número y devuelva true si es par, o false si no lo es. Usa retorno implícito (sin llaves ni return explícito).

// const esPar = num => num % 2 === 0
// console.log(esPar(2))
// console.log(esPar(3)) 



// Ejercicio 4: Función flecha con cuerpo extenso
// Declara una función flecha llamada calcularArea que reciba dos parámetros base y altura. Dentro de la función, calcula el área de un triángulo ((base * altura) / 2), guárdalo en una variable, y devuélvelo con return. Usa llaves y return explícito.

// const calcularArea = (base, altura) => {
//   let resultado = (base * altura / 2) 
//   return resultado
// }
// console.log(calcularArea(3, 5))

// Ejercicio 5: Función que usa otra función
// Declara una función declarativa llamada sumarTresNumeros que reciba tres números.
// Dentro, usa la función flecha sumar que recibiste abajo para sumar los dos primeros números, luego suma el resultado con el tercer número y devuelve el total.


// const sumar = (a, b) => a + b;
// function sumarTresnUmeros (n1, n2, n3) {
//   const parcial = sumar(n1, n2)
//   const total = sumar(parcial, n3)
//   return total
// }

// console.log(sumarTresnUmeros(3, 3, 3))