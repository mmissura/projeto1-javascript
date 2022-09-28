var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest(); //XMLHttpRequest é o objeto responsável por fazer requisições http   

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //abrindo a conexão com o endereço que queremos inserir
    
    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send(); //enviando a requisição solicitada pelo GET

});