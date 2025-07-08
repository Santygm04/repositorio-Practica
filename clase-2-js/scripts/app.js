let aux = 1;
// console.log(aux);
aux++; //incremento
// console.log(aux);
aux--; //Decremento
// console.log(aux);

let resultado = 3 > 5;
// console.log(!resultado) //Negacion para true o false

// console.log(3 == "3") //Comparacion
// console.log(3 === "3") //Comparacion estricta

//And OR y NOT
//And ambas verdaderas para que sea V sino da F
// console.log(3 < 5 && 3 > 2);
//OR alguna de los resultados tiene que ser verdadero para que de V, si ambas son falsas dara F
// console.log(3 > 5 || 4 > 3);

//Metodos o Funciones

// console.log("Hola mundo");
// alert("Hola a todos");
// document.write("hola comision 69i")

const apellido = "gilmina";
//el .length sirve para saber la cantidad de caracteres que tiene una cadena de un string
// console.log(apellido.length);
//el toLowerCase qye va a convetir una cadena de texto en minuscula(no importa si el usuario escribe en mayuscula)
// console.log(apellido.toLocaleLowerCase());
//el toUperCase sirve para convetir un string o cadena de texto en mayuscula
// console.log(apellido.toLocaleUpperCase());
//slice nso va a permitir cortar una cadena de texto
//el primer argumento es de donde quiero cortar y el segundo es hasta donde
// console.log(apellido.slice(0, 3));

// const edad = prompt("Ingresa tu edad"); //Para pedir al usuario que ingrese un valor
//el typeof me dice que tipo de valor se ingresa en el prompt
// console.log(typeof edad); 
//parseInt convierte un numero de tipo texto a tipo number
const strInt = "42";
const numInt = parseInt(strInt); //devuelve 42
// console.log(typeof strInt);
// console.log(typeof numInt);

//round redondea para arriba y el floor nos devuelve el entero
const num = 3.6;
const rounded = Math.round(num); //devuelve 4
const floored = Math.floor(num); //devuelve 3
// console.log(floored);


//isNan (not a number) evalua si el valor que recibe como parametro no es un numero, si no lo es retorna true, y si es un numero retorna false
// console.log(isNaN("Hola")); //Devuelve true
// console.log(isNaN(32)); //Devuelve false

//al igual que parseInt el metodo number va a convertir un valor de tipo string al tipo number
const strNum = "42";
const toNum = Number(strNum); //devuelve 42

//el metodo random devuelve un numero aleatorio entre 0 y 1
const randomNum = Math.random();
// console.log(Math.floor(randomNum * 10));

//Condicional if 

// const edad = prompt("Ingresa tu edad")
// const billetera = prompt("Cuanta plata tenes en la billetera")

// if (edad <= 18 || edad >= 65) {
//     console.log("Pertecene a persona de riesgo")
// }

// if (edad >= 18 && billetera >= 2000) {
//     console.log("podes entrar al boliche")
// } 

//Condicionales if y else 

// if (edad >= 18 && billetera >= 2000){
//     console.log("Podes entrar al boliche");
// } else {
//     console.lwog("a casa papi");
// }

//Condicionales if-else

let num1 = prompt("Ingresa un numero del 1 al 11")
if(num1 > 10) {
    console.log("El numero es mayor que 10")
} else if (num1 < 10){
    console.log("El numero es menor que 10")
}else {
    console.log("El numero es igual a 10")
}
