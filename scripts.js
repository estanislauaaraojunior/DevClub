/*
Saber quando o botão é clicado
Pegar o texto do input
Manda para o servidor traduzir
Pegar a resposta do servidor
Colocar na tela a tradução

https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it
*/

let inputTexto = document.querySelector(".input-texto")     /*Pegando o texto de textarea*/

async function traduzir(){          /*async porque vai usar await dentro da função*/

    let endereco = "https://api.mymemory.translated.net/get?q=" + (inputTexto.value) + "&langpair=pt-BR|en"     /*pega o valor do inputTexto*/

    let resposta = await fetch(endereco)            /*espera a resposta do servidor*/ 
    let dados = await resposta.json()             /*espera os dados em formato json*/
    console.log(dados)                       /*ver a resposta do servidor*/
}
