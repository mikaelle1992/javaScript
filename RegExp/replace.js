const texto = "Java é uma linguagem de programação interpretada estruturada,Juntamente com HTML e CSS, o Java é uma das três principais tecnologias da World Wide Web";
const exemplo = texto.replace("Java", "JavaScript");
//substituiu a primeira palavra do primeiro parâmetro  pelo segundo parâmetro
const exemplo2 = texto.replace(/Java/g, "JavaScript");
// substituiu todas as palavras do primeiro parâmetro pelo segundo parâmetro

console.log(texto);
console.log(exemplo);
console.log(exemplo2);