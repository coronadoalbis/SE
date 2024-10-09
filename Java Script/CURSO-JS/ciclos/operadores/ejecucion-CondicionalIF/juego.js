const numeroSecreto = Math.floor(Math.random() * 10 + 1)


const numeroJugador= parseInt (prompt("adivina el numero secreto entre 1 al 10")
);

console.log("este es el numero con el que jugas ${numeroJugador}")

if(numeroJugador == numeroSecreto) {
    console.log("!felicidades, adivinastes el numero secreto!")

} else if (numeroJugador <numeroSecreto) {
    console.log("El numoer es demasiado baji, intenta de nuevo")
}else{
console.log("El numero es muy alto, intenta de nuevo");

}






