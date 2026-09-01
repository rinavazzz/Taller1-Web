let nombre = prompt("Nombre del producto:");
let precio = Number(prompt("Pecio del producto:"));
let descuento = Number(prompt("Descuento:"));

let montoDescuento = precio * descuento / 100;

let precioFinal = precio - montoDescuento;

console.log("Producto:", nombre);
console.log("Precio final:", precioFinal);
