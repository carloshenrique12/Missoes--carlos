const caixaPrincipal = document.querySelector(".caixa-principal");
const caixa Perguntas = document.querySelector(".caixa-perguntas"); 
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [

enunciado: "Como você acredita que podemos combater o racismo na sociedade?",

    alternativas: (

        afirmacao:

            "afirmacaol"

texto: "Denunciando atos de discriminação e apciando

texto: "Participando de campanhas de conscientização educação sobre igualdade racial.",

        politicas públicas inclusivas.", afirmacao: "afirmacao2"

        enunciado: "Como você pode ajudar fake news, especialmente as que perpetuam alternativas: [ combater a disseminação de racismo?",

        afirmacao: "afirmacao3"

texto: "Verificando veracidade das informações antes de compartilhar qualquer conteúdo, especialmente sobre temas sensíveis como racismo.",

        fake news perpetuam texto: "Educando amigos e familiares sobre os perigos das Incentivando-os a não compartilhar conteúdos falsos que

racismo.", afirmacao: "afirmacao4"

        enunciado: "Como podemos incentivar uso de energia solar outras formas de energia limpa, especialmente em comunidades carentes?",
        alternativas: t
texto: "Defendendo politicas públicas que subsidien energia solar para familias de baixa renda.", afirmacao: "afirmacao5"
texto: "Promovendo a instalação de painéis solares om escolas e centros comunitários de comunidades marginalizadas.", afirmacao: "afirmacao6"
1
        let atual 0;
        let perguntaAtual; let historiafinal
function mostraPergunta() {
    if (atual > perguntas.length) {
        mostraResultado();
        return;
perguntaAtual perguntas[atual];
caixa Perguntas.textContent caixaAlternativas.text.Content perguntaAtual.enunciado;
        textoResultado.textContent = ""; mostraAlternativas();
        function mostraAlternativas() {
            for (const alternativa of perguntaAtual.alternativas) ( const botsoAlternativa document.createElement("button"); botaoAlternativa.text.Content alternativa.texto: botaoAlternativa.addEventListener("click", () -> respostaselecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativa);
            1
            function resposta Selecionada(opcaoSelecionada) {
                const afirmacao opcaoSelecionada.afirmacao; historiaFinal + afirmacao atual++
mostra Pergunta();
                function mostraResultado() {
                    caixaPerguntas.textContent "Resumindo..."; textoResultado.textContent historiaFinal; caixaAlternativas.textContent "";
                    mostraPergunta();
