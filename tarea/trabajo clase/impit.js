function recibirdatos2() {
    let edad = document.getElementById("edad").value
    let nombre = document.getElementById("nombre").value
    let genero = document.getElementById("genero").value

    if (edad >= 18) {
        alert("Buenas " + nombre + " puedes entrar !bien¡")
    }else{
        alert("Buenas " + nombre + " no puedes entrar, espera unos añitos mas")
    }
    
    if (edad<18) {
        alert("solo son añitos ;3")
    }else{  
        if (genero=="masculino"){
            alert("45.000 pa entrar ¡¿Aceptas el reto hotwheels?!")
        }else{
            alert("25.000 pa entrar ;3")
        }
    }       

}