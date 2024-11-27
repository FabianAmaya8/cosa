cambiarCantidad(4)
function cambiarCantidad(cantidad) {
    // Seleccionar el contenedor con la clase "progreso"
    const progresoDiv = document.querySelector('.progreso');
    
    // Limpiar el contenido previo
    progresoDiv.innerHTML = '';

    // Limitar la cantidad al máximo de 5
    cantidad = Math.min(cantidad, 5);

    // Generar los divs con la clase "si"
    for (let i = 0; i < cantidad; i++) {
        const div = document.createElement('div');
        div.className = 'si';
        div.textContent = ``;
        progresoDiv.appendChild(div);
    }
}
