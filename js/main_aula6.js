
const controle = document.querySelectorAll(".controle-ajuste");


controle.forEach((elemento) => {

    elemento.addEventListener("click", (evento) => {
        //console.log(evento.target.parentNode)
            //Imprimi o elemento pai do elemento em questão

        manipulaDados(evento.target.textContent, evento.target.parentNode)
            //evento.target.parentNode - trás o pai do evento, no caso, do elemento.
            //O pai do elemento é passsado no parâmetro para ser usado função manipulaDados
    })
})

function manipulaDados(operacao, controle) {

    const peca = controle.querySelector(".controle-contador")
        //"controle" é o parâmetro que trás o pai do elemento
        //Esse parâmentro será usado para pegar o elemento filho que possui a classe .controle-contador
        //A constante "peca" irá receber o elemento filho 
        
    if(operacao === "+") {
        peca.value = parseInt(peca.value) + 1;
    } else {
        peca.value = parseInt(peca.value) - 1;
    }
        //o nome foi trocado para "peça", pois alterar dinamicamente os valores de cada componente
}