
var x = 10;
let y = 20;

console.log(x);
console.log(window.x);

function foo() {
    console.log("inside foo");
    // console.log(x);                     // 10

    let z = 50;
    console.log(z);                     // 50

    let x = 20;
    console.log(x);                     // 20
    console.log(window.x);              // 10

    if (true) {
        let blockVar = 60;
        console.log(blockVar);          // 60
    }
    // console.log(blockVar);              // error


    function innerFoo() {
        let a = 1;

        // giving the same name to a closure varaible makes the var from the closure not accessiable
        let x = 5;


        console.log(a);         // 1
        console.log(z);         // 50
        console.log(x);         // 5

    }
    innerFoo();

}
foo();
console.log(x);                         // 10

const foo2 = function() {
    console.log("inside foo2");
}
foo2();


function bla(a, b) {
    console.log(a, b);
}
bla(1, 2);



// IIFE - Immediatly Invoked Function Expression
(function() {
    let x = 10;
    function foo() {
        console.log(x);
    }

    // function clicked() {
    //     console.log("clicked!");
    // }

    // window.clicked = function() {
    //     console.log("clicked!");
    // }

    document.getElementById("my-header").addEventListener("click", function() {
        console.log("clicked");
    })

})();



































