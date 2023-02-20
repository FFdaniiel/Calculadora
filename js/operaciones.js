const suma = document.querySelector('#sumar');
const resta = document.querySelector('#restar');
const multiplica = document.querySelector('#multiplicar');
const divide = document.querySelector('#dividir');
const igual = document.querySelector('#igual');


console.log(suma);
console.log(divide);
console.log(multiplica);
console.log(resta);


function sumaCalculadora(){
    
}



// Al precionar igual suma la cantidad de ambos
suma.addEventListener('click', () =>{
    tipoOperacion = suma;
    if(tipoOperacion !== 'igual'){
        let suma = sumar(valor1,valor2)
        displayValorAnterior.innerHTML = suma;
        console.log(valor1, valor2)
    }else{

    }
})