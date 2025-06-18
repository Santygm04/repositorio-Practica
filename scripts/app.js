//alert("Hola mundo") //Se le llama sentencias

//Las variables let son de ambito local, quiere decir que podemos declararla sin un valor especifico pero despues su valor puede variar
let lastName
lastName = "Gil"
lastName = "Mina"

//Las variables const, son constantes de modo lectura y de ambito local

const dni = "12345678"

//operadores

//operador de asignacion =
const direccion = "general paz 576"

//operador aritmetico
let suma = 2 + 2
console.log("el resultado es", + suma)

let resta = 10 - 5

let multiplicacion = 2 * 3


//operadores unitarios
// ++ -- !
let resultado = 10
resultado++
console.log(resultado)
resultado--
console.log(resultado)

// ! Sirve para invetir el resultado de los booleanos (si es V va a ser F y viceversa)
let ganador = true

let mayorDeEdad = 23 >= 18;
console.log(mayorDeEdad)

// console.log(!ganador)