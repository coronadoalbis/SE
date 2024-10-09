/*

Estructura de datos 

key  / value

objeto{
   propiedad: valor,
   propiedad: valor,
   propiedad: valor 

   Metodos()

}




*/

const persona = {
    name: "Jhon",
    age: 30,
    direction: {
        street: "Av Insurgent 187"
       ciudad : "CDMX"
    },
    saludar() {
        console.log("hello, mi name es ${persona.name}")
    }
};

console.log(persona);
persona.saludar();

persona.telefono = "555-555-555";
console.log(persona.telefono);

persona.despedir = () => {
    console.log("Adios");

};
persona.despedir();

delete persona.telefono;
delete persona.despedir;

