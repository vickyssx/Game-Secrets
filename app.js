//es de ambito o alcance de la variable 
// en este caso es de amito o alcance de bloque
let numeroSecreto = 0;
let  intentos = 0;
let listaNumeroSorteados = [];
let numeriMaximo = 10;

// la funcion puede recibir parametros para que sea genérica y usar n veces
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // Usuario no acertó
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor.');

        }else{
            asignarTextoElemento('p', 'El número secreto es mayor.');

        }
        intentos++;
        limpiarCaja();

    }
    return;  
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    //no hace falta crear variable de nrosecreto aqui
    let numeroGenerado = Math.floor(Math.random()*numeriMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeriMaximo) {
        asignarTextoElemento('p', 'Ya se asignaron todos los números posibles')
    }else{
        //si el nro generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) { //verif si incluye el nro en la lista
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado); //empuja el valor nuevo al final 
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeriMaximo}`);
    // genera nro aleatorio
    numeroSecreto = generarNumeroSecreto();
    // inicializar el nro intentos
    intentos = 1;

}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    // indicar mensaje de inicio 
    condicionesIniciales();
    // deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
// hoisting -> hace el movimiento de las variables y las
// funciones vayan al inicio 
condicionesIniciales();
