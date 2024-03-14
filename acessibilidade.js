document.addEventListener('DOMContentLoaded', function(){ 
    leitorAtivo = true;
    lerTexto('Bem vindo ao decodificador de texto. Esta página possui leitor de voz, para desativar direcione o cursor para o canto superior esquerdo e abaixo do logotipo Alura cliqueno botão liga desliga.');}
);

let leitorAtivo = false;

function lerTexto(texto) {
    if (leitorAtivo) {
        responsiveVoice.speak(texto, 'Brazilian Portuguese Male');
    }
};

function alternarLeitor() {
    /*console.log('Função alternarBotaoLeitor() foi chamada.');*/
    const botaoLeitor = document.getElementById('botaoLeitor');
    leitorAtivo = !leitorAtivo;
    if (leitorAtivo) {
        botaoLeitor.textContent = '🔊Ligado';
    } else {
        botaoLeitor.textContent = '🔇Desligado';
    }
};

const descricaoBotoes = {
    'codificar': 'Botão para criptografar o texto digitado.',
    'decodificar': 'Botão para descriptografar o texto.',
    'reset': 'Botão reset para limpar os campos de entrada e saída de texto.',
    'botaoLeitor': 'Botão liga e desliga leitor de voz.'
};

window.onload = function() {
    const botoes = document.querySelectorAll('button');
    botoes.forEach(botao => {
        const id = botao.getAttribute('id');
        const descricao = descricaoBotoes[id];
        botao.setAttribute('title', descricao);
        botao.addEventListener('mouseover', () => {
            lerTexto(descricao);
        });
    });

    const imagemLogo = document.querySelector('img[alt="logo Alura_ONE"]');
    imagemLogo.addEventListener('mouseover', () => {
    lerTexto('Imagem ilustrativa do logotipo  Alura  e ONE Oracle.')
    });

    const iconesCopiar = document.querySelectorAll('.material-symbols-outlined');
    iconesCopiar.forEach(icone => {
    icone.addEventListener('mouseover', () => {
        lerTexto("Botão para copiar o texto inserido na caixa.");
    });
    });

    const textarea = document.getElementById('inputTextarea');
    textarea.addEventListener('input', function() {
    const textoInserido = textarea.value.trim();
    lerTexto(textoInserido)});
    textarea.addEventListener('mouseover', function() {
    const textoDigitado = textarea.value.trim();
    lerTexto(textoDigitado);
    });

    const textareaCripto = document.getElementById('outputTextarea');
    textareaCripto.addEventListener('input', function() {
    const textoCriptografado = textareaCripto.value();
    lerTexto(textoCriptografado)});
    textareaCripto.addEventListener('mouseover', function() {const textoCriptografado = textareaCripto.value;
    lerTexto(textoCriptografado);
    });

    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach(textArea => {
        const placeholderText = textArea.getAttribute('placeholder');
        textArea.addEventListener('mouseover', () => {
            lerTexto(placeholderText);
        });
    });
}   

const elementosParaLer = document.querySelectorAll('h1, h2, h3, p, li, a');
    elementosParaLer.forEach(elemento => {
    elemento.addEventListener('mouseover', () => {
        const texto = elemento.textContent.trim();
        lerTexto(texto);
    });
});

function copiarTexto(elementId) {
    const textoCopiado = document.getElementById(elementId).value;
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {alert("Copiado");}); 
};

function mostrarAlerta(mensagem) {
    lerTexto(mensagem);
    const novaJanela = window.open('','','width=10px,height=20px','justify-content = center');
    novaJanela.document.write(mensagem);
};

window.alert = function(mensagem) {
    mostrarAlerta(mensagem);
};