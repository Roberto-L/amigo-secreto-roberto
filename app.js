// Se crea un array para almacenar los nombres
let listaNombres = [];

// Se implementa una función para agregar amigos
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    let nombreConMayuscula = nombrePropio(nombre);

    // Se valida que la entrada no esté vacía
    if (nombre === '') {
        alert('⚠️ NO HAY TEXTO ⚠️\n\nPor favor, inserte un nombre.');
        return;
    } 
    // Se valida que no hayan duplicados (no es parte de indicaciones trello, pero lo considero necesasrio)
    else if (listaNombres.includes(nombreConMayuscula)) {
        alert("⚠️ NOMBRE DUPLICADO ⚠️\n\nIngrese otro nombre o añada un número después del nombre para diferenciar duplicados.");
        document.getElementById('amigo').focus();
    } 
    // Si el nombre es válido, se agrega a la lista y se muestra en pantalla
    else {
        listaNombres.push(nombreConMayuscula);
        console.log(listaNombres);
        imprimirListaAmigos();
        document.getElementById('amigo').focus();

        // Si el botón de sorteo estaba deshabilitado después del sorteo, se habilita nuevamente al añadir más nombres por si olvidaron a alguien y se evita volver a ingresar todos los nombres
        document.getElementById('botonSortear').disabled = false;
    }
    // Se restablece el campo de texto después de añadr el nombre
    limpiarCaja();
}

function imprimirListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');

    // Evita que se duplique el nombre ya ingresado
    listaAmigos.innerHTML = '';

    // Se recorre el array para mostrar los nombres en pantalla
    for (let i = 0; i < listaNombres.length; i++) {
        listaAmigos.innerHTML += `<li>${listaNombres[i]}</li>`;
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}

let ultimoGanador = '';

function sortearAmigo() {
    // Mensaje de alerta si hay menos de dos amigos en la lista para sortear, el challenge pide que no esté vacío, pero para un sorteo deben haber por lo menos 2 nombres
    if (listaNombres.length < 2) {
        alert("Debes ingresar al menos dos amigos para realizar el sorteo.");
        return;
    }

    // Se elige un nombre al azar desde el arreglo
    let amigoSorteado = listaNombres[Math.floor(Math.random() * listaNombres.length)];
    
    // Se guarda el nombre del último ganador
    ultimoGanador = amigoSorteado

    document.getElementById('resultado').innerHTML = `Tu amigo sorteado es: ${amigoSorteado}`;

    // Se borra la lista de amigos luego de realizar el sorteo
    document.getElementById('listaAmigos').innerHTML = '';
    
    // Se deshabilita el botón de sorteo
    document.getElementById('botonSortear').disabled = true;
    
    console.log(amigoSorteado);
}

// Función para reiniciar el juego (implementación externa a lo pedido en trello)
function reiniciar() {
    listaNombres = [];
    document.getElementById('resultado').innerHTML = '';
    // Se muestra el ultimo ganador al reiniciar y en caso no hubo ganador se muestra mensaje por defecto
    if (ultimoGanador) {
        document.getElementById('listaAmigos').innerHTML = `El último ganador fue <strong>${ultimoGanador}</strong>`;
    } else {
        document.getElementById('listaAmigos').innerHTML = 'No hay amigos en la lista';
    }

    document.getElementById('botonSortear').disabled = false;
    limpiarCaja();
}

// Funcionalidad para botón Añadir con tecla Enter
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("botonAñadir").click();
    }
});

// Función para que los nombres se muestren en formato con la maýuscula al inicio
function nombrePropio(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
