const javascript = Object.create({});
Object.assign(javascript, {
    name: "JavaScript",
    year: 1995,
    paradigm: "00 and Functional"
}, {
    author: "Brendan Eich",
    influencedBy: "Java, scheme and Self"
}, {
    pages: 892
});
console.log(javascript);
//Object.assign(destino, ...origens)
const javascript2 = {
    name: "JavaScript",
    year: 1995,
    paradigm: "00 and Functional"
}
console.log(Object.keys(javascript2));
//obj.keys ,percore as chaves do object , assim manipulando os valores dos propriedades
console.log(Object.values(javascript2));
// obj.values, retorna os valores da propriedades do object
console.log(Object.entries(javascript2));
// obj.entries , retorna as propriedades  do object em pares de chave e valor
const javascript3 = {};
Object.defineProperty(javascript3, "name", {
    enumarable: true,
    //enumarable , permite que seja enumerada(apareça no console.log), se nao só aparece (jacascript3.name)
    value: "javaScript !",
    // value define um valor 
    writable: true
        // writable ,permite que sua valor seja modificada
});
console.log(javascript3.name);