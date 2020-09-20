// Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. 
// Pedir mediante prompts por cinco canciones (una a la vez), 
// y agregar esas canciones como ítems de la lista desordenada

// const cancion1 =  prompt("Decime una cancion")
// const cancion2 =  prompt("Decime una cancion")
// const cancion3 =  prompt("Decime una cancion")
// const cancion4 =  prompt("Decime una cancion")
// const cancion5 =  prompt("Decime una cancion")

// const primerLi = document.getElementById("li1")
// primerLi.textContent = cancion1

// const segundoLi = document.getElementById("li2")
// segundoLi.textContent = cancion2

// const tercerLi = document.getElementById("li3")
// tercerLi.textContent = cancion3

// const cuartoLi = document.getElementById("li4")
// cuartoLi.textContent = cancion4

// const quintoLi = document.getElementById("li5")
// quintoLi.textContent = cancion5


// adivinanza
// Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, 
// se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe 
// ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique 
// (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.

// const primerBoton = document.getElementById("boton1")
// const segundoBoton = document.getElementById("boton2")
// const tercerBoton = document.getElementById("boton3")
// const resultado = document.getElementById("resultado")


// primerBoton.onclick = () => {
//     resultado.textContent = ("Correcto")
//     primerBoton.classList.add("verde")
// }

// segundoBoton.onclick = () => {
//     resultado.textContent = ("Incorrecto")
//     segundoBoton.classList.add("rojo")
//     primerBoton.classList.add("verde")
//     tercerBoton.classList.add("rojo")
// }

// tercerBoton.onclick = () => {
//     resultado.textContent = ("Incorrecto")
//     tercerBoton.classList.add("rojo")
//     primerBoton.classList.add("verde")
//     segundoBoton.classList.add("rojo")
// }

// contador
// Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. 
// Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

// const botonMenosUno = document.querySelector(".boton-menos-uno")
// const botonMasUno = document.querySelector(".boton-mas-uno")
// const botonMenosCinco = document.querySelector(".boton-menos-cinco")
// const botonMasCinco = document.querySelector(".boton-mas-cinco")
// const botonMenosDiez = document.querySelector(".boton-menos-diez")
// const botonMasDiez = document.querySelector(".boton-mas-diez")
// const operando = document.querySelector("#operando")


// botonMenosUno.onclick = () => {
//     operando.textContent = "04"
// }

// botonMasUno.onclick = () => {
//     operando.textContent = "06"
// }

// botonMenosCinco.onclick = () => {
//     operando.textContent = "0"
// }

// botonMasCinco.onclick = () => {
//     operando.textContent = "10"
// }

// botonMenosDiez.onclick = () => {
//     operando.textContent = "-05"
// }

// botonMasDiez.onclick = () => {
//     operando.textContent = "15"
// }

// paleta
// Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. 
// Cuando se clickea un botón, el div debe cambiar su color de fondo al mismo color de fondo que el del botón clickeado.

// const botonGrande = document.querySelector("#boton-grande")
// const botonRojo = document.querySelector("#rojo")
// const botonAmarillo = document.querySelector("#amarillo")
// const botonNegro = document.querySelector("#negro")
// const botonRosa = document.querySelector("#rosa")
// const botonPeru = document.querySelector("#peru")
// const botonAzul = document.querySelector("#azul")

// botonRojo.onclick = () => {
//     botonGrande.classList.add("rojo")
// }

// botonAmarillo.onclick = () => {
//     botonGrande.classList.add("amarillo")
// }

// botonNegro.onclick = () => {
//     botonGrande.classList.add("negro")
// }

// botonRosa.onclick = () => {
//     botonGrande.classList.add("rosa")
// }

// botonPeru.onclick = () => {
//     botonGrande.classList.add("peru")
// }

// botonAzul.onclick = () => {
//     botonGrande.classList.add("azul")
// }

// email (sin leer)
// Crear un documento html que tenga:

// un título h1 que diga: Mis emails
// un título h2 que diga: Bandeja de entrada
// una lista desordenada con 10 ítems con lorem ipsum (4 o 5 palabras cada uno, no un párrafo entero)
// Inicialmente los ítems deben estar en negrita y con color negro. Cuando se clickea uno de ellos, 
// se debe sacarle la negrita y ponerle un color gris (simulando que el email fue leído)

// const emails = document.getElementsByTagName("li")

// console.log(emails)

// for (let email of emails) {
//     email.onclick = () => {
//         if (email.classList.contains("no-leido")) {
//             email.classList.add("leido")
//         }
// }
// }

// progreso
// Crear un documento html con

// una barra de progreso (con un div dentro de otro)
// un elemento de texto que indique el progreso (p. ej. 50%)
// dos botones, uno para incrementar y otro para dismininuir la barra (- y +)
// cuando se apretan los botones, la barra de progreso tiene que aumentar o disminuir respectivamente y el texto que indica el porcentaje de 
// progreso tiene que actualizarse
// lo mismo tiene que pasar cuando se apreta la flecha derecha (aumentar progreso) y la flecha izquierda (disminuir progreso)
// el incremento/decremento es del 10%

const progreso = document.querySelector(".progreso")
const botonMas = document.querySelector("#mas")
const botonMenos = document.querySelector("#menos")

botonMas.onclick = () => {
    if (progreso.classList.contains("mas-100")) {
        progreso.classList.add("mas-200")
    }
    // else if (progreso.classList.contains("mas-200")) {
    //     progreso.classList.remove("mas-200")
    //     progreso.classList.add("mas-300")
    // }
    else {
        progreso.classList.add("mas-100")
    }

}

botonMenos.onclick = () => {
    if (progreso.classList.contains("mas-200")) {
        progreso.classList.remove("mas-200")
        progreso.classList.add("mas-100")
    }
    else {
        progreso.classList.remove("mas-100")
    }

}

