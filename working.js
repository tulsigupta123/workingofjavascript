// Add numbers-
addNumbers(4,5);
function addNumbers(a,b){
    let c = a + b;
    console.log(`Addition of numbers is : ${c}`);
}


// Multiply numbers-
multiplyNumbers(4,5);
function multiplyNumbers(a,b){
    let c = a * b;
    console.log(`Multiply of numbers is : ${c}`);
}


// Add with var-
function addVar(a,b){
    console.log(`Addition in console before declaring variable is : ${c} `);
    var c = a + b;
    console.log(`Addition in console after declaring variable is : ${c}`);
}
addVar(4,6);


// Declaring variables-
function varDec(){
    let x = 2;
    var y = 3;
    const z = 4;
console.log(`values of x,y,z in console after declaring variable is : ${x},${y},${z}`);
}
varDec();


// Variable within a block scope-

// console.log(`Value of n is : ${n}`); 
// [ReferenceError: Cannot access 'n' before initialization
// at Object.<anonymous> (d:\workingofjavascript\working.js:37:13)
// at Module._compile (node:internal/modules/cjs/loader:1254:14)
// at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
// at Module.load (node:internal/modules/cjs/loader:1117:32)
// at Module._load (node:internal/modules/cjs/loader:958:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// at node:internal/main/run_main_module:23:47]
let n = 5;
console.log(`Value of n is : ${n}`);