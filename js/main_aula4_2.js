const pecas = document.querySelectorAll(".controle");

    //Foi criada uma constante para receber uma Array

for(let i = 0; i < pecas.length; i++) {

    //SUBTRAIR
    pecas[i].children[0].addEventListener("click", () => {manipulaDados("subtrair")});

    //SOMAR
    pecas[i].children[2].addEventListener("click", () => {manipulaDados("somar")});
    
    function manipulaDados(operacao) {

        if (operacao === "somar") {
            pecas[i].children[1].value = parseInt(pecas[i].children[1].value) + 1;
        } else {
            pecas[i].children[1].value = parseInt(pecas[i].children[1].value) - 1;
        }
        
    }

}
 
    //O loop foi criado para adicionar a função escutar em cada componente.
    //Cada componente irá ter as funções de subtriar e somar
    //Com isso não é mais necessário repetir código, evitando erros no código.