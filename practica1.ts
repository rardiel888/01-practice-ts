let framework: string = "Angular";
const anioLanzamiento: number = 2016;


console.log("Nombre de la variable 'framework':", framework);
console.log("Nombre de la variable 'anioLanzamiento':", anioLanzamiento);


framework = "React";
console.log("La variable 'framework' ha cambiado a:", framework);

// 3.1 Declarar 3 variables con tipo string, number y boolean. Mostrar en consola.
let nombreEstudiante: string = "Juan Pérez";
let edadEstudiante: number = 25;
let estaActivo: boolean = true;

console.log(`\n--- Parte 3.1 ---`);
console.log("Nombre:", nombreEstudiante);
console.log("Edad:", edadEstudiante);
console.log("Estado Activo:", estaActivo);

// 3.2 Crear una función tipada donde reciba un arreglo de 10 números y devuelva su promedio por consola.
/**
 * @param numeros Un arreglo de 10 números.
 * @returns El promedio de los números.
 */
function calcularPromedio(numeros: number[]): number {
    if (numeros.length !== 10) {
        throw new Error("El arreglo debe contener exactamente 10 números.");
    }
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / numeros.length;
}

const numerosParaPromedio: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const promedio = calcularPromedio(numerosParaPromedio);

console.log(`\n--- Parte 3.2 ---`);
console.log("El promedio de los números es:", promedio);

// 3.3 Crea una función donde verifique si existe un número introducido por el usuario y diga si 'existe'. Verifique el uso del prompt.
/**
 * @param arregloNumeros El arreglo donde se buscará el número.
 * @returns Un mensaje indicando si el número existe o no.
 */
function verificarNumeroEnArreglo(arregloNumeros: number[]): void {
    const entrada = prompt("Introduce un número para verificar si existe:");
    if (entrada === null || entrada.trim() === "") {
        console.log("Entrada cancelada o vacía.");
        return;
    }
    const numeroBuscado = Number(entrada);
    
    // Verificar si la entrada es un número válido
    if (isNaN(numeroBuscado)) {
        console.log("Por favor, introduce un número válido.");
        return;
    }

    const existe = arregloNumeros.includes(numeroBuscado);
    
    console.log(`\n--- Parte 3.3 ---`);
    if (existe) {
        console.log(`El número ${numeroBuscado} sí existe en el arreglo.`);
    } else {
        console.log(`El número ${numeroBuscado} no existe en el arreglo.`);
    }
}
