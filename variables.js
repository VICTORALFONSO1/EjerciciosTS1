//cuando strictNullChecks es true
var a = undefined; // Error
var b = null; // Error
var c = "";
var d = "y";
var e = "building";
var f = 3; //Error
var g = "3";
//cuando strictNullChecks es false
var a1 = undefined; // Ok
var b1 = null; // Ok
var c1 = "";
var d1 = "y";
var e1 = "building";
var f1 = 3; //Error
var g1 = "3";
