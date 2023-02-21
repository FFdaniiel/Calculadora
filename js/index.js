const displayValorAnterior = document.getElementById('valorAnterior');
const displayValorActual = document.getElementById('valorActual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesNumerRari = document.querySelector('.numero');
const botonesOperadores = document.querySelectorAll('.operador');


// Valores
valorActual = []
valorAnterior = []
valor1 = 0
valor2 = 0

function valoresCalc(operador,e){
    valorAnterior = valorActual;
    valorActual = [];
    if(isNaN(valor2)){
        // Esto lo coloque para que omita estos valores vacios o no ejecuta
        displayValorActual.innerHTML = operador
    }else if(valor2 == 0){
        displayValorActual.innerHTML = ''
    }
    if(displayValorActual.innerHTML !== '' && displayValorAnterior.innerHTML !== ''){
        valorActual = e
        valorAnterior = []
        valor2 = 0
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
            valoresCalc('+',sumar(valor1,valor2));

        }else if(boton.innerHTML == '-'){
            valoresCalc('-',restar(valor1,valor2))


        }else if(boton.innerHTML == '*'){
            valoresCalc('*',multiplicar(valor1,valor2))


        }else if(boton.innerHTML == '%'){
            valoresCalc('/',dividir(valor1,valor2))

        }else if(boton.innerHTML == '='){
            displayValorActual.innerHTML = 'A'
            valorActual = []
            valorAnterior = []
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
    if(valorActual.length >= 0){
        let value = document.querySelector('#valorActual').innerHTML;
        value = value.substring(0, value.length - 1) 
        valorActual = value
    }else if(displayValorActual.innerHTML !== ''){
        valorActual = displayValorActual.innerHTML.substring(0, displayValorActual.innerHTML - 1)
    }
    displayValorActual.innerHTML = valorActual

}

botones()