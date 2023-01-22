//1. Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
const a_string = 'ahb acb aeb aeeb adcb axeb';
const a_result = /a[hce]b/g;
console.log(a_string.match(a_result));

//2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const string = "2 + 3 223 2223";
console.log(string);
const result = /2 [+] 3/g;
console.log(string.match(result));

//3. Get the day, month and year of the current date and output it to the console separately
let date = new Date;
const today = new Date();

const year = today.getFullYear();
console.log(year);

const month = today.getMonth();
console.log(month + 1);

const day = today.getDate();
console.log(day);