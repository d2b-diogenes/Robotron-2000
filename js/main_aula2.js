function dizOi (nome) {
    console.log("Oi " + nome);
};
    //Essa função irá pegar o valor que estiver dentro parâmetro e irá imprimir pelo console.log. 

const robotron = document.querySelector("#robotron");

robotron.addEventListener("click", () => {
    console.log("cliquei no robô");
});
    //Uma função que irá executar a função anônima e irá imprimir o texto de dentro do console.log

robotron.addEventListener("click", (evento) => {
    console.log(evento);
});
    //É uma função anônima que irá ser executar o blobo de comando interno a ela e irá imprimir as informações do evento que está dentro do parâmetro
    //As informações que o console.log irá apresentar são meios possíveis de manipular o evento.

    //Função Declarada - Se ela tem um nome, pode ser chamada mais vezes.
    //Função Anônima - A função anônima não pode ser executada em outro momento, pois ela não tem nome. Só será exexutada no código em que ela foi criada.
    //Função Anônima (outra forma):
            //robotron.addEventListener("click", () => { O bloco de comando });
                //É usado a Arrow Functions, funções de setas, para criar a função anônima.

    //Função com parâmetro - Ele vem dentro dos parênteses de uma função
        //É uma forma de de passsar um dado para ser usado dentro da função quando ela for exexutada.
    
    //Hoisting no JavaScript
        //Hoisting é içamento em português
        //A forma que declaramos const, let e variáveis podem alterar o resultado esperado do nosso código.
            //Artigo: https://www.alura.com.br/artigos/hoisting-no-javascript
