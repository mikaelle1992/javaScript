let regExp = /^mika@hotmal.com$/;
//^ inicia com um determinado caractere
//& terminar com um determinado caractere
let result = regExp.exec("mika@hotmal.com");

console.log(result[0]);
console.log(result.index);
console.log(result.input);

let regExp2 = /^[a-z]+@hotmal.com$/;
//[a-z] qualquer caracter entre a-z 

let result2 = regExp2.exec("biancasantos@hotmal.com");
console.log(result2[0]);

console.log(result2.index);
console.log(result2.input);

let regExp3 = /^\w+@(\w+.\w{2,3})+$/;
//(.\w{2,3})+ para aceitar o com.br 

let result3 = regExp3.exec("miguel@gmail.com");
console.log(result3[0]);
console.log(result3[1]);
console.log(result3.index);
console.log(result3.input);