const books = require('./books')

// TODO 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
  return books.sort((book1, book2) => book2.releaseYear - book1.releaseYear)
}
