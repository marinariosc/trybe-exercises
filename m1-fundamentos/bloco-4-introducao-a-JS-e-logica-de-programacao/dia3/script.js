/*
Um fatorial é o resultado da multiplicacao de um numero pelos seus antecessores;

- criar uma variavel com o valor inicial zero, que vai ser utilizada para armazenar os resultados das multiplicacoesç
- criar um loop para passar por todos os numeros de 10 a 1, multiplicando e armazenando o resultado dele multiplicado pelo seu antecessor;
- o contador começará em 10, que é o primeiro número a ser multiplicado e vai decrescendo ate 1;
- 
*/

let factorial = 1

for (let i = 10; i >= 1; i--){
  factorial = (i * factorial)

}

console.log(factorial)

