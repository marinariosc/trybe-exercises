const books = require('./books')

//TODO 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook() {
  return books.find(book => book.name.length === 26)
}

// ? usei .find pois o enunciado pediu o PRIMEIRO livro.

console.log(getNamedBook(books))
