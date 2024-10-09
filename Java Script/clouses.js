/*
CLOUSURE funcion que tiene acceso a variables de un ambito externo incluso despues de que esa funcion haya terminado de ejecutarse

Ambito lexico:  cada ves que se declara una funcion, crea su propio ambito lexico, y que puede acceder a variables.
dreto de ese ambito y a las variables en ambito superiores.

*/



function outerFunction () {
    let outerVariable = "Im from outer function"

    function innerFunction () {
        console.log(outerVariable)
    }
    return innerFunction
}

const ClosureExample = outerFunction()
ClosureExample()

function createCounter () {
    let = count = 0
   
    return function() {
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()


function outer () {
    let message = "Hello,"

    function inner (name) {
        console.log(message + name)
    }
    return inner
}
const closureA = outer()
const closureB = outer()

console.log("Alice")
console.log("Bob")
