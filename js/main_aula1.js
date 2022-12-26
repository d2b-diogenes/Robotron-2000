function dizOi () {
    console.log("Oi");
};
    //Função quando chamada irá executar o console.log
    //Essa função poderá ser reutulizada outras vezes

//document.querySelector("#robotron").addEventListener("click", dizOi);
    //Código que pega o ID do documento e add ao ID um escutador de eventos que ao escutar o clique, ele executa a função "dizOi" 

const robotron = document.querySelector("#robotron");
    //Foi criada uma variável que recebe e armazena um elemento do HTML, o ID do Robotron. 
    //Essa variável pode ser usada usada na função escutar o clique e em outras vezes.
    //O .querySelector() busca no documento o elemento que é passado para ele dentro dos parênteses 

robotron.addEventListener("click", dizOi);
    //Código add um escutador de eventos que ao escutar o clique, ele executa a função "dizOi"
    //O .addEventListener() é uma função que escuta os eventos. No caso, ele irá escutar um evento de clique.

