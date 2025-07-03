// function sayHello() {
//     console.log('---------------');
//     console.log('hello');
//     console.log('---------------');
// }

// sayHello();

// function sayHello(name) {
//     console.log('-------------');
//     console.log(`Hello ${name}`);
//     console.log('-------------');
// }

// sayHello('Bob');
// sayHello('John');


function calculateTax(amount) {
    let result = amount * 0.0825;
    return result;
}

let tax = calculateTax(100);
console.log(tax);
