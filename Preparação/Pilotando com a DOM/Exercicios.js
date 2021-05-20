const button = document.getElementById('openModal');
const telaSecundaria = document.querySelector('.modal-wrapper');


document.addEventListener('keydown', fecharTela);
button.addEventListener('click', abrirTela)

function abrirTela(){
    telaSecundaria.classList.remove('invisible');
}

function fecharTela(k){
    //k é o nome do evento criado para detectar o pressionamento de botão

    key = k.keyCode;
    //key é o valor da tecla pressionada, "Esc" seria igual a 27
    console.log(key);
    if (key == "27" && !telaSecundaria.classList.contains('invisible')){ //checando o valor de key e se a tela secundária tem o atributo invisible
        telaSecundaria.classList.add('invisible');
    };
}

document.onkeypress = function(event){
    console.log(event.key)
}

