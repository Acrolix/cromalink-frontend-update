let color = false;

function cambiar_color(){
    const contenido = document.querySelector('.contenido');
    const sub_contenido = document.getElementsByClassName('sub-contenido');
    const boton = document.querySelector('.boton-sub-contenido');
    if(color === false){
    contenido.style.backgroundColor = 'white';
    contenido.style.color = 'black';

    for(let i = 0; i < sub_contenido.length; i++){
    sub_contenido[i].style.color = '#1B1F3E';

    boton.style.color = '#1B1F3E';
    boton.textContent = 'MODO OSCURO'
    }
    }
    else{
    contenido.style.backgroundColor = 'black';
    contenido.style.color = '#ffffff';

    for(let i = 0; i < sub_contenido.length; i++){
    sub_contenido[i].style.color = '#ffffffea';

    boton.style.color = '#ffffffea';
    boton.textContent = 'MODO CLARO'
    }
    }
    color = !color
    localStorage.setItem('modo_oscuro', color.toString());
}

function guardado(){
    const guardado = localStorage.getItem('modo_oscuro');

    if(guardado !== null){
        color = guardado === 'false';
        cambiar_color();
    }
}

window.onload = guardado;

const seguidores = document.getElementById('toogle');

seguidores.addEventListener('change', () => {
    if (toogle.checked) {
        console.log('Activado');
    } else {
        console.log('Desactivado');
    }
});
