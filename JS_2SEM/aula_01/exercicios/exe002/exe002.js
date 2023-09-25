const botao = document.querySelector("#botao");
const contadorElemento = document.querySelector("#contador");

//inicializando contador
let contador = 0;

//Funçao que será chamada quando o botao for clicado

function aumentarContador()
{
    contador++;
    contadorElemento.textContent = contador;


}
    //Adicionando ouvinte do do evento para clique do botao
    botao.addEventListener("click", aumentarContador);


const diminuir = document.querySelector("#diminuir");

    function diminuirContador(){
        if (contador == 0){
            alert('Apenas numeros maiores que 0')
            return
        }
        contador--;
        contadorElemento.textContent = contador

    }
    diminuir.addEventListener("click", diminuirContador);


        const zerar = document.querySelector("#zerar");
        function zerarContador(){
            contador = 0;
        contadorElemento.textContent = contador;    
    }
        zerar.addEventListener("click", zerarContador);

 