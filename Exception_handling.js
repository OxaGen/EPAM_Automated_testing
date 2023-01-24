//In a try catch construction, wrap the code: console.log (a), let a = 3. 
//And display an error - ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'
function printA(a) {
    try {
        console.log(`let must be declared`);
        if (a == 0) {
            console.log(`cannot be divided by zero`);
        }
    } catch (err) {
        console.log(printA(a));
    }
}
printA(3);