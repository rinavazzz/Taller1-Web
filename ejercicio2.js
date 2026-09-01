function clasificacionNota(params) {

    const { nota } = params;
    if (nota >= 90 && nota <= 100) {
        return "Excelente";
    } else if (nota >= 80 && nota <= 89) {
        return "Muy Bueno";
    } else if (nota >= 70 && nota <= 79) {
        return "Bueno";
    } else if (nota >= 60 && nota <= 69) {
        return "Regular";
    } else if (nota < 60) {
        return "Reprobado";
    } else {
        return "Nota invalida";
    }
}

const nota = Number(prompt("Ingrese una nota entre 0 y 100:"));

const resultado = clasificarNota({
    nota
});

console.log("Nota:", nota);
console.log("Resultado:", resultado);