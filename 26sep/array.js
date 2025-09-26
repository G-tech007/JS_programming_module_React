let fruits=['Mango','Apple','Grapes']
console.log(fruits);

// Push
fruits.push('Cherry')
console.log(fruits);

// pop
console.log(fruits.pop());
console.log(fruits);

// unshift add the new element at first locations
fruits.unshift('Strawberry')
console.log(fruits);

// shift remove the first element from array
console.log(fruits.shift());
console.log(fruits);

// 
let myFruits=['Banana','Coconut','CustardApple']
console.log(myFruits);

// concat
console.log(fruits.concat(myFruits));
console.log(fruits);

// indexof
console.log(fruits.indexOf('Apple'));
console.log(fruits.indexOf('Coconut')); //if it is not present in array then they display -1

// includes
console.log(fruits.includes('Banana'));
console.log(fruits.includes('Grapes'));

// sort by ascending order affect on original array
console.log(fruits.sort());

// reverse affect on original array
console.log(fruits.reverse());

// slice
console.log(fruits.slice(0,1));

// splice Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(fruits);
console.log(fruits.splice(1,2));