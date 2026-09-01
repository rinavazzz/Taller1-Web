class Producto {
    constructor(nombre, precio, stock){
        this.precio = precio
        this.nombre = nombre
        this.stock = stock
    }
}

const Producto1 = new Producto("Mounster Blanco", 2.00, 1048);
const Producto2 = new Producto("Dona Limon", 1.44, 67000);

console.log(`Producto: ${Producto1.nombre}\nPrecio: $${Producto1.precio}\nStock: ${Producto1.stock} unidades`);
console.log(`Producto: ${Producto2.nombre}\nPrecio: $${Producto2.precio}\nStock: ${Producto2.stock} unidades`);