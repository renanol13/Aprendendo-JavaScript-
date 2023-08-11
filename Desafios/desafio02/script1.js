var botao = document.querySelector('#botao')
botao.addEventListener('click', clicar)

function clicar () {
    var anoDgt = document.querySelector('#anoDgt')
    var msg = document.querySelector('#msg')
    var ano = Number(anoDgt.value)
    
    if(ano != 0 && ano <= 2023){
        msg.innerHTML = `Foi inserida a idade: <strong>${ano}</strong>. Ou seja, Tem <strong>${2023-ano}</strong> anos!`
    }

    else{
        msg.innerHTML = 'ERRO!!!!'
        if(anoDgt.value.length == 0){
            msg.innerHTML += " Você nao digitou nada"
        }

        if(ano > 2023){
            msg.innerHTML += ' Você digitou um ano acima do atual'
        }

    }
}