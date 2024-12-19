// script.js

// Lista de los nombres y sus checkboxes
const nombres = [
    { nombre: 'Yucra', id: 'nombre1' },
    { nombre: 'Maricielo', id: 'nombre2' },
    { nombre: 'Vega', id: 'nombre3' },
    { nombre: 'Paula', id: 'nombre4' },
    { nombre: 'Santiago', id: 'nombre5' },
    { nombre: 'Sayuri', id: 'nombre6' }
];

const btnRuleta = document.getElementById('btn-ruleta');
const nombreSeleccionado = document.getElementById('nombre-seleccionado');

// Función para seleccionar un nombre aleatorio
function seleccionarNombre() {
    // Filtrar nombres que no han sido seleccionados
    const nombresDisponibles = nombres.filter(n => !document.getElementById(n.id).disabled);

    if (nombresDisponibles.length === 0) {
        alert('¡Todos los nombres ya han sido seleccionados!');
        return;
    }

    // Elegir un nombre aleatorio de los disponibles
    const nombreAleatorio = nombresDisponibles[Math.floor(Math.random() * nombresDisponibles.length)];

    // Mostrar el nombre seleccionado
    nombreSeleccionado.textContent = nombreAleatorio.nombre;

    // Deshabilitar el checkbox del nombre seleccionado
    document.getElementById(nombreAleatorio.id).disabled = true;
}

// Evento para girar la ruleta
btnRuleta.addEventListener('click', seleccionarNombre);
