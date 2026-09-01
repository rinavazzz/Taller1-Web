let numero1 = Number(prompt("Ingrese el primer número:"));
let numero2 = Number(prompt("Ingrese el segundo número:"));

if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Ingrese números válidos.");
} else {
    let opcion = Number(prompt(
        "1. Suma\n" +
        "2. Resta\n" +
        "3. Multiplicación\n" +
        "4. División"
    ));
    switch (opcion) {
        case 1:
            console.log("Resultado:", numero1 + numero2);
            break;
        case 2:
            console.log("Resultado:", numero1 - numero2);
            break;
        case 3:
            console.log("Resultado:", numero1 * numero2);
            break;
        case 4:
            if (numero2 == 0)
                console.log("No se puede dividir entre cero.");
            else
                console.log("Resultado:", numero1 / numero2);
            break;

        default:
            console.log("Opción no válida.");
    }
}

