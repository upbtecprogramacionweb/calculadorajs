let resultado = document.getElementById('resultado')
let arrayAcciones = document.querySelectorAll('button')
let valorResultado = 0
let textResultado=''

arrayAcciones.forEach((boton) => {
    boton.addEventListener('click', function(e){
        let datoActual = e.target.textContent
        let resultadoParcial=0;
        if(!isNaN(datoActual)){
            textResultado = textResultado + datoActual
            valorResultado = parseFloat(textResultado)
            resultado.value = textResultado
        }else if(datoActual==='+'){
            textResultado = textResultado + datoActual            
            resultado.value = textResultado
        }else if(datoActual==='='){
            resultadoParcial = eval(textResultado)
            resultado.value = resultadoParcial
            textResultado = resultadoParcial
        }
        
    });
})
