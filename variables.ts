//cuando strictNullChecks es true
let a: number = undefined; // Error
let b: number = null; // Error
let c: number = 3; 
let d: number = 0b111001; //binary
let e: number = 0o436; //octal
let f: number = 0xadf0d; //hexadecimal
let g: number = "cat"; // error

//cuando strictNullChecks es false
let a1: number = undefined; // ok
let b1: number = null; // ok
let c1: number = 3; 
let d1: number = 0b111001; // binary
let e1: number = 0o436; //Octal
let f1: number = 0xadf0d; // Hexadecimal
let g1: number = "cat"; // Error


