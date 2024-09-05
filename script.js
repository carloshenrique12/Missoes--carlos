const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a inteligência artificial (IA) pode impactar o mercado de trabalho no futuro?",
        alternativas: [
            {
                texto: "A) A IA substituirá muitos empregos, especialmente nas funções repetitivas.",
                afirmacao: "Com a automação crescente, tarefas repetitivas e processos de rotina serão mais eficientes quando realizados por máquinas, possivelmente substituindo trabalhos que atualmente são realizados por humanos. "
            },
            {
                texto: "B) A IA criará novos empregos e oportunidades em setores emergentes.",
                afirmacao: "Enquanto alguns empregos serão substituídos, a IA também gerará novas funções e especializações, principalmente em áreas como desenvolvimento de IA, manutenção e análise de dados."
            }
        ]
    },
    {
        enunciado: "Qual será o impacto da IA na tomada de decisões empresariais no futuro?",
        alternativas: [
            {
                texto: "A) A IA tomará decisões autônomas sem intervenção humana.",
                afirmacao: "Com o avanço dos algoritmos de IA, muitas decisões empresariais poderão ser tomadas de forma autônoma, reduzindo a necessidade de intervenção direta dos gestores. "
     },
            {
                texto: "A IA servirá como uma ferramenta de apoio à decisão, oferecendo recomendações baseadas em dados.",
                afirmacao: "Em vez de substituir completamente o julgamento humano, a IA fornecerá recomendações e insights para ajudar os gestores a tomar decisões mais informadas."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
