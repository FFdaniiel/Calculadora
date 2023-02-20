const displayValorAnterior = document.getElementById('valorAnterior');
const displayValorActual = document.getElementById('valorActual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');


// Valores
valorActual = []
valorAnterior = []
valor1 = []
valor2 = []
tipoOperacion = undefined;
signos = {
    suma: '+',
    dividir: '%',
    multiplicar: '*',
    restar: '-', 
}


function formatearDisplay(){
    displayValorActual.innerHTML = '';
    displayValorAnterior.innerHTML = valorAnterior;
}

function valoresCalc(e){
    if(isNaN(valor2)){
        displayValorActual.innerHTML = '';
    }else if(valor2 !== '' && valor2 !== ''){
        valorAnterior = Math.round(e)

    }
}

function botones(){
    botonesNumeros.forEach(boton => {
        boton.addEventListener('click', () =>{
            valorActual = valorActual + parseInt(boton.innerHTML);
            displayValorActual.innerHTML = valorActual
            valor1 = parseInt(valorActual);
            valor2 = parseInt(valorAnterior);
            console.log(`el valor actual es ${valorActual} y el anterior es ${valorAnterior}`)
            
        })
    })
}


botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () =>{
        valorAnterior = valorActual;
        valorActual = [];

        if(boton.innerHTML == '+'){
    
            // calculadoraSumar();
            valoresCalc(sumar(valor1,valor2));
            
        }else if(boton.innerHTML == '-'){
            // calculadoraRestar();
            valoresCalc(restar(valor1,valor2))


        }else if(boton.innerHTML == '*'){
            // calculadoraMultiplicar();
            valoresCalc(multiplicar(valor1,valor2))


        }else if(boton.innerHTML == '%'){
            // calculadoraDividir();
            valoresCalc(dividir(valor1,valor2))

        }
        displayValorAnterior.innerHTML = valorAnterior;
    })
})
botones()



// console.log(signos(displayValorActual,displayValorAnterior));
console.log(displayValorAnterior)
console.log(sumar(displayValorActual, displayValorAnterior))