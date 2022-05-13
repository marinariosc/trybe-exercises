//* => PARTE 1

// ! Exercicio 1

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)'
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
    console.log(ifScope)
  } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`
    console.log(elseScope)
  }
}

testingScope(true)

// ! Exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2]

console.log(
  `Os números ${oddsAndEvens.sort(
    (a, b) => a - b
  )} se encontram ordenados de forma crescente!`
)

//* => PARTE 2

//! Exercicio 1 Crie uma função que receba um número e retorne seu fatorial.

const factorial = number => {
  let result = 1

  for (let i = 2; i <= number; i++) {
    result *= i
  }
  return result
}

console.log(`O resultado do fatorial do número 4 é ${factorial(4)}.`)

//! Exercicio 2 Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = phrase => {
  let wordArray = phrase.split(' ')
  let longestLength = 0
  let result = ''

  for (let word of wordArray) {
    if (word.length > longestLength) {
      longestLength = word.length
      result = word
    }
  }

  return result
}

console.log(
  `A maior palavra da frase é: "${longestWord(
    'Amanda está me esperando para jogar fortnite'
  )}"!`
)
