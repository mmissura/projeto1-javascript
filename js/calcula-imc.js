//<!-- Todo código em JavaScript, deve iniciar dentro da tag script 
  //      - console.log será exibido no console do desenvolvedor e o alert, aparecerá como janela popup 
    //    - A função querySelector serve para procurar um elemento específico no document . Ex: document.querySelector("h1");
      //  É uma boa prática inserir a tag scrip no final do body-->

    var titulo = (document.querySelector(".titulo"));
    //na busca do querySelector, podemos usar a busca por classe. Ex: se o h1 tiver a classe de nome titulo, utilizamos a busca pela
    //classe, ex.: var titulo = documentSelector(".titulo");
    
            titulo.textContent = "Aparecida Nutricionista"; //Para alterar a descrição de alguma tag de texto, 
    //usamos o nome da variável .textContent = novo nome
    

    var pacientes = document.querySelectorAll(".paciente"); 
    //para selecionar o id de alguma classe, utilizamos a #

    for(var i = 0; i < pacientes.length; i++) {
      //console.log(pacientes[i]); - declarando a variável e [], o for percorrerá toda lista de pacientes
      var paciente = pacientes[i];
    

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent; //imprimir o conteúdo de texto do td

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent //imprimir o conteúdo de texto do td

    var tdImc = paciente.querySelector(".info-imc");
    //console.log(paciente); //buscando informações da tag tr
    //console.log(tdPeso); //buscando informações específicas da tag td que tem o peso
    //console.log(peso);
    //console.log(tdAltura);
    //console.log(altura); //imprimindo a informação
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido) {
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValida) {
      console.log("Altura inválida");
      pesoValido = false;
      tdImc.textContent = "Altura inválida";
      paciente.classList.add("paciente-invalido");
  }

    if (alturaValida && pesoValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
  }

  //titulo.addEventListener("click", mostraMensagem); //a função addEventListener serve para ouvir o q o usuário irá fazer, neste caso, ouvirá o click do mouse

  //função que irá executar o addEventListener
  //function mostraMensagem() {
    //console.log("Olá, eu fui clicado");
  //}

  function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura* altura);
    return imc.toFixed(2); //a função toFixed(x) serve para mostrar quantas casas decimais queremos mostrar
  }

  function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
      return true;
    } else {
      return false;
    }
  }

  function validaAltura(altura) {
    if(altura >= 0 && altura <=3.0){
    return true;
  } else{
    return false;
  }
}