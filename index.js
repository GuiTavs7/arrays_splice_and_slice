// 1) SLICE => FATIAR

let frutas = ["Banana", "Maçã", "Laranja", "Uva"];

let frutasExtraidas = frutas.slice(1); //printa a partir do primeiro elemento
let frutasExtraidasIntervalo = frutas.slice(1,3); //printa apenas os elementos 1 e 2 

console.log(frutasExtraidas);
console.log(frutasExtraidasIntervalo);

console.log(frutas); //array original permanece igual!

// 2) SPLICE => REMENDAR OU COSTURAR

let frutasExtraidasSplice = frutas.splice(1, 2);

console.log(frutasExtraidasSplice);

console.log(frutas); // array original alterado!

let removeEAdiciona = frutas.splice(1, 2, "Goiaba", "Abacaxi", "Pera"); // adicionando e removendo ao mesmo tempo

console.log(frutas);
console.log(removeEAdiciona);