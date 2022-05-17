const books = require('./books')

// TODO 🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX() {
  return books.every(
    book => book.author.birthYear > 1900 && book.author.birthYear <= 2000
  )
}

console.log(everyoneWasBornOnSecXX(books))
