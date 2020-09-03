// formas de criar object: {} , new Object() , Object.create();

const livro = {
    title: 'Clean code',
    author: 'Robert',
    pages: 500,
    language: 'English',
    available: true
};

const livro2 = {};
for (let key in livro) {
    livro2[key] = livro[key];
}
console.log(livro2);

/*const title = 'Clean code';
const author = 'Robert';
const pages = 468;
const language = 'Portugues';
const available = true;

const livro = {
    title,
    author,
    pages,
    language,
    available
};*/
// quando a variavel tem o mesmo nome da chave  que esta sendo atribuido o valor ,coloca a variavel diretamente 


const key1 = 'title';
const key2 = 'author';
const key3 = 'pages';
const key4 = 'language';
const key5 = 'available';

const book = {
    [key1]: 'Clean code2',
    [key2]: 'Robert2',
    [key3]: 469,
    [key4]: 'English2',
    [key5]: true
};

console.log(book);

/*const book2 = {};
book2.title2 = 'Clean code2';
book2.author2 = 'Robert2';
book2.pages2 = 450;
book2.language2 = 'English2';
book2.available2 = false;

console.log(book2);*/