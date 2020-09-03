const rectangle = {
    x: 10,
    y: 3,
    calculaArea: function() {
        return this.x * this.y;
    }
};
console.log(rectangle.calculaArea());

const rectangle2 = {
    x: 10,
    y: 3,
    calculaArea() {
        return this.x * this.y;
    }
};
console.log(rectangle2.calculaArea());

const calcula = function() {
    return this.x * this.y;
};

const rectangle3 = {
    x: 10,
    y: 3,
    calcula
};

console.log(rectangle3.calcula());