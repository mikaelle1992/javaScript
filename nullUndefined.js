const book = {
    title: 'Clean code',
    author: 'Robert',
    pages: 500,
    language: 'English',
    available: true
};
console.log("title" in book);
// busca uma chave. faz uma consulta

delete book.available;
//deletar um propriedade do objeto
console.log(book);