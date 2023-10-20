const object = {
    property: "value",
    "More Items": { // You can wrap property names in quotes if they use reserved keywords, spaces or anything else that may trigger an error.
        test: "test"
    }, // Commas have to be to separate properties except on the last one in an object, if you are using JSON you cannot use a comma at the end.
    array: [1, 2, 3],
    object: {
        value1: "fdsfdsdfs",
        value2: false
    },
    string: "k;lj;jkljkljkljkl;",
    number: 340872895,
    function1: function(a,b) {
        return a + b;
    },
    function2: (a,b) => {
        return a - b;
    }
}

const object2 = Object.create(null);
const object3 = new Object();

console.log(object);

console.log(object["More Items", "\n\n\n\n\n\n\n"]); // You can use [] with strings in it to refer to any property, especially useful in for loops as you will see below:


for (let i in object) {
    console.log(`Value of ${i}: ${object[i]}`);
}

var object4 = {
    testvalue: 1
}

console.log("Value(s) in object4: ", `${(() => {
    for (let i in object4) {
        return object4[i];
    }
})()}`); // testValue exists (returns 1 as expected)

delete object4.testvalue;

console.log("Value(s) in object4: ", `${(() => {
    for (let i in object4) {
        return object4[i];
    }
})()}`); // testValue does not exist (returns undefined)

// To see more about objects, see destructuring and classes
