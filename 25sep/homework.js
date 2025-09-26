// 1 
let student = {
    name: "Ram",
    rollNo: 101,
    grade: "A"
};

Object.freeze(student);

student.name = "Sham";     
student.age = 20;          
console.log("Student Record:", student); 
console.log("-----------------------------------");
// 2
let car = {
    brand: "Toyota",
    model: "Innova",
    year: 2020
};

Object.seal(car);

car.model = "Fortuner";  
delete car.year;         
car.color = "Black";
console.log("Car Info:", car); 
console.log("-----------------------------------");
// 3
let product = {
    id: 1,
    name: "Laptop"
};

Object.defineProperty(product, "price", {
    value: 50000,
    writable: false,    
    enumerable: true,   
    configurable: false 
});

product.price = 60000; 
delete product.price;  

console.log("Product:", product); 
console.log("-----------------------------------");
// 4
let bankAccount = {
    accountNumber: 123456789012,
    holderName: 'Ram Washington',
    balance: 7000,
}

console.log(bankAccount); 

Object.seal(bankAccount); 

bankAccount.city = 'Pune'; 

console.log(bankAccount); 
console.log("-----------------------------------");
// 5
let sentence = "JavaScript is a powerful programming language";

let word = sentence.slice(14, 22);
console.log("Slice:", word); 

let wordsArray = sentence.split(" ");
console.log("Split:", wordsArray);

console.log("Includes 'JavaScript':", sentence.includes("JavaScript")); 

console.log("Index of 'language':", sentence.indexOf("language")); 
console.log("-----------------------------------");
// 6
let square = (num) => num * num;
console.log("Square:", square(5)); 
console.log("-----------------------------------");
// 7
(function(num) {
    console.log("IIFE Square:", num * num);
})(6); // 36
console.log("-----------------------------------");
// 8
function calculateTax() {
    return function(income) {
        if (income <= 5000) return income * 0.05;
        else if (income <= 10000) return income * 0.1;
        else return income * 0.2;
    };
}

let tax = calculateTax();
console.log("Tax on 4000:", tax(4000)); 
console.log("Tax on 8000:", tax(8000));  
console.log("Tax on 15000:", tax(15000)); 
console.log("-----------------------------------");
// 9
function outerFunction(outerParam) {
    let outerVar = "Hello";

    function innerFunction() {
        console.log(outerVar + " " + outerParam);
    }

    return innerFunction;
}

let result = outerFunction("World");
result(); 
