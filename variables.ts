//cuando strictNullChecks es true
//let a: string = undefined; // Error
//let b: string = null; // Error
//let c: string = ""; 
//let d: string = "y"; 
//let e: string = "building"; 
//let f: string = 3; //Error
//let g: string = "3"; 

//cuando strictNullChecks es false
//let a1: string = undefined; // Ok
//let b1: string = null; // Ok
//let c1: string = ""; 
//let d1: string = "y"; 
//let e1: string = "building"; 
//let f1: string = 3; //Error
//let g1: string = "3"; 

//enum Animals {cat, lion, dog, cow, monkey}
//let c: Animals = Animals.cat;
//console.log(Animals[3]); // cow
//console.log(Animals.monkey); // 4

enum Animals {cat = 1, lion, dog = 11, cow, monkey}
let c: Animals = Animals.cat;
console.log(Animals[3]); // undefined
console.log(Animals.monkey); // 13