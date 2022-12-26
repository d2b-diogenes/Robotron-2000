
const controle = document.querySelectorAll(".controle-ajuste");

const braco = document.querySelector("#braco");

    //console.log(braco.value);
    //Pegando o valor da constante braco

controle.forEach((elemento) => {
    //console.log(elemento)   
    //Faz o loop em cada elemento do Array e insere em cada um a mesma função
    //A função que será inserida em cada elemento vem entre os parênteses

    elemento.addEventListener("click", (evento) => {  
        //console.log(evento)
            //Trás todas as propriedades do elemento
        //console.log(evento.target)
            //Trás o elemento em si, o alvo  
        //Pega o elemento adiciona o escutador, o .addEventListener
        //Vai dentro do parâmetro as informações do evento do clique

        manipulaDados(evento.target.textContent)
            //console.log(evento.target.textContent)
                //Trás o conteúdo de texto desse elemento no HTML
    
    })

})

function manipulaDados(operacao) {
        
    if(operacao === "+") {
        braco.value = parseInt(braco.value) + 1;
    } else {
        braco.value = parseInt(braco.value) - 1;
    }
}

    //Arrays
        //Artigo:https://www.alura.com.br/artigos/javascript-para-que-serve-array