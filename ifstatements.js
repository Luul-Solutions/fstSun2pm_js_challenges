let arr = [0, 1];

let state = arr[Math.floor(Math.random() * arr.length)];

if (state) {
    // True
    console.log(state);
}

if (state) {
    // True
    console.log(state);
} else if (!state) {
    // False
    console.log(state);
} else {
    throw new Error("Not meant to happen.");
}
