var horario = new Date
var hora = horario.getHours()
var minutos = horario.getMinutes()


var msg = document.querySelector('#msg')

msg.innerText = `Agora são ${hora}: ${minutos}`

