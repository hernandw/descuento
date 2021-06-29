

const valorConDescuento = (precio, descuento) =>(precio * ( 100 - descuento))/100;

const calcularPrecioConDescuento = () => {
    const precio = document.getElementById('inputPrecio').value;
    const descuento = document.getElementById('inputDescuento').value;
    const precioConDescuento = valorConDescuento(precio, descuento);
    const precioTotal = document.getElementById('valor').innerHTML='El precion con descuento es: '  +precioConDescuento;
    
}
 




