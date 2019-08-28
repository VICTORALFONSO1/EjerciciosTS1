//cuando strictNullChecks es true
let a: null = null; //ok
let b: undefined = null; //error
let c: number = null; //error
let d: void = null; //error

//cuando strictNullChecks es false
let a1: null = null; //ok
let b1: undefined = null; //ok
let c1: number = null; //ok
let d1: void = null; //ok

