/* 
! Execicio 1
?  Um fatorial é o resultado da multiplicacao de um numero pelos seus antecessores;
TODO:
- criar uma variavel com o valor inicial zero, que vai ser utilizada para armazenar os resultados das multiplicacoes;
TODO
- criar um loop para passar por todos os numeros de 10 a 1, multiplicando e armazenando o resultado dele multiplicado pelo seu antecessor;
TODO
- o contador começará em 10, que é o primeiro número a ser multiplicado e vai decrescendo ate 1;
- 
*/

let factorial = 1

for (let i = 10; i >= 1; i--) {
  factorial = i * factorial
}

console.log(factorial)

// ! Exercicio 2
// ? Desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber'
let reverse = ''
for (let i = word.length - 1; i >= 0; i--) {
  reverse += word[i]
}
console.log(reverse)

// ! Exercicio 3
// ? Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css']

let maiorPalavra = array[0].length
for (let i = 0; i < array.length; i++) {
  if (maiorPalavra < array[i].length) {
    maiorPalavra = array[i]
  }
}

let menorPalavra = array[0].length
for (let i = array.length - 1; i >= 0; i--) {
  if (menorPalavra > array[i].length) {
    menorPalavra = array[i]
  }
}
console.log(maiorPalavra, menorPalavra)

// ! Exercicio 4
// ? Escreva um algoritmo que retorne o maior número primo entre 0 e 50.
