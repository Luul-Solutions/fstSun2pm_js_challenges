//==============================Arithmetic Operators======================================//

var a = 0;
var b = 0;
var c = 2;
var d = 144;
var e = 7;

console.log("Addition: ", c + d); // Addition
console.log("Subtraction: ", c - d); // Subtraction
console.log("Multiplication: ", c * d); // Multiplication
console.log("Division: ", c / d); // Division
console.log("Modulus: ", d % e); // Modulus (Returns the remainder after division)

a++; // Increment (Adds 1)          * Can be written as ++a instead *
b--; // Decrement (Subtracts 1)     * Can be written as --b instead *

console.log(a, b);

//===============================Comparison Operators=====================================//

var f = 10;

if (f > 5) {
    // Greater than
}

if (f < 15) {
    // Less than
}

if (f <= 10) {
    // Less than or equal to
}

if (f >= 10) {
    // Greater than or equal to
}

if (a == b) {
    // Equal to
}

if (a === b) {
    // Equal to in value AND in type
}

if (f != 3) {
    // Not equal to
}

if (f !== 3) {
    // Not equal to in value NOR type
}

//==================================Logical Operators=====================================//

if (true && true) {
    //
}

if (true && false) {
    //
}

if (true || false) {
    //
}

if (!false) {
    //
}

//================================Assignment Operators=====================================//

var g = 10;
var h = 20;
var i = 37;
var j = 343;
var k = 3;
var l = 43243259432;

g += 5; // g will now be 15 as 5 was added to the original value
h -= 11; // h will now be 9 as 11 was subtracted from the original value
i *= 5; // i will now be 185 as 5 was multiplied by the original value
j /= 49; // j will now be 7 as 49 was divided by the original value
k %= 2; // k will now be 1 as 1 is the remainder of 3/2
l = 50; // l has been now assigned a new value which is 50

console.log(g, h, i, j, k, l);

//=====================================Unary Operators=====================================//

var m = false;
var n = true;
var o = '';
var p = 'fdskjhfdskjlfdsjkdfljkdfsjkdfsjlfkdjlkfdljkslflj';
var q = 432890;
var r = {age: 0xFE, iq: null}
var s = Infinity;

console.log(+m, +n, +o, +p, +q, +r, +s);
console.log(-m ,-n, -o, -p, -q, -r, -s);

// + and - are unary operators, which attempt to convert any value into a number (NaN means Not a Number, however if you use the typeof function on it you will get it's a number type)
