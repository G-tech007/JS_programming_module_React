console.log(5 && 6)
console.log(0 && 2)
console.log(0 || 2)
console.log(5 || 6)
/* when we performed logical operation between two numbers then its perform with truthy and falsy value */
console.log("-----------------------------------");
console.log("ItView" && 0)
console.log("" && 2)
console.log("" || null)
console.log("-----------------------------------");
//Bitwise And Operator 
console.log(4 | 6)
console.log("-----------------------------------");
//Not operator (!)
console.log(!null) //true 
console.log("-----------------------------------");
console.log(true && false || true )
console.log("-----------------------------------");
console.log(0 || 1 && 2 || 3 )
console.log(0 || "" || null || undefined || "default");
console.log("-----------------------------------");
let a = "";

let b = 0;

let c = false;

console.log(a && b || c || "fallback");
