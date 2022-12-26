
const controle = document.querySelectorAll("[data-controle]");

const estatisticas = document.querySelectorAll("[data-estatistica]");
   
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {

    elemento.addEventListener("click", (evento) => {
            
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        
                console.log(evento.target.dataset.controle)
                console.log(evento.target.parentNode)

        atualizaEstatisticas(evento.target.dataset.pecas)
        //console.log(evento.target.dataset.pecas);
            //Essa função irá atualizar os valores da estatística a cada clique em um componente.
                //Essa função irá levar alguns parãmetro:
                    //1º parâmentro irá levar o nome da peça que foi clicado. O nome da peça está dentro do datset.

    })
})

function manipulaDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]")
        
    if(operacao === "+") {
        peca.value = parseInt(peca.value) + 1;
    } else {
        peca.value = parseInt(peca.value) - 1;
    }
        
}

function atualizaEstatisticas (peca) {
        //A função irá atualizar os valores da estatística a cada CLIQUE em um componente.
        //Cada componente tem um peso diferente em cada estatística.

    //console.log(pecas[peca])
        //Peça o objeto "pecas" e com o nome da peça que vem por meio do parâmetro é possível acessar o item dentro do objeto


    estatisticas.forEach( (elemento) => {
        //O ".forEach adiciona em cada elemento do objeto "estatistica" um bloco de comandos que é executado por em função anônima.
            //O termo "elemento" é cada "elemento" dentro do objeto "estatistica"

        if(operacao === "+") {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        } else {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        }
        
            //"elemento" é o parágrafo que contém o valor de uma das estatística.
            //"elemento.textContent" acessa o conteúdo do parágrado que contém a estatística.
            //"parseInt(elemento.textContent)" irá transformar o valor que está em texto em um valor inteiro para que seja possível calcular
            //O cálculo: Irá pegar os valor que está no parágrafo e irá somar com o 2º nível do objeto "pecas", o item da estatística  
            
                //pecas[peca][elemento.dataset.estatistica]
                //1ª parte: pecas[peca] - acessa o 1º nível do objeto - O parâmetro trás o nome da peça que foi clicada.
                //2ª parte: [elemento.dataset.estatistica] - acessa o 2º nível do objeto - acessa o nome do item estatística que está no data-estatistica do elemento.
    })

}
