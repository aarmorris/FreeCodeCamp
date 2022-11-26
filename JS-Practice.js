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

//Understanding Undefined Value returned from a Function
// A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.
//
// Example
//
// let sum = 0;
//
// function addSum(num) {
//   sum = sum + num;
// }
//
// addSum(3);
// addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.
//
// Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line
function addFive(){
    sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

// Assignment with a Returned Value
// If you'll recall from our discussion about Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.
//
// Assume we have pre-defined a function sum which adds two numbers together, then:
//
// ourSum = sum(5, 12);
// will call the sum function, which returns a value of 17 and assigns it to the ourSum variable.
//
// Call the processArg function with an argument of 7 and assign its return value to the variable processed.

// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

//Stand in Line
// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
//
// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
//
// Add the number to the end of the array, then remove the first element of the array.
//
// The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    // Only change code above this line
    const removed = arr.shift();
    return removed;
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Understanding Boolean Values
// Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive.
//
// Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.
//
// Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.

function welcomeToBooleans() {
    // Only change code below this line

    return true; // Change this line

    // Only change code above this line
}

// Use Conditional Logic with If Statements
// if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.
//
// When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.
//
// Pseudocode
//
// if (condition is true) {
//   statement is executed
// }
// Example
//
// function test (myCondition) {
//   if (myCondition) {
//     return "It was true";
//   }
//   return "It was false";
// }
//
// test(true);
// test(false);
// test(true) returns the string It was true, and test(false) returns the string It was false.
//
// When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.
//
// Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.

   function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue){
  return "Yes, that was true";
}
return "No, that was false";


  // Only change code above this line

}

//Comparison with the Equality Operator
// There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.
//
// The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.
//
// function equalityTest(myVal) {
//   if (myVal == 10) {
//     return "Equal";
//   }
//   return "Not Equal";
// }
// If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal. Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:
//
// 1   ==  1  // true
// 1   ==  2  // false
// 1   == '1' // true
// "3" ==  3  // true
// Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

//
// Basic JavaScript
// Comparison with the Strict Equality Operator
// Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.
//
// If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
//
// Examples
//
// 3 ===  3  // true
// 3 === '3' // false
// In the second example, 3 is a Number type and '3' is a String type.
//
// Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.

 // Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

//Practice comparing different values
// In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.
//
// If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.
//
// Examples
//
// 3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.
//
// Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
//
// typeof 3
// typeof '3'
// typeof 3 returns the string number, and typeof '3' returns the string string.
//
// The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

//Comparison with the Inequality Operator
// The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.
//
// Examples
//
// 1 !=  2    // true
// 1 != "1"   // false
// 1 != '1'   // false
// 1 != true  // false
// 0 != false // false
// Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

//Comparison with the Strict Inequality Operator
// The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.
//
// Examples
//
// 3 !==  3  // false
// 3 !== '3' // true
// 4 !==  3  // true
// Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

//Comparison with the Greater Than Operator
// The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.
//
// Like the equality operator, the greater than operator will convert data types of values while comparing.
//
// Examples
//
// 5   >  3  // true
// 7   > '3' // true
// 2   >  3  // false
// '1' >  9  // false
// Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);

//Comparison with the Greater Than Or Equal To Operator
// The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.
//
// Like the equality operator, the greater than or equal to operator will convert data types while comparing.
//
// Examples
//
// 6   >=  6  // true
// 7   >= '3' // true
// 2   >=  3  // false
// '7' >=  9  // false
// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);

//Comparison with the Less Than Operator
// The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.
//
// Examples
//
// 2   < 5 // true
// '3' < 7 // true
// 5   < 5 // false
// 3   < 2 // false
// '8' < 4 // false
// Add the less than operator to the indicated lines so that the return statements make sense.

function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }

    if (val < 55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);

//Comparison with the Less Than Or Equal To Operator
// The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.
//
// Examples
//
// 4   <= 5 // true
// '7' <= 7 // true
// 5   <= 5 // true
// 3   <= 2 // false
// '8' <= 4 // false
// Add the less than or equal to operator to the indicated lines so that the return statements make sense.

function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);

//Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.
//
// The same effect could be achieved by nesting an if statement inside another if:
//
// if (num > 5) {
//   if (num < 10) {
//     return "Yes";
//   }
// }
// return "No";
// will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:
//
// if (num > 5 && num < 10) {
//   return "Yes";
// }
// return "No";
// Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);

//Comparisons with the Logical Or Operator
// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.
//
// The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.
//
// The pattern below should look familiar from prior waypoints:
//
// if (num > 10) {
//   return "No";
// }
// if (num < 5) {
//   return "No";
// }
// return "Yes";
// will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:
//
// if (num > 10 || num < 5) {
//   return "No";
// }
// return "Yes";
// Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }
    // Only change code above this line
    return "Inside";
}
testLogicalOr(15);

//Introducing Else Statements
// When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.
//
// if (num > 10) {
//   return "Bigger than 10";
// } else {
//   return "10 or Less";
// }
// Combine the if statements into a single if/else statement.

function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        return "Bigger than 5";
    } else{
        return "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);

//Introducing Else If Statements
// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.
//
// if (num > 15) {
//   return "Bigger than 15";
// } else if (num < 5) {
//   return "Smaller than 5";
// } else {
//   return "Between 5 and 15";
// }
// Convert the logic to use else if statements.

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
testElseIf(7);

//Logical Order in If Else Statements
// Order is important in if, else if statements.
//
// The function is executed from top to bottom so you will want to be careful of what statement comes first.
//
// Take these two functions as an example.
//
// Here's the first:
//
// function foo(x) {
//   if (x < 1) {
//     return "Less than one";
//   } else if (x < 2) {
//     return "Less than two";
//   } else {
//     return "Greater than or equal to two";
//   }
// }
// And the second just switches the order of the statements:
//
// function bar(x) {
//   if (x < 2) {
//     return "Less than two";
//   } else if (x < 1) {
//     return "Less than one";
//   } else {
//     return "Greater than or equal to two";
//   }
// }
// While these two functions look nearly identical if we pass a number to both we get different outputs.
//
// foo(0)
// bar(0)
// foo(0) will return the string Less than one, and bar(0) will return the string Less than two.
//
// Change the order of logic in the function so that it will return the correct statements in all cases.

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

