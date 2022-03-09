let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorValor = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maiorValor) {
    maiorValor = numbers[i]
  }
}

console.log(maiorValor)
  
  // TESTE DE MESA
  // array = array4
  // maiorValor = -5
  
  // contador | maiorValor | array[i]      | condicional | maiorValor
  // i = 0    | -5         | array[0] = -5 | false       | -5
  // i = 1    | -5         | array[1] = -4 | true        | -4
  // i = 2    | -4         | array[2] = -3 | true        | -3
  // i = 3    | -3         | array[3] = -2 | true        | -2
  // i = 4    | -2         | array[4] = -1 | true        | -1
  // i = 5
  // maiorValor = -1