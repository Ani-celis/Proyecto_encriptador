function encriptar() {
    let texto = document.getElementById("inputText").value; /*Se obtiene el valor del texto ingresado por el usuario a través del campo de entrada con id="inputText" */
    /* El texto se encripta usando una serie de reemplazos:*/
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputText").value = textoEncriptado; /*El texto encriptado se muestra en un campo de salida con id="outputText": */
}

function desencriptar() {
    let textoEncriptado = document.getElementById("inputText").value;
    let textoDesencriptado = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputText").value = textoDesencriptado;
}

function copiarTexto() {
    let textoParaCopiar = document.getElementById("outputText");
    textoParaCopiar.select();
    textoParaCopiar.setSelectionRange(0, 99999); // Para móviles
    document.execCommand("copy");

    alert("Texto copiado: " + textoParaCopiar.value);
}
