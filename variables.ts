//cuando strictNullChecks es true
let a: undefined = undefined; //ok
let b: undefined = null; //error
let c: number = undefined; //error
let d: void = undefined; //ok

//cuando strictNullChecks es false
let a1: null = undefined; //ok
let b1: undefined = null; //ok
let c1: number = undefined; //ok
let d1: void = undefined; //ok

