const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

    //Foram criadas as constantes dos elementos dos botões e do input para que possam ser manipulados


somar.addEventListener("click", () => {
    braco.value = parseInt(braco.value) + 1;
        //Código que está manipulando o valor que está dentro do Input do HTML.
        //Ao ser alterado, o valor passa a ser alterado dinamicamente.
})

subtrair.addEventListener("click", () => {
    braco.value = parseInt(braco.value) - 1;
        //Código que está manipulando o valor que está dentro do Input do HTML.
        //Ao ser alterado, o valor passa a ser alterado dinamicamente.
})

//Com esse códigos é possível somar e subtrair os valores para do componente Braço.

//Na próxima aula será ensinado de como fazer esse mesmo procedimento para todos os outros componentes sem precisar repetir os códigos
