const books = require('./books')

//TODO 🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947. Dica: use a função find.

function authorBornIn1947() {
  const findAuthor = books.find(book => qqCoisa.author.birthYear === 1947)
  return findAuthor.author.name
}

// ? linha 68 => criei uma constante que localiza no objeto books, utilizando .find, o ano de nascimento do autor do livro que satisfaz a condicao
// ? linha 69 => retorna o nome do autor que satisfaz a condicao do find em findAuthor
