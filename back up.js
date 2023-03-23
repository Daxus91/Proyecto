let nombre = prompt("Cual es tu nombre?")

document.write("Gracias "+nombre+"!!")
console.log("Tu nombre es " + nombre)

let nombreMin = nombre.toLowerCase()

switch (nombreMin){
    case "oscar":
    alert("Bienvenido de vuelta Oscar!")
    break
    case "camilo":
    alert("Bienvenido de vuelta Camilo!")
    break
    default:
    alert("Lo siento, no estas autorizado")
}
