// Funciones puras 

// side effects
// 1. Modificar variables globales
// 2. Modificar parametros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulacion del DOM
// 6. Obtener la hora actual 


function sum (a,b) {
    return a + b
}
//funciones impuras

function sum (a,b) {
    console.log("A:", a)
    return a + b
}

let total = 0

function sumWithSideEffect () {
    total += a
    return total
}


//funcion Pura
function square(x) {
    return x * x
}

function addTen (y) {
    return y + 10
}

const number = 5
const finalRes = addTen(square(number))
console.log(finalRes)
