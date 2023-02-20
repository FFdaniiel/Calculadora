const displayValorAnterior = document.getElementById('valorAnterior');
const displayValorActual = document.getElementById('valorActual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesNumerRari = document.querySelector('.numero');
const botonesOperadores = document.querySelectorAll('.operador');


// Valores
valorActual = []
valorAnterior = []
valor1 = []
valor2 = []
function valoresCalc(e){
    valorAnterior = valorActual;
    valorActual = [];

    if(isNaN(valor2) || isNaN(valor2)){

    }else if(valor2 == 0){
        displayValorAnterior.innerHTML = valorActual
        displayValorActual.innerHTML = ''

    }else if(valor2 !== '' && valor2 !== ''){
        valorActual = e
        valorAnterior = []
        valor2 = []
        displayValorActual.innerHTML = valorActual

    }
}

function botones(){
    botonesNumeros.forEach(boton => {
        boton.addEventListener('click', () =>{
            valorActual = valorActual + boton.innerHTML;
            displayValorActual.innerHTML = valorActual
            valor1 = parseFloat(valorActual);
            valor2 = parseFloat(valorAnterior);
        })
    })
}


botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () =>{

        if(boton.innerHTML == '+'){
            valoresCalc(sumar(valor1,valor2));

        }else if(boton.innerHTML == '-'){
            valoresCalc(restar(valor1,valor2))


        }else if(boton.innerHTML == '*'){
            valoresCalc(multiplicar(valor1,valor2))


        }else if(boton.innerHTML == '%'){
            valoresCalc(dividir(valor1,valor2))
        }
        displayValorAnterior.innerHTML = valorAnterior;
    })
})

// Funciones para borrar
function formatearDisplay(){
    displayValorActual.innerHTML = '';
    displayValorAnterior.innerHTML = '';
}

function borrarTodo(){
    valorActual = []
    valorAnterior = []
    valor1 = []
    valor2 = []
    formatearDisplay();
}
function borrar(){

    let botonRari = botonesNumerRari.innerHTML
    // botonRari.addEventListener('click' , () =>{})
    if(valorActual.length >= 1){
        let value = document.querySelector('#valorActual').innerHTML;
        value = value.substring(0, value.length - 1) 
        valorActual = value
        console.log(`${botonRari} aaa`)

        console.log(`${value} asdasd`)
    }else{
        borrarTodo()
    }
    function filtradoNumero(e){
        var soloEnteros
    }

}

botones()