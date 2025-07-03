let a = 'first';//global scope

function scopeTest() {
    console.log(a);//accesible
     a = 'changed';
    // let b = 'second'
    if (a != '') {
        console.log(a);

        let c = 'third'//loca scope
    }
}

scopeTest();
// console.log(b);
console.log(a);//accesible
// console.log(c); // not accesible