var barraProgresso = document.querySelector(".progress");
barraProgresso.style.display = "none";


function Acessar(){

        var nome = document.querySelector("#nome").value;
        var idade = document.querySelector("#Idade").value;
        var cidade = document.querySelector("#Cidade").value;

        var validarCampos = validar(nome, idade, cidade);

        if(validarCampos == true)
        {
            return;
        }
        barraProgresso.style.display = "block"
        barra(nome, idade, cidade)
       
}

function validar(nome, idade, cidade)
{
    if (nome == "" || idade == "" || cidade == ""){
        document.querySelector("#resultado").innerHTML =
            `<div class="alert alert-success fade show" role="alert">
                <div class="d-flex justify-content-between">
                 <span> Preencha todos os campos<span> <button type="button" class="btn btn-close" data-bs-dismiss="alert"<button>
                </div>
            </div> `
    } 
    else if  (idade < 0 || idade >= 100){
        document.querySelector("#resultado").innerHTML =
        `<div class="alert alert-success fade show" role="alert">
            <div class="d-flex justify-content-between">
             <span> Idade inválida <span> <button type="button" class="btn btn-close" data-bs-dismiss="alert"<button>
            </div>
        </div> `
        return true;
    
    } else{
        return false;
    }
}
    function barra(nome, idade, cidade)
    {
        var progresso = 0;
        var barra = document.querySelector(".progress-bar");
        var intervalo = setInterval(function(){

            if (progresso > 100)
            {
                clearInterval(intervalo);
                barraProgresso.style.display = "nome";
                document.querySelector("#resultado").innerHTML = 
                `<div class="alert alert-success fade show" role="alert">
                <span> Informaçoes: ${nome}, ${idade}, ${cidade}<span>
                <button type="button" class="btn-close" data-bs-dismiss="alert"><button>
                `
            }else {
                progresso++;
                barra.style.width = progresso + "%"
            }
        }, 50);
    }



    