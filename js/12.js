// OBJETOS

const producto = {
    nombreProducto : 'monitor de 20"',
    precio : 300,
    disponible : true
};

Object.freeze(producto);

producto.imagen = 'imagen.jpg';

console.log(producto);