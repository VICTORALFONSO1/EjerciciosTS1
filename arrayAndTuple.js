//cuando strictNullChecks es false
//let a: number[] = [1, 12, 93, 5];
//let b: string[] = ["a", "apricot", "mango"];
//let c: number[] = [1, "apple", "potato"]; //error
//let d: Array<number> = [null, undefined, 10, 15];
//let e: Array<string> = ["pie", null, ""];
//cuando strictNullChecks es true
//let a1: number[] = [1, 12, 93, 5];
//let b1: string[] = ["a", "apricot", "mango"];
//let c1: number[] = [1, "apple", "potato"]; //error
//let d1: Array<number> = [null, undefined, 10, 15]; // Error
//let e1: Array<string> = ["pie", null, ""]; // Error
var a = [11, "monday"];
var b = ["monday", 11]; // Error
var c = ["a", "monkey"]; // Error
var d = [105, "owl", 129, 45, "cat"];
var e = [13, "bat", "spiderman", 2];
e[13] = "elephant";
e[15] = false; // Error
