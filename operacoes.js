const calculaArea = function() {
    return Math.PI * Math.pow(this.radius, 2)

}
const circle = {
    radius: 10,
    calculaArea
};
console.log(calculaArea.call(circle));
const calculaAreaForCircle = calculaArea.bind(circle);