// higher order function
//1
function multiplyBy(n) {
  return function (x) {
    return x * n;
  }
}

let result1 = multiplyBy(3);
console.log(result1(5));
console.log("-----------------------------------");
//2
function greeting(name) {
  return function () {
    console.log("Hello" + name);
  }

  let result2 = greeting("Girish");
  console.log(result2());
}
console.log("-----------------------------------");
// 3
function createCounter(){
    let count=0

    return function ()
    {
        count++
        return count
    }
}

let result=createCounter()
console.log(result());
console.log("-----------------------------------");

// callback function 
// 1
function calculate(a,b,callBackF)
{
    return callBackF(a,b)
}

function add(n1,n2)
{
    return n1+n2
}

function mul(n1,n2)
{
    return n1*n2
}

console.log(calculate(3,2,add)); 
console.log(calculate(2,3,mul)); 
console.log("-----------------------------------");
// 2
function transformString(str, callback) {
  return callback(str);
}
function toUpper(text) {
  return text.toUpperCase();
}
function reverse(text) {
  return text.split("").reverse().join("");
}

console.log(transformString("hello", toUpper));   // HELLO
console.log(transformString("hello", reverse));   // olleh