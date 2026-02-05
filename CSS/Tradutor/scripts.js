/*
[]Saber quando o botão é clicado
[]Pegar o texto do input
[]Manda para o servidor traduzir
[] Receber a resposta do servidor
[]Pegar a resposta do servidor
[]Colocar na tela a tradução

https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it

fetch - ferramenta do javascript para fazer requisições http (chamar servidores)
async - diz que a função é assíncrona (vai demorar um pouco para responder)
await - espera a resposta de algo (só pode ser usado dentro de funções async)
querySelector - pega elementos do html
textContent - coloca texto dentro de um elemento html
*/

//Pegando o texto do textarea
let inputTexto = document.querySelector(".input-texto")
//Pegando o local onde o texto é digitado
let traducaoTexto = document.querySelector(".traducao")
//Pegando o local onde a tradução vai aparecer
let idioma = document.querySelector(".idioma")
//Pegando o local onde o idioma é selecionado


async function traduzir() {
    //endereço do servidor com o texto a ser traduzido
    let endereco = "https://api.mymemory.translated.net/get?q=" + inputTexto.value + "&langpair=pt-BR|" + idioma.value
    //faz a requisição para o servidor 
    let resposta = await fetch(endereco)
    //espera os dados em formato json
    let dados = await resposta.json()
    //ver a resposta do servidor  



    traducaoTexto.textContent = dados.responseData.translatedText   //coloca na tela a tradução
    console.log(dados)
}

function ouvirvoz() {
    //Pegou a Reconhecimento de voz e transscrição
    let voz = window.webkitSpeechRecognition
    //Deixando pronto para usar a voz
    let reconhecimentoVoz = new voz()
    //configurando a língua
    reconhecimentoVoz.lang = "pt-BR"
    //Iniciando o reconhecimento de voz
    reconhecimentoVoz.start()

    //Quando tiver o resultado do reconhecimento de voz
    reconhecimentoVoz.onresult = (evento) => {
        let textoTranscrito = evento.results[0][0].transcript
        //Pegando o texto do textarea
        inputTexto.textContent = textoTranscrito
        //Chamando a função traduzir
        traduzir()
        //Mostrando o texto transcrito no console
    }
    
}