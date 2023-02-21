function horaActual(){
    fecha = new Date(); //receptor de los datos actuales
    hours = fecha.getHours();   //hora actual
    minutos = fecha.getMinutes(); // minuto actual
    segundos = fecha.getSeconds(); // segundo actual

    if (hours < 10 ){
        hours = '0' + hours;
    } 
    if (minutos < 10 ){
        minutos = '0' + minutos ;
    }

    //vizualizar
    miReloj = `${hours}:${minutos}`;
    return miReloj;
}

function actualizar(){
    miHora = horaActual();
    miReloj = document.querySelector('#hora');
    miReloj.innerHTML = miHora
}
setInterval(actualizar,1000); //iniciar temporizador
