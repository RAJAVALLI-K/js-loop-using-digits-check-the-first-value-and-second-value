// first value last value

let value = parseInt(prompt("Enter a the number:"));
let firstValue, 
lastValue = Math.floor(value % 10);
while (value >= 10) {
    value = value / 10;
    firstValue = Math.floor(value);
}
console.log(`The first value: ${firstValue},The last value : ${lastValue}`);