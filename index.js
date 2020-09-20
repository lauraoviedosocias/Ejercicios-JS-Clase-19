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

const primerBoton = document.getElementById("boton1")
const segundoBoton = document.getElementById("boton2")
const tercerBoton = document.getElementById("boton3")
const resultado = document.getElementById("resultado")


primerBoton.onclick = () => {
    resultado.textContent = ("Correcto")
    primerBoton.classList.add("verde")
}

segundoBoton.onclick = () => {
    resultado.textContent = ("Incorrecto")
    segundoBoton.classList.add("rojo")
    primerBoton.classList.add("verde")
    tercerBoton.classList.add("rojo")
}

tercerBoton.onclick = () => {
    resultado.textContent = ("Incorrecto")
    tercerBoton.classList.add("rojo")
    primerBoton.classList.add("verde")
    segundoBoton.classList.add("rojo")
}
