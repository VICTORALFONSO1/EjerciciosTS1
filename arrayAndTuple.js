//cuando strictNullChecks es false
var a = [1, 12, 93, 5];
var b = ["a", "apricot", "mango"];
var c = [1, "apple", "potato"]; //error
var d = [null, undefined, 10, 15];
var e = ["pie", null, ""];
//cuando strictNullChecks es true
var a1 = [1, 12, 93, 5];
var b1 = ["a", "apricot", "mango"];
var c1 = [1, "apple", "potato"]; //error
var d1 = [null, undefined, 10, 15]; // Error
var e1 = ["pie", null, ""]; // Error
