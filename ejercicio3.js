function convertir(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

let celsius = Number(prompt("Ingrese la temperatura en grados"));

let fahrenheit = convertir(celsius);

console.log(celsius + " C = " + fahrenheit + " F");