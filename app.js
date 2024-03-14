let code= [
    ['e','enter'],
    ['i','imes'],
    ['a','ai'],
    ['o','ober'],
    ['u','ufat'],
];

function verificarEntrada(texto) {
    const regex = /^[a-z\s!;?.,@]+$/;
    const valido =regex.test(texto);
    if(!valido) {
        alert("Use apenas letras minúsculas, palavras sem acento e sem caracteres.");
    }
    return valido;
}

function codificarText() {
   const entrada = document.getElementById('inputTextarea').value;
    if (!verificarEntrada(entrada)) {
        return;
    }
    const criptografado = criptografarTexto(entrada);
    document.getElementById('outputTextarea').value = criptografado;
}

function criptografarTexto(texto) {
    let resultado = texto;
    for (let i = 0; i < code.length; i++) {
        const vogal = code[i];
        resultado = resultado.replaceAll(vogal[0], vogal[1]);
    }
    return resultado;
}

function decodificarText() {
    const textoCriptografado = document.getElementById('inputTextarea').value;
    const descriptografado = descriptografarTexto(textoCriptografado);
    document.getElementById('outputTextarea').value = descriptografado;
}

function descriptografarTexto(textoCriptografado) {
    let resultado = textoCriptografado;
    for (let i = 0; i < code.length; i++) {
        const vogal = code[i];
        resultado = resultado.replaceAll(vogal[1], vogal[0]);
    }
    return resultado; }

function copiarTexto(elementId){
    let textoCopiado = document.getElementById(elementId).value;
    navigator.clipboard.writeText(textoCopiado)
        .then(()=>{ 
            alert("Copiado")
        });
}

function resetText() {
    document.getElementById('inputTextarea').value = '';
    document.getElementById('outputTextarea').value = '';
}
