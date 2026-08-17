function buscarColeccion() {
    const inputElement = document.getElementById('inputBusqueda');
    if (!inputElement) {
        console.log("No se encontró el input de búsqueda");
        return;
    }

    const input = inputElement.value.toLowerCase();
    console.log("Texto ingresado:", input); // Muestra lo que escribes en la consola

    const colecciones = document.querySelectorAll('.seccionColeccion');
    console.log("Colecciones encontradas:", colecciones.length); // Debe ser 2 (Bt21 y Pokemon)

    colecciones.forEach(seccion => {
        const nombreColeccion = seccion.getAttribute('data-coleccion').toLowerCase();
        const textoTitulo = seccion.querySelector('.tituloColeccion h2').textContent.toLowerCase();

        console.log(`Evaluando: ${nombreColeccion} o ${textoTitulo}`);

        if (nombreColeccion.includes(input) || textoTitulo.includes(input)) {
            seccion.style.display = 'flex';
        } else {
            seccion.style.display = 'none';
        }
    });
}