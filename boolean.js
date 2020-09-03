let cond = new Boolean(false);

if (cond) {
    console.log("true");
} else {
    console.log("false");
};

function generateSerial(max) {
    return Math.floor(Math.random() * max);
};

console.log(generateSerial(10));
console.log(generateSerial(100));
console.log(generateSerial(1000));

console.log((10) ? 'good' : 'bad');
console.log((0) ? 'good' : 'bad');