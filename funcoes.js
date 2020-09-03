function sum(a, b) {
    return a + b;
    // funcao declaration (  ela é pre carregada no contexto de execução)
}

console.log(sum(2, 3));

const sum2 = function(a, b) {
    return a + b;
    // funçao expression 
};
console.log(sum2(2, 3))

const subtract = function(a, b) {
    return a - b;
};

const calculator = function(fn) {
    return function(a, b) {
        return fn(a, b);
    };
};

console.log(calculator(sum)(2, 4));
console.log(calculator(subtract)(2, 4));

const sum3 = function() {
    console.log(arguments);
}
sum3(1, 2, 3, 4, 5);

const sum4 = function() {
    let total = 0;
    for (let argument in arguments) {
        // in quando está interando com um objeto 
        total += arguments[argument];
    }
    return total;
};
const sum5 = function(...numbers) {
    let valor = 0;
    for (let number of numbers) {
        valor += number;
    }
    return valor;
}
console.log(sum4(1, 2, 3, 4));
console.log(sum5(1, 2, 3, 4));