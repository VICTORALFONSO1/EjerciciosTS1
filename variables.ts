//cuando strictNullChecks es true
let a: void = undefined; //ok
let b: void = null; //error
let c: void = 3; //error
let d: void = "apple"; //error

//cuando strictNullChecks es false
let a1: void = undefined; //ok
let b1: void = null; //ok
let c1: void = 3; //error
let d1: void = "apple"; //error

