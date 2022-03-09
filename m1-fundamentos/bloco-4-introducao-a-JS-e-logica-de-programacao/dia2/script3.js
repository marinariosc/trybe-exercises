let soma = 0;
let elementos = 0;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}

for (let i = 0; i < numbers.length; i++) {
  elementos++
}

let mediaAritmetica = (soma / elementos);

console.log(mediaAritmetica)

// ***** seria mais inteligente:  ******

// let soma = 0;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 0; i < numbers.length; i++) {
//   soma += numbers[i];
// }

// let mediaAritmetica = soma / numbers.length


