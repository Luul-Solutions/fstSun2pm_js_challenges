var a = 0;
let b = 1;
const c = 2;

// Changing a and b will work, but not c as it is constant (permanent)

console.log(a, b, c);

while (a < 1) {
    console.log("This will only run once.");
    var testVar = 10;
    let testLet = 20;
    const letConst = 30;
    a++;
}

try {
    console.log(testVar); // testVar will be 10 because var is not limited by regular blocks
    console.log(testLet); // testLet will not be valid and will produce an error because the way it was declared is limited by regular blocks
    console.log(testConst); // testConst will not be valid and will produce an error because the way it was declared is limited by regular blocks
} catch (e) {
    // console.log(e);
}

(() => {
    // Function block, NOT REGULAR
    var testVar2 = 1;
    let testLet2 = 2;
    const testConst2 = 3;
});

try {
    console.log(testVar2, testLet2, testConst2); // NONE OF THESE WILL WORK, VAR IS LIMITED BY FUNCTION BLOCKS AND LET AND CONST ARE LIMITED BY ALL BLOCKS
} catch (e) {
    // console.log(e);
}
