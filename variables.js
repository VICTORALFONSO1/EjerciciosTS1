//cuando strictNullChecks es true
var a = undefined; //ok
var b = null; //error
var c = 3; //error
var d = "apple"; //error
//cuando strictNullChecks es false
var a1 = undefined; //ok
var b1 = null; //ok
var c1 = 3; //error
var d1 = "apple"; //error
