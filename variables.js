//cuando strictNullChecks es true
var a = undefined; //ok
var b = null; //error
var c = undefined; //error
var d = undefined; //ok
//cuando strictNullChecks es false
var a1 = undefined; //ok
var b1 = null; //ok
var c1 = undefined; //ok
var d1 = undefined; //ok
