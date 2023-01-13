//1. Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
const movies = ['Hallooween', 'Scream', 'Ring', 'A Nightmare on Elm Street', 'Friday, 13'];
for (let el of movies) {
    console.log(el);
};

//2. Given an array of car manufacturers, convert the array to a string and back to an array
const auto = ['Audi', 'Mersedes', 'Renault', 'Volkswagen', 'Ford'];
let autoString = auto.toString();
console.log(autoString);
const autoArray = autoString.split(" ");
console.log(autoArray);

//3.Given an array of the names of your friends, add the words hello to each element of the array
const friends = ['Andrew', 'Alexander', 'Kate', 'Tom', 'Ksenya'];
for (let name of friends) {
    console.log('Hello, ' + name + '!')
};

//4. Convert numeric array to Boolean


//5. Sort the array [1,6,7,8,3,4,5,6] in descending order
const numbersArray = [1, 6, 7, 8, 3, 4, 5, 6];
numbersArray.sort();
numbersArray.reverse();
console.log(numbersArray);

//6. Filter array [1,6,7,8,3,4,5,6] by value> 3
const arrayNumbers = [1, 6, 7, 8, 3, 4, 5, 6];
const arrayFilterNumber = arrayNumbers.filter(currentNumber => currentNumber > 3);
console.log(arrayFilterNumber);

//7. Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number//
const numbers_indexArray = ['Alice', 'Jack', 'John', 'Jane', 'Bob'];
numbers_indexArray.forEach((name, index) => {
    console.log('Index: ' + index + ',' + ' name: ' + name)
});


//8. Implement a loop that will print the number 'a' until it is less than 10
let a = "a";
let i = 0;
do {
    i++;
    console.log(a);
} while (i < 9);


//9. Implement a loop that prints prime numbers to the console
const firstNumber = 1;
const lastNumber = parseInt(prompt('Enter the number to which you want to output prime numbers: '));

console.log(`The prime numbers between ${firstNumber} and ${lastNumber} are:`);

for (let i = firstNumber; i <= lastNumber; i++) {
    let count = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            count = 1;
            break;
        }
    }
    if (i > 1 && count == 0) {
        console.log(i);
    }
};

//10. Implement a loop that prints odd numbers to the console
for (i = 1; i <= 70; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}