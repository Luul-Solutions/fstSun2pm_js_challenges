let arr = [0, 1];

let state = arr[Math.floor(Math.random() * arr.length)];

switch (state) {
    case 1:
        console.log(state);
        // True
        break;
    case 0:
        console.log(state);
        // False
        break;
    default:
        throw new Error("Not meant to happen.");
        break;
}
