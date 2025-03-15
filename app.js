// Se crea un arreglo vacío para almacenar los nombres de los amigos
let listaNombres = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    let nombreConMayuscula = nombrePropio(nombre);

    // Si el campo está en blanco, mensaje de alerta
    if (nombre === '') {
        alert('No has ingresado un nombre.');
        return;
    } 
    // Si el nombre ya ha sido ingresado, mensaje de alerta
    else if (listaNombres.includes(nombreConMayuscula)) {
        alert("Este nombre ya ha sido ingresado.");
        document.getElementById('amigo').focus();
    } 
    // Si el nombre es aceptable, se agrega a la lista y se imprime en pantalla
    else {
        listaNombres.push(nombreConMayuscula);
        console.log(listaNombres);
        imprimirListaAmigos();
        document.getElementById('amigo').focus();
    }

    limpiarCaja();
}

function imprimirListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');

    // Evita que se duplique el nombre ya ingresado
    listaAmigos.innerHTML = '';

    // Se recorre el arreglo para imprimir los nombres en pantalla
    for (let i = 0; i < listaNombres.length; i++) {
        listaAmigos.innerHTML += `<li>${listaNombres[i]}</li>`;
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}

function sortearAmigo() {
    // Mensaje de alerta si hay menos de dos amigos en la lista para sortear
    if (listaNombres.length < 2) {
        alert("Debes ingresar al menos dos amigos para realizar el sorteo.");
        return;
    }

    // Se elige un nombre al azar desde el arreglo
    let amigoSorteado = listaNombres[Math.floor(Math.random() * listaNombres.length)];
    
    document.getElementById('resultado').innerHTML = `Tu amigo sorteado es: ${amigoSorteado}`;

    // Borra la lista de amigos luego de realizar el sorteo
    document.getElementById('listaAmigos').innerHTML = '';
    
    // Deshabilita el botón de sorteo
    document.getElementById('botonSortear').disabled = true;
    
    console.log(amigoSorteado);
}

// Función para reiniciar el juego
function reiniciar() {
    listaNombres = [];
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('listaAmigos').innerHTML = 'No hay amigos en la lista';
    document.getElementById('botonSortear').disabled = false;
    limpiarCaja();
}

// Permitir que puedan agregar amigos con la tecla 'Enter'
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("botonAñadir").click();
    }
});

// Cambiar a mayúscula la primera letra y a minúscula el resto de las letras de cada nombre ingresado
function nombrePropio(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
