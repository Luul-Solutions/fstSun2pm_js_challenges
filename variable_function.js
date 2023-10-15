/*
write a simple Javascript function called 'multiply'
that takes two numbersas parameters and returns the result
to the caller
*/

// function multiply(num1, num2){
//     let result = num1 * num2
//     return result
// }

// let sum = multiply(5,6)
// console.log(sum)


// modify the function above to make it a variable function

let multiply = function (num1, num2){
    let result = num1 * num2
    return result
}
console.log(multiply(5,6))