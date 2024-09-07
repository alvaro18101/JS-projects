const codigo = document.getElementById('codigo-color')
const boton = document.getElementById('boton')
const body = document.getElementById('body')

boton.addEventListener('click', cambiar_color)

function cambiar_color() {
    body.style = 'background: ' + '#' + codigo.value;
}

function modificar_ancho(){
    const ancho = document.getElementById('codigo-color')
    ancho.style = 'width: ' + ancho.value.length + 'ch'
    if (ancho.value.length == 0) {
        ancho.style = 'width: 1ch'
    }
}
setInterval(modificar_ancho, 1);

// setInterval(function() {
//     const ancho = document.getElementById('codigo-color')
//     ancho.style = 'width:' + ancho.value.length + 'ch'
//     }, 1);