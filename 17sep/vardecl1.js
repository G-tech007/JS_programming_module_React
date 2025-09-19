function display(){
    var a=10
    console.log('a=',a);
}

display()
console.log('a=',a);

console.log('a=',a);
var a=10
console.log('a=',a);

//"HOISTING" = hoisting is the behavior of the variable and function moving to top of their scope (either the global scope or the function scope)
// during the compilation phase before the code is executed.
// it is only applicable for the var keyword