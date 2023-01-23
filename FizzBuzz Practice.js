// function fizzBuzz(num){
//     for(let i = 1; i <= num; i++){
//         if(i % 2 === 0 && i % 3 === 0) console.log("Fizz Buzz");
//         else if(i % 3 === 0) console.log("Buzz");
//         else if(i % 2 === 0) console.log("Fizz");
//         else console.log(i);
//     }
//
// }

function fizzBuzz(num){
    for(let i = 1; i <= num; i++){
        if(i % 2 === 0 && i % 3 === 0) console.log("Fizz Buzz");
        else if(i % 3 === 0) console.log("Buzz");
        else if(i % 2 === 0) console.log("Fizz");
        else console.log(i);
    }
}



// fizzBuzz(6);
//
// FizzBuzz(5) 1, 2, 3, 4, 5
//
// 1 / 2 = 0.5 remainder of 0.5
//
// 2 / 2 = 1 remainder of 0
//
// 3 /2 = 1.5 remainder of 1.5
//
// OR
//
// 1 % 2 = 0.5
//
// 2 % 2 = 1
//
// 3 % 2 = 1.5