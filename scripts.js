const quotes =[
    {
        quote: "A PERSISTENCIA É O CAMINHO DO EXITO.",
        author: "CHARLES CHAPLIN",
    },


    {
        quote: "A UNICA FORMA DE FAZER UM GRANDE TRABALHO É AMAR O QUE SE FAZ.",
        author: "STEVE JOBS",
    },

    {
        quote: "O SUCESSO É A SOMA DE PEQUENOS ESFORÇOS REPETIDOS DUA APÓS DIA.",
        author: "ROBERT COLLIER",
    },

    {
        quote: "O FRACASSO É A OPORTUNIDADE DE COMEÇAR DE NOVO, COM MAIS EXPERIÊNCIA.",
        author: "HENRY FORD",
    },

    {
        quote: "NÃO ESPERE POR OPORTUNIDADES, CRIE VOCÊ MESMO AS SUAS.",
        author: "LUCIANA F SANTOS",
    },

    {
        quote: "NO VERDADEIRO SUCESSO NÃO É O FINCANCEIRO, MAS SIM O SUCESSO EM AJUDAR OUTRAS PESSOAS.",
        author: "ZIG ZIGLAR",
    },


    {
        quote: "ACREDITE EM SI PRÓPRIO, E O RESTO VIRA NATURALMENTE.",
        author: "ELON MUSK",
    },   
]
const quoteBtn = document.querySelector("#quoteBtn");
const quoteText = document.querySelector(".text");
const quoteAuthor = document.querySelector(".author");

function getQuote() {
    const index  = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[index].quote;
    quoteAuthor.textContent =quotes[index].author;
}

quoteBtn.addEventListener("click" , getQuote);