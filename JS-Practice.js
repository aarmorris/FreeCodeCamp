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

//Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
//
// Here is a function myTest with a local variable called loc.
//
// function myTest() {
//   const loc = "foo";
//   console.log(loc);
// }
//
// myTest();
// console.log(loc);
// The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.
//
// The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.
//
// Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.

function myLocalScope() {
    // Only change code below this line
    let myVar;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// Global vs. Local Scope in Functions
// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
//
// In this example:
//
// const someVar = "Hat";
//
// function myFun() {
//   const someVar = "Head";
//   return someVar;
// }
// The function myFun will return the string Head because the local version of the variable is present.
//
// Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    let outerWear = "sweater";
    // Only change code above this line
    return outerWear;
}

myOutfit();