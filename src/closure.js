export function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function suma(a, b) { // displayName() is the inner function, a closure
        //console.log(a+b); // use variable declared in the parent function
    }
    return suma(a, b);
}


function adding(x) {
    return function (y) {
        return x + y;
    };
}



let add10 = adding(10);
console.log(add10(2)); 

let add15 = adding(15);
console.log(add15(2));


