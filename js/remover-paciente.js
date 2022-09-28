var pacientes = document.querySelectorAll (".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    
    event.target.parentNode.classList.add("fadeOut"); //podemos utilizar uma classe(fadeOut) criada no CSS para remover o campo selecionado gradativamente

    setTimeout(function(){ //a função setTimeout serve para aguardar o tempo de remoção indicado anteriormente pelo CSS
        event.target.parentNode.remove();
    }, 500); //ao utilizar a função setTimeout, utilizamos o tempo em milisegundos, neste caso 500 milisegundos é equivalente a 0.5 segundos

    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;
    // paiDoAlvo.remove();
    //event.target.parentNode.remove(); - também podemos utilizar a função de remoção desta maneira em apenas uma linha
});