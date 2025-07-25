//Desarrollar un script que pida al usuario elegir una opcion
//Tiene que calcular automaticamente una opcion para la computadora
//comparar los dos valores
//definir el ganador

// const opciones = ["piedra", "papel", "tijera"];
// const jugadaUser = () => {
//     const elegir = prompt("Ingresa piedra, papel o tijera").toLocaleLowerCase();
    //El includes te devuelve booleanos (true o false)
//     if(opciones.includes(elegir)){
//         return elegir
//     } else {
//         alert(`La opcion ingresada (${elegir}) no es correcta, por favor ingresa piedra, papel o tijera`)
//     }
// }

// const jugadaMaquina = () => {
//     const indice = Math.floor (Math.random()*3)
//     return opciones[indice]
// }

// const determinarGanador = (usuario, maquina) => {
//     if (usuario === maquina){
//         return "Empataron"
//     } else if((usuario === "piedra" && maquina === "tijera") ||
//     (usuario === "papel" && maquina === "piedra") || (usuario === "tijera" && maquina === "papel")){
//         return "ganaste"
//     } else {
//         return "perdiste"
//     }
// }

// const iniciarJuego = () => {
//     const seleccionJugador = jugadaUser();
//     if(seleccionJugador){
//         const seleccionMaquina = jugadaMaquina();
//         console.log(`Vos elegiste ${seleccionJugador}`)
//         console.log(`La maquina eligio ${seleccionMaquina}`)
    
//         const resultado = determinarGanador(seleccionJugador, seleccionMaquina)
//         console.log(resultado)
//     } else {
//         iniciarJuego();
//     }
// }

// iniciarJuego();


//Ejercicios funciones
//1) funcion que salude con tu nombre
// function saludar (nombre) {
//     console.log(`Hola ${nombre}`)
// }

// saludar("Santiago")

//2) funcion que sume 2 numeros

// const suma = (a, b) => a + b;
// console.log(suma(4, 6))

//3) funcion que diga si un numero es par
// const esPar = num => num % 2 === 0
// console.log(esPar(2))
// console.log(esPar(5))


//4) repetir mensajes n veces
// function repetirMensaje (mensaje, veces){
//     for(let i = 0; i < veces; i++){
//         console.log(mensaje)
//     }
// }

// repetirMensaje("Holis", 5)

//Convertir grados celcius a fahrenheit
// function celciusAFahrenheit (celcius, fahrenheit){
//     let resultado = (fahrenheit = celcius * 9/5) + 32
//     return resultado
// }

// console.log(celciusAFahrenheit(30))

//Juego de piedra papel o tijera
//Desarrollar un script que pida al usuario elegir una opcion
//Tiene que calcular automaticamente una opcion para la computadora
//comparar los dos valores
//definir el ganador

// const opciones = ["piedra", "papel", "tijera"]

// const jugadaUser = () => {
//     const tiroUser = prompt("Ingrese piedra, papel o tijera").toLocaleLowerCase()
//     if(opciones.includes(tiroUser)){
//         return tiroUser
//     } else {
//         alert(`La opcion (${tiroUser}), no es valida, por favor ingrese piedra, papel o tijera`)
//     }
// }

// const jugadaMaquina = () => {
//     const indice = Math.floor (Math.random()* 3)
//     return opciones [indice] 
// }

// const determinarGanador = (usuario, maquina) => {
//     if(usuario === maquina) {
//         return "Empataron"
//     } else if ((usuario === "piedra" && maquina === "tijera") || (usuario === "papel" && maquina === "piedra") || 
//     (usuario === "tijera" && maquina === "papel")){
//         return "Ganaste"
//     } else {
//         return "Perdiste"
//     }
// }

// const iniciarJuego = () => {
//     const seleccionJugador = jugadaUser()
//     if(seleccionJugador){
        
//         const seleccionMaquina = jugadaMaquina()
//         console.log(`Vos elegiste ${seleccionJugador}`)
//         console.log(`la maquina elegio ${seleccionMaquina}`)

//         const resultado = determinarGanador(seleccionJugador, seleccionMaquina)
//         console.log(resultado)
//     } else {
//         iniciarJuego()
//     }
// }

// iniciarJuego()


// const opciones = ["piedra", "papel", "tijera"]

// const jugadaUser = () => {
//     const elegir = prompt("Ingresa piedra, papel o tijera").toLocaleLowerCase()
//     if(opciones.includes(elegir)) {
//     return elegir
//     } else {
//         alert(`La opcion (${elegir}) no es valida, ingresa piedra, papel o tijera`)
//     }
// }

// const jugadaMaquina = () => {
//     const indice = Math.floor(Math.random()* 3)
//     return opciones [indice]
// }

// const determinarGanador = (usuario, maquina) => {
//     if(usuario === maquina){
//         return "Empataron"
//     } else if((usuario === "piedra" && maquina === "tijera") || (usuario === "papel" && maquina === "píedra") ||
//     (usuario === "tijera" && maquina === "papel")) {
//         return "Ganaste"
//     } else {
//         return "Perdiste"
//     }
// }

// const iniciarJuego = () => {
//     const seleccionJugador = jugadaUser()
//     if(seleccionJugador){
//         const seleccionMaquina = jugadaMaquina()
//         console.log(`Vos elegiste ${seleccionJugador}`)
//         console.log(`La maquina eligio ${seleccionMaquina}`)
//         const resultado = determinarGanador(seleccionJugador, seleccionMaquina)
//         console.log(resultado)
//     } else{
//         iniciarJuego()
//     }
// }
// iniciarJuego()