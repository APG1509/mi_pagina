function recibirdatos2() {
    let correo = document.getElementById("exampleInputEmail1").value;
    let nombre = document.getElementById("nombre").value;
    let numero = document.getElementById("numero").value;
    let escoger = document.getElementById("disabledSelect").value;
    let mayor_list = document.getElementsByName("mejor");

    alert ("hola " + nombre + " como estas? ");

    alert ("!Perfecto¡ " + correo + " te escribiremos ;)");

    alert ("te llamaremos al " + numero);

    alert ("vives en " + escoger + ", perfecto");

    for (let i = 0; i < mayor_list.length; i ++) {
        if (mayor_list[i].checked) {
            alert(mayor_list[i].value);
        }
    }

}