
const controle = document.querySelectorAll("[data-controle]");

//A variável peças é um objeto que tem 5 itens, braço, brindagem, nucleros, pernas e foquetes. E cada item desse dentro do objeto peças é também um objeto, pois em cada um deles têm 4 outos itens.
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

//Buscando os itens dentro do objeto:
//console.log(pecas["bracos"]);
    //Irá retornar os valores internos ao item "bracos"

controle.forEach((elemento) => {

    elemento.addEventListener("click", (evento) => {

        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
           
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
