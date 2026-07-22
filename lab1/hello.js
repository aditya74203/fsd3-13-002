function sayHello(name) {
    console.log(`Welcome to ${name}`);
}

const sayHi = (name) => {
    console.log(`Welcome to ${name}`);
     
}
const findSum = (a,b) => a+b;
function sum(a,b){
    return a+b;
}

sayHello('Aaditya Choudhary ')
sayHi(`Amit Kumar`)
console.log(`sum of 2 and 5 is ${sum(2,5)}`);
console.log(`sum of 2 and 5 is ${findSum(2,5)}`);