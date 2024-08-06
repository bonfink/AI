const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Você acha que AI pode ajudar na educação?",
        alternativas: [
            "sim",
            "nao"
        ]
    },
    {
        enunciado: "aaa",
        alternativas: [
            "sim",
            "nao"
        ]
    },
    {
        enunciado: "aaaaaaaa",
        alternativas: [
            "sim",
            "nao"
        ]
    },
    {
        enunciado: "???",
        alternativas: [
            "sim",
            "nao"
        ]
    },
    {
        enunciado: "perguntas",
        alternativas: [
           "sim",
            "nao"
        ]
    },
];


let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

