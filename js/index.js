const displayValorAnterior = document.getElementById('valorAnterior');
const displayValorActual = document.getElementById('valorActual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

// const display = new Display(displayValorAnterior, displayValorActual);

// botonesNumeros.forEach(boton => {
//     boton.addEventListener('click', () => 
//     display.agregarNumero(boton.innerHTML));
// });

// botonesOperadores.forEach(boton => {
//     boton.addEventListener('click', () =>
//      display.computar(boton.value))
// });

// funciones matematicas

function sumar(num1, num2){
        return  num1 + num2
}
function restar(num1, num2){
    return  num1 - num2

}
function multiplicar(num1, num2){
    return  num1 * num2

}
function dividir(num1, num2){
    return  num1 / num2

}
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

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () =>{
        valorActual = valorActual + parseInt(boton.innerHTML);
        displayValorActual.innerHTML = valorActual
        valor1 = parseInt(valorActual);
        valor2 = parseInt(valorAnterior);
        console.log(`el valor actual es ${valorActual} y el anterior es ${valorAnterior}`)
    })
})

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () =>{
        valorAnterior = valorActual;
        valorActual = [];
        formatearDisplay();
    })
})



// console.log(signos(displayValorActual,displayValorAnterior));
console.log(displayValorAnterior)
console.log(sumar(2,2))
console.log(sumar(displayValorActual, displayValorAnterior))