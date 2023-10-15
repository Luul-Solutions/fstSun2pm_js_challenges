const addition = function(a ,b) {
    console.log(a + b);
}

const subtraction = (a, b) => {
    console.log(a - b);
}

function multiplication(a, b) {
    console.log(a * b);
}

addition(1, 2);
subtraction(1, 2);
multiplication(1, 2);

((a, b) => {
    // Division IIFE
    console.log(a / b);
})(1, 2);
