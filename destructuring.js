const person = {
    name: "John Smith",
    age: 57,
    heightInCentimetres: 187,
    job: "Gardener"
}

const { name, age, heightInCentimetres, job } = person; // Copying properties from the object and making them variables

console.log(name, age, heightInCentimetres, job);

const people = ["John", "James", "Adam", "Timothy"];

const [ a, b, c, d ] = people; // It doesn't matter what you call the destructured variables because arrays have an index order

console.log(a, b, c, d);
