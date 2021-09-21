// WRITE YOUR CODE HERE

//An array to group multiple variables
var names = [
    " Chris",
    " Jonathan",
    " Charlotte",
    " Donald"];

//Logs each element in the array
console.log("Welcome to the class" + names);
console.log("Welcome to the class" + names[0]);
console.log("Welcome to the class" + names[1]);
console.log("Welcome to the class" + names[2]);
console.log("Welcome to the class" + names[3]);

//Chanes the first element in the array with a new student
names[0] = "Joe";

console.log(names[0]);


if (names[0] !== "Chris") {
    console.log(names[0] + " is in class")
}
