// llamar
const displayValorAnterior = document.getElementById('valorAnterior');
const displayValorActual = document.getElementById('valorActual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
// llamado a  operaciones
const sumando = document.querySelector('#suma')
const restando = document.querySelector('#resta')
const multiplicando = document.querySelector('#multiplicar')
const dividiendo = document.querySelector('#dividir')

// Guarda valores 
valorActual = []
valorAnterior = []
valor1 = 
valor2 = 
valorTotal = 0;
operador = ''


function botones(){
    botonesNumeros.forEach(boton => {
        boton.addEventListener('click', () =>{
            valorActual = valorActual + boton.innerHTML;
            displayValorActual.innerHTML = valorActual;
            if(valor1 !== 0){
                valorAnterior = valorAnterior + boton.innerHTML;
                valor2 = parseFloat(valorAnterior)

            }else if(valorTotal !== 0){
                valorActual = valorActual + boton.innerHTML;
                displayValorActual.innerHTML = valorActual;
            }
        })
    })
}

botonesOperadores.forEach(operadores =>{
    operadores.addEventListener('click', () =>{
        if(operadores.innerHTML !== '='){
            valor1 = parseFloat(valorActual);
            valoresCalc()
            displayValorAnterior.innerHTML = `${valor1}${operadores.innerHTML}${valorActual}`
            displayValorActual.innerHTML = valorActual;
            
            // Guardo el valor de la operacion
            operador = operadores.innerHTML;
        }else{
            displayValorAnterior.innerHTML = ''
            if(valor1 !== 0 && valor2 !== 0){
                valorTotal = operacionesMath(operador,valor1,valor2)
                displayValorActual.innerHTML = valorTotal
                valorActual = valorTotal
                valor1 = valorTotal

            }if(valorTotal !== 0){
                displayValorAnterior.innerHTML = ''
                displayValorActual.innerHTML = valorTotal
                valor1 = valorTotal;
            }
        }
    })
  
})

function valoresCalc(){
    valorActual = []
    valorAnterior=[]
}
// Borrar
function formatearDisplay(){
    displayValorActual.innerHTML = '';
    displayValorAnterior.innerHTML = '';
}
function borrarTodo(){
    valorActual = []
    valorAnterior = []
    valor1 = 0
    valor2 = 0
    valorTotal = 0;
    operador = ''
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

