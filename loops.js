//for loops
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let a = [4, 8, 15, 16, 23, 42];
// for (i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

// let a = [4, 8, 15, 16, 23, 42];
// for (i = 0; i < a.length; i++) {
//     const c = a[i];
//     console.log(c);
// }


// // while loops
// let x = 1
// while (x < 10) {
//     console.log(x++);

//     if (x == 7) break;
//     // if (x == 7) {
//     //     break;
//     // }
// }


import promptSync from "prompt-sync";

const prompt = promptSync();

const n = parseInt(prompt("Enter your desired number: "));
let i = 1;
let sum = 0;

while (i < n) {
    i++;
    
    if (i % 3 === 0 || i % 5 === 0 && i % 5 && 3 === 0) {
        sum += i;
    }
    
}
console.log(sum);
