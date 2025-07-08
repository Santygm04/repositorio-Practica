//Escribe un programa de dos lineas que pida el nombre del usuario con un promt y escriba un texto que diga "hola nombreDeUsuario"
// const user = prompt("Ingresar tu nombre");
//buena practica, sino se lo concatena con +
// document.write(`hola mi nombre es ${user} `)
// const edad = prompt("Ingresa tu edad");
// if(edad >= 18) {
//     document.write(`la edad ingresada es ${edad}, puedes pasar`);
// } else {
//     document.write(`la edad ingresada es ${edad}, no puedes pasar`);


//Escribe un programa en js si un numero es par o impar
// const edad = parseInt(prompt("Ingresa un numero"));
//Type of sirve para saber que tipo de datos estamos ingresando, en este caso tipo number
// console.log(typeof edad)
// if(edad % 2 === 0) {
//     console.log("El numero ingresado es par")
//     console.log(edad % 2)
// } else {
//     console.log("El numero ingresado es impar")
//     console.log(edad % 2)
// }

// const estacion = prompt("Ingresa tu estacion del año favorita").toLocaleLowerCase();

// if(estacion === "verano"){
//     console.log("La estacion ingresada es verano");
// } else if(estacion === "primavera"){
//     console.log("La estacion ingresada es primavera");
// } else if (estacion === "otoño") {
//     console.log("La estacion ingresada es otoño");
// } else if (estacion === "invierno") {
//     console.log("La estacion ingresada es invierno");
// } else {
//     console.log("No ingresaste una estacion del año")
// }

//Switch condicional multiple
// switch (estacion) {
//     case "verano":
//         console.log("La estacion ingresada es verano")
//         break;
//     case "otoño":
//         console.log("La estacion ingresada es otoño")
//         break;
//     case "invierno":
//         console.log("La estacion ingresada es invierno")
//         break;
//     case "primavera":
//         console.log("La estacion ingresada es primavera")
//     default:
//         console.log("No ingresaste ninguna estacion")
// }

//crea un programa que pida al usuario que ingrese un numero del 1 al 7 para representar un dia de la semana y luego muestre el nombre del dia por consola

// const number = parseFloat(prompt("Ingrese un numero del 1 al 7"));

// switch (number) {
//     case 1:
//       console.log("Lunes")
//       break;
//     case 2:
//       console.log("Martes")
//       break;
//     case 3:
//       console.log("Miercoles")
//       break;
//     case 4:
//       console.log("Jueves")
//       break;
//     case 5:
//       console.log("Viernes")
//       break;
//     case 6:
//       console.log("Sabado")
//       break;
//     case 7:
//       console.log("Domingo")
//       break;
//     default:
//       console.log("No ingresaste un numero valido")
// } 

//Escriba un programa que permita al usuario seleccioanr una operacion matematica (suma, resta, multiplicacion o division) y luego realice la operacion con dos numeros ingresados por el usuario.

// const operador = prompt("Ingrese una operación + - * /").toLowerCase();
// const n1 = parseInt(prompt("Ingrese el primer numero"))
// const n2 = parseInt(prompt("Ingrese el segundo numero"))


// switch (operador) {
//     case "suma": 
//       console.log(`La suma de los numero es ${n1 + n2}`)
//       break;
//     case "resta":
//       console.log(`La resta de los numero es ${n1 - n2}`)
//       break;
//     case "multiplicacion":
//       console.log(`La multiplicación de los numero es ${n1 * n2}`) 
//       break;
//     case "division":
//       console.log(`La división de los numero es ${n1 / n2}`)
//       break;
//       default:
//       console.log("No ingresaste una operacion valida")
// }

//BUCLES WHILE (MIENTRAS) mientras se cumpla una condicion el bucle seguira repitiendo hasta que de false en la condicion

// let i = 1001
// while (i < 1000) {
//   console.log("Hola mundo")
//   i++
// }

//BUCLES DO WHILE (HACER MIENTRAS) se repite al menoz una vez el codigo y despues se evalua la condicion

// do {
//   console.log(i)
//   i++
// }while(i <= 1000)

//Crea un programa en js que pida al user adivinar un n secreto (ej 7) y continue pidiendo un numero hasta que el user adivine

const numeroSecreto = 10;
let intento;

do {
  intento = parseInt(prompt("Adivina el numero secreto"))
} while(intento !== numeroSecreto);
  console.log("Correcto, has adivinado el numero")

