//cuando strictNullChecks es true
var a = undefined; // Error
var b = null; // Error
var c = 3;
var d = 57; //binary
var e = 286; //octal
var f = 0xadf0d; //hexadecimal
var g = "cat"; // error
//cuando strictNullChecks es false
var a1 = undefined; // ok
var b1 = null; // ok
var c1 = 3;
var d1 = 57; // binary
var e1 = 286; //Octal
var f1 = 0xadf0d; // Hexadecimal
var g1 = "cat"; // Error
