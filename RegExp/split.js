const Exemplo = "Pedro da Silva Santos";
resultado = Exemplo.split(" ");
// divide uma string em uma array de strings com o separador do parâmetro "espaço em branco" 

const stringExemplo = "Pedro da Silva Santos";
resultado2 = stringExemplo.split("");

const string = "Pedro da Silva Santos";
resultado3 = string.split(" ", 2)
    /*var stringExemplo = "João da Silva Oliveira";
    var resultado = stringExemplo.split("a", 2);*/

const string2 = "pedro@gmail.com";
resultado4 = string2.split("@");

const string3 = " Os 8000 números 345 precisam ser 1 removidos";
resultado5 = string3.split(/\d+/);

const conteudoCSV = "exemplo ; com ; dados ; no ; formato ; csv";
resultado6 = conteudoCSV.split(/\s*;\s*/);

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
console.log(resultado6);