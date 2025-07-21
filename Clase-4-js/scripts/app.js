//BUCLE DO WHILE (HACER MIENTRAS)

// const numeroSecreto = 7;
// let intento;

// do {
//     intento = parseInt(prompt("ingrese un valor del 1 al 10"))
    
// } while (intento !== numeroSecreto) 

// console.log("Adivinaste el numero secreto")


//Escribe un programa en js quie solicite al usuarioi ingresar su contraseña y continue pidiendo la contraseña has que ignrese la contraseña correcta

// const contraseñaCorrecta = "Test1234"
// let inputUser;

// do {
//     inputUser = prompt("Ingresa su contraseña")
// } while (inputUser !== contraseñaCorrecta)

// console.log("La contraseña es correcta")


//BUCLE FOR

// for(let i=10; i<=20; i=i+2){
//     console.log(i)
// }


//BUCLE WHILE (Mientras)

// let i = 10;
// while (i <= 20){
//     console.log(i)
//     i = i + 2
// }

//Implementa un programa en js que calcule la suma de los primeros 10 nmumeros naturales utilizando un bucle for
// let suma = 0;

// for(let i = 1; i <= 10; i++){
    // el "+=" quiere decir que agarra el valor que tiene antes i y lo suma con el siguiente valor que va a tener i
//     suma += i;
//     console.log(suma)
// }
// console.log(`La suma de los primeros 10 numeros naturales es ${suma}`)

//ARRAYS - ARREGLOS

// const array1 = [1, "santiago", true]
//Arrays dentro de un array
// const array2 = [[1, 2, 3] ["Juan", "Pedro", "santiago"]]
//Arrays de todo tipo
// const Array = [1,"santiago", "pedro", false, true]

//Indices que podemos acceder
// console.log(Array[0])
// console.log(Array[4])
// console.log(Array[2])
// console.log(Array.length)

//Con el bucle for recorremos un array
// for(let i = 0; i < Array.length; i++){
//     console.log(Array[i])
// }

//Agrega un elemento al final de la lista del arreglo
// Array.push("Dante")
// console.log(Array)

//Este metodo reemplaza un elemento dependiendo el indice que se le indique.
// Array[2] = "Ignacio"
// console.log(Array)

// Array[0] = 1
// console.log(Array)

//este metodo sirve para eliminar el ultimo elemento de mi array
// Array.pop()
// console.log(Array)

//Este metodo sirve para agregar un elemento en una posición que quieramos
//El primer numero es el indice donde quiero agregar un elemento u eliminar y el segundo numero es para decir que elementos quiero eliminar contado desde abajo
// Array.splice(0,0, "toledo")

//Tambien sirve para eliminar elementos,b el segundo numero elimina un lugar hacia la derecha, y si le pasamos un argumento cuando ponemos un numero en el segundo parametro, esto elimina lo que esta en esa posición y lo reemplaza con el tercer argumento que le pasemos
// Array.splice(1,1, 2) //Eliminar elemento y remplazarlos por otro
// Array.splice(0,1, 20) //Eliminar elemento y remplazarlos por otro
// Array.splice(3,1)   //Eliminar un elemento
// Array.splice(5,1, "lourdes") //Eliminar un elemento y reemplazarlo por otro
// Array.splice(4,0, "minecraft") //Agregar un elemento
// Array.splice(3) //Si le damos solo un argumento, empieza a eliminar todos los elementos dependiendo desde que indice comience




//FUNCIONES

//Funcion que devuelven un valor
//Asi se declara la función y en la funcion se le llama parametros lo que se agrega entre parentesis 
function suma(num1, num2){
    return num1 + num2
}
//Llamar a la función
//Los numeros que se le pasa entre parentesis, aca se llaman argumentos 
let resultado = suma(10, 20)
console.log(resultado)


//Funcion que no retorna ningun valor
function saludar(nombre){
    alert(`Hola ${nombre}`)
}

//al no devolver un valor, no hace falta declarar una variable por que no se guarda nada
saludar(prompt("Ingresa tu nombre"))
saludar("Gustavo")
























































































































































//EJERCICIOS DE PRACTICA BUCLES FOR

//1) Contar numeros del 1 al 10
// let contador = 0;
// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

//2) Tabla de multiplicar del 5
// let multiplo = 0;
// for(let i = 1; i <= 10; i++){
//    multiplo = (5 * i)
//    console.log(`${multiplo} x` , i)
// }

//3) Suma de los primeros n numeros naturales
// let n;
// let suma = 0;
// for(let i = 1; i <= 5; i++){
//     n = parseInt(prompt("Ingresa un numero natural"))
//     suma += n;
// }
// console.log(`La suma de todos los numeros naturales es ${suma}`)

//4) Contar pares e impares
// for(let i = 1; i <= 50; i++){
//     if(i% 2 === 0) {
//         console.log(`${i} par`)
//     } else {
//         console.log(`${i} impar`)
//     }
// }