// We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.
//
// Example

function plusThree(num) {
    return num + 3;
}

const answer = plusThree(5);

// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

function timesFive(int){
    return int * 5;
}
// Below code test to see if html and javascript is linked with script tag and src="".
// alert("This is a test I'm practicing Javascript");
// solved answer above *Freecode camp*

//In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
//
// Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.
//
// Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
//
// Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
    oopsGlobal = 5;

}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}