let str=" ItView Solution "
console.log(str); //display
console.log(typeof(str)); //check the datatype
console.log(str.length); // to find the length of the string

// function without parameter
console.log(str.toLowerCase()); //to convert to lowercase
console.log(str.toUpperCase()); //to convert to uppercase
console.log(str.trim()); //remove starting and ending space of the string
console.log(str.trimStart()); //remove only starting space
console.log(str.trimEnd()); //remove only ending space
console.log(str); //trim function does not affect on original string

//function with parameter
let str2='Pune'
console.log(str.concat(str2)); //concatenate of two string

console.log(str.includes(str2)); //includes return the false or true value depending on the char or string is present in the given string or not
console.log(str.includes('w'));

console.log(str.indexOf('w')); // if char is present then show the value
console.log(str.indexOf('z')); // if value is not present ii shows the -1
console.log(str.indexOf('Solution')); // index of function is case sensitive function

console.log(str.replace('i','e')); //replace only one char
console.log(str.replaceAll('o','z')); //replace all char
console.log(str.replace('Solution','Technology')); //replace whole word

let aadhaarNumber='2619'
console.log(aadhaarNumber.padStart(12,'*'));
console.log(aadhaarNumber.padEnd(12,'#'));

// str=ItView Solution
let result=str.split(" ")
console.log(result);

// slicing function that take given in some part with starting index and end index and exclude the last index value of end index
console.log(str);
console.log(str.slice(0,5));

// split they split the string in substring (subpart) with delimiter which is we passed as a parameter 

console.log(str.substring(0,5));
console.log(str.substring(0,-1));
// substring function is also return the substring value from given input string but they do not operate on -ve value of parameter