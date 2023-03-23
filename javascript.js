let inputOne = document.getElementById("inputOne")
let inputTwo = document.getElementById("inputTwo")
let btn = document.getElementById("btn")
let bttn = document.getElementById("bttn").style.display="flex-block-inline";




btn.addEventListener("click", function () {

    let userName = inputOne.value
    let PasswordOne = inputTwo.value

    console.log(userName)
    console.log(PasswordOne)

    inputOne.value = ""
    inputTwo.value = ""


    bttn.addEventListener("click", function () {

        if (inputOne.value === userName && inputTwo.value === PasswordOne) {
            alert("Credenciales correctas, Acceso concedido!")
        } else {
            alert("las credenciales no coinciden, intentalo de nuevo!")
        }
    })

})









