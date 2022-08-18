function printHello() {
    console.log("hello");
    // if there is not return value the function returns undefined
    // return undefined;
}

printHello();                   // invoking the function (prints hello to the log)
console.log(printHello());      // invoking the function and prints the return value - undefined
const x = printHello();
console.log(x);

console.log(printHello);        // here I am sending the function to console.log
const foo = printHello;
foo();


// Sending a function to another a function (as a parameter) - CALLBACK FUNCTION

// OPTION 1 - predeclaring the function I want to send and then sending its name
console.log(printHello);

// OPTION 2 - declaring an anonymous function while sending it (on the fly)
console.log(function() {
    console.log("on the fly function decleration");
})

// OPTION 1
setTimeout(printHello, 3000);

// OPTION 2
setTimeout(function() {
    console.log('on the fly hello!');
}, 3000);

console.log('bla');


const numbers = [2, 56, -10];
numbers.forEach(function(number, index) {
    console.log(number);
    console.log(index);
})
for (const number of numbers) {
    console.log(number);
}

 
// function printName(fname, lname = 'Johnson') {
function printName(fname, lname) {
    let greeting = `Hello ${fname} ${lname}`;
    console.log(greeting);

    // if (lname === undefined) {
    //     lname = 'Johnson';
    // }

    // console.log(arguments);
    if (arguments.length > 2) {
        console.log(`...and my age is: ${arguments[2]}`)
    }
}


printName('John', 'Doe');

let a = 'Sarah';
let b = 'Doe';
printName(a, b);


printName('Mike');              // Mike undefeined
printName();                    // undefeined undefeined
printName("Mike", "Doe", 30);   // Function will ignore the last param | error


// Implementing overloading in JS
function Date() {
    if (arguments.length === 0) {
        createCurrentDate();
    } else if (arguments.length === 1 && typeof arguments[0] === 'number') {
        createFromMS(arguments[0]);
    }
}

// function Date(int ms) {

// }

// function Date(string ms) {

// }


function getFullName(fname, lname) {
    return `${fname} ${lname}`;
}

const myName = getFullName("Nir", "Channes");
console.log(myName);
console.log(getFullName("Nir", "Channes"));

function foo2() {

    const name = 'bla';
    if (name) {
    
    }
}
foo2();


function getPrintFunc() {
    const func = function() {
        console.log('done1')
    }
    const func2 = function() {
        console.log('done2')
    }

    return {func: func, func2: func2};
}


// const age = 10;
// const person = {
//     name: "John",
//     age
// }



// const innerFunc = getPrintFunc();
// innerFunc();

getPrintFunc().func2();

// function add() {
//     if (arguments.length === 2) {
//         return arguments[0] + arguments[1];
//     } else if (arguments.length === 1) {
//         let number1 = arguments[0]
//         return function() {
//             return number1 + arguments[0];
//         }
//     }
// }

function add(a, b) {
    if (arguments.length === 2) {
        return a + b;
    } else if (arguments.length === 1) {
        return function(c) {
            return a + c;
        }
    }
}



console.log(add(2, 7))       // 9
console.log(add(2)(7))       // 9











