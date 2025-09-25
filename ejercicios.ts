//1
function duplicarArray(arr: number[]): number[] {
  return arr.map(num => num * 2);
}
console.log("1:", duplicarArray([1, 2, 3]));

//2
const obtenerPares = (arr: number[]): number[] => {
  return arr.filter(num => num % 2 === 0);
};
console.log("2:", obtenerPares([1, 2, 3, 4]));

//3
function sumaTotal(arr: number[]): number {
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log("3:", sumaTotal([1, 2, 3, 4]));

//4
const imprimirConIndice = (arr: string[]): void => {
  arr.forEach((val, i) => {
    console.log(`Índice: ${i}, Valor: ${val}`);
  });
};
console.log("4:");
imprimirConIndice(["a", "b", "c"]);

//5
function encontrarMayor50(arr: number[]): number | undefined {
  return arr.find(num => num > 50);
}
console.log("5:", encontrarMayor50([10, 25, 60, 45]));

//6
const hayNegativo = (arr: number[]): boolean => {
  return arr.some(num => num < 0);
};
console.log("6:", hayNegativo([3, -2, 7]));

//7
function todosMayores10(arr: number[]): boolean {
  return arr.every(num => num > 10);
}
console.log("7:", todosMayores10([11, 20, 30]));

//8
const existeValor = (arr: number[], valor: number): boolean => {
  return arr.includes(valor);
};
console.log("8:", existeValor([1, 2, 3], 2));

//9
function ordenarStrings(arr: string[]): string[] {
  return arr.sort();
}
console.log("9:", ordenarStrings(["uva", "manzana", "pera"]));

// 10
const invertirArray = (arr: number[]): number[] => {
  return arr.reverse();
};
console.log("10:", invertirArray([1, 2, 3]));

// 11
function primerosCinco(arr: number[]): number[] {
  return arr.slice(0, 5);
}
console.log("11:", primerosCinco([10, 20, 30, 40, 50, 60, 70]));

// 12
const eliminarTercero = (arr: number[]): number[] => {
  arr.splice(2, 1);
  return arr;
};
console.log("12:", eliminarTercero([1, 2, 3, 4, 5]));

// 13
function unirArrays(a: number[], b: number[]): number[] {
  return a.concat(b);
}
console.log("13:", unirArrays([1, 2, 3], [4, 5, 6]));

// 14
const aplanar = (arr: any[][]): any[] => {
  return arr.flat();
};
console.log("14:", aplanar([[1, 2], [3, 4], [5]]));

// 15
function duplicarYExpandir(arr: number[]): number[] {
  return arr.flatMap(num => [num, num * 2]);
}
console.log("15:", duplicarYExpandir([1, 2, 3]));


//16
const llenarCeros = (): number[] => {
  return new Array(5).fill(0);
};
console.log("16:", llenarCeros());

//17
function posicionElemento(arr: any[], valor: any): number {
  return arr.indexOf(valor);
}
console.log("17:", posicionElemento([10, 20, 30, 40], 30));

//18
const ultimaPosicion = (arr: any[], valor: any): number => {
  return arr.lastIndexOf(valor);
};
console.log("18:", ultimaPosicion([1, 2, 3, 2, 4], 2));

//19
function unirConGuiones(arr: string[]): string {
  return arr.join("-");
}
console.log("19:", unirConGuiones(["hola", "mundo", "typescript"]));

//20
const stringAArray = (str: string): string[] => {
  return Array.from(str);
};
console.log("20:", stringAArray("TypeScript"));

//21
function primerCaracter(str: string): string {
  return str.charAt(0);
}
console.log("21:", primerCaracter("TypeScript"));

//22
const contienePalabra = (texto: string, palabra: string): boolean => {
  return texto.includes(palabra);
};
console.log("22:", contienePalabra("Aprender TypeScript es divertido", "TypeScript"));

//23
function empiezaConHola(str: string): boolean {
  return str.startsWith("Hola");
}
console.log("23:", empiezaConHola("Hola mundo"));

//24
const terminaConCom = (str: string): boolean => {
  return str.endsWith(".com");
};
console.log("24:", terminaConCom("www.ejemplo.com"));

//25
function aMayusculasTexto(str: string): string {
  return str.toUpperCase();
}
console.log("25:", aMayusculasTexto("typescript"));

//26
const aMinusculasTexto = (str: string): string => {
  return str.toLowerCase();
};
console.log("26:", aMinusculasTexto("TYPEscript"));

//27
function eliminarEspacios(str: string): string {
  return str.trim();
}
console.log("27:", eliminarEspacios("   Hola mundo   "));

//28
const repetirPalabra = (palabra: string): string => {
  return palabra.repeat(3);
};
console.log("28:", repetirPalabra("Hola"));

//29
function reemplazarPalabra(texto: string, palabraVieja: string, palabraNueva: string): string {
  return texto.replace(palabraVieja, palabraNueva);
}
console.log("29:", reemplazarPalabra("Hola mundo", "mundo", "TypeScript"));

//30
const dividirPalabras = (oracion: string): string[] => {
  return oracion.split(" ");
};
console.log("30:", dividirPalabras("Aprender TypeScript es divertido"));

//31
function primerosCincoCaracteres(str: string): string {
  return str.substring(0, 5);
}
console.log("31:", primerosCincoCaracteres("TypeScript"));

//32
const ultimosCuatro = (str: string): string => {
  return str.slice(-4);
};
console.log("32:", ultimosCuatro("typescript"));

//33
function posicionPalabra(str: string, palabra: string): number {
  return str.indexOf(palabra);
}
console.log("33:", posicionPalabra("Aprender TypeScript es divertido", "TypeScript"));

//34
const ultimaAparicion = (str: string, caracter: string): number => {
  return str.lastIndexOf(caracter);
};
console.log("34:", ultimaAparicion("abracadabra", "a"));

//35
function encontrarVocales(str: string): string[] | null {
  return str.match(/[aeiouAEIOU]/g);
}
console.log("35:", encontrarVocales("TypeScript es divertido"));

//36
const primeraVocal = (str: string): number => {
  return str.search(/[aeiouAEIOU]/);
};
console.log("36:", primeraVocal("TypeScript"));

//37 
function rellenarCeros(num: number): string {
  return num.toString().padStart(5, "0");
}
console.log("37:", rellenarCeros(42));

//38
const rellenarAsteriscos = (str: string): string => {
  return str.padEnd(10, "*");
};
console.log("38:", rellenarAsteriscos("Hola"));

//39
function compararStrings(a: string, b: string): number {
  return a.localeCompare(b);
}
console.log("39:", compararStrings("apple", "banana"));

//40
const charDesdeCodigo = (codigo: number): string => {
  return String.fromCharCode(codigo);
};
console.log("40:", charDesdeCodigo(65)); // A

//41
function numeroMayor(...numeros: number[]): number {
  return Math.max(...numeros);
}
console.log("41:", numeroMayor(10, 25, 7, 50));

//42
const numeroMenor = (...numeros: number[]): number => {
  return Math.min(...numeros);
};
console.log("42:", numeroMenor(10, 25, 7, 50));
