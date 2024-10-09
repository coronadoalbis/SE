class Persona  {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log("hola,mi nombre es ${this.nombre} y tengo $ {this.edad}");
    }

}

const persona1 = new Persona("Mariana", 25 );
persona1.saludar();
