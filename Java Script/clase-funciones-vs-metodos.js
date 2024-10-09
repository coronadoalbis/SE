// Capacidades que tiene las funciones al igual que otros 

// 1. Pasar funciones como argumentos ---> callback
/*
function a ( ) {}
function b (a) {}
b(a)



//Retornar funciones

function a ( ) {
    function b () {}
    return b
}



// Asignar funciones a variables ---> Empresion de funcion

const a = function() {}



// Tener propiedades y metodos

function a() {}
const obj = {}
a.call(obj)


// Anular funciones  ----mister funtion


function a ( ) {
    function b () {
        function c () {

        }
        c()
    }
        b()
    
}
   a()
   

   // Es posible almacenar funciones en objetos?
*/
   const rocket = {
    name: "Falcon 9",
    launchMessage: function launchMessage () {
        console.log("Holaa")
    }
   }
   
   rocket.launchMessage()