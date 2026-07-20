
    const carrusel = document.querySelector('#contenedorImagenes');
    let isDown = false;
    let startX;
    let scrollLeft;

    carrusel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carrusel.offsetLeft;
        scrollLeft = carrusel.scrollLeft;
    });

    carrusel.addEventListener('mouseleave', () => { isDown = false; });
    carrusel.addEventListener('mouseup', () => { isDown = false; });
    carrusel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carrusel.offsetLeft;
        const walk = (x - startX) * 2; 
        carrusel.scrollLeft = scrollLeft - walk;
    });

    function mover(direccion) {
    const carrusel = document.querySelector('#contenedorImagenes');
    const anchoItem = carrusel.offsetWidth;
    carrusel.scrollBy({ left: direccion * anchoItem, behavior: 'smooth' });
}
