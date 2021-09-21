// Change the values and operators below to test your algorithm meets all conditions
var x = 25;
var expression1 = (x < 25);
var expression2 = (x > 50);

// Write Your JavaScript Code Here
if (expression1 && expression2) {
    console.log("true true"); }
else if(expression1 && !expression2) {
    console.log("true false");
}
else if(!expression1 && expression2) {
    console.log("false true");
}
else console.log("false false")

//This is an example of a nested expression
//if(expression1){
//    if(expression2){
//        console.log("true and true")
//    } else {
//        console.log("true and false")
//    }
//    } else {
//    if(expression2) {
//        console.log("false and true")
//    } else {
//        console.log("false and false")
//    }
//}