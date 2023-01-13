//1. Create a car object, add a color property to it with the value equals 'black'
const car = {
    name: "Audi",
    trunk: "sedan"
}
car.colour = 'black';
console.log(car);

// 2. Change the color property of the car object to 'green'
const carGreen = {
    name: "Audi",
    trunk: 'sedan',
    colour: 'black',

}
carGreen.colour = 'green';
console.log(carGreen);

// 3. Add the power property to the car object, which is a function and displays the engine power to the console
const carPower = {
    name: "Audi",
    trunk: "sedan",
    colour: 'green',
    power: 4,
    getPower() {
        this.power++
    }
}
carPower.getPower();
carPower.getPower();
console.log(carPower);

// 4. Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
const fruits = function(pears, apples) {
    return pears + apples;
}

console.log(fruits(10, 5));

// 5. Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
let nameTerminal = function(name) {
    if (name === "David") {
        console.log(`Hello, ${name}!`)
    } else(console.log('There is no such name'))
}
nameTerminal('David');


//  6.   Write a function for calculating the type of argument and type output to the console
let argType = function(arg) {
    console.log(typeof arg);
}
argType(true);

// 7.  Write a function that determines whether a number is prime or not

const number = parseInt(prompt("Enter a positive number: "));
let isNumberPrime = true;
if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isNumberPrime = false;
            break;
        }
    }
    if (isNumberPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
} else if (number === 1) {
    console.log("1 is considered neither prime nor composite number.");
} else {
    console.log("The number is not a prime number.");
}