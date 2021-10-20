function recibirdatos2() {
    let correo = document.getElementById("correo").value
    let nombre = document.getElementById("nombre").value
    let numero = document.getElementById("numero").value

    alert ("hola " + nombre + " como estas? ")

    if (correo < 18)  {
        alert ("hola chico, no pares de soñar :3")
    } else {
        alert ("Consigue el dinero y aprovechalo para poder reunir uno para un lambo :3")
    }

    alert (" tu opinios es: '" + numero + "' la valoraremos y nos contribuira")
}