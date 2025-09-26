// Object 

// object : one of the non primitive data types and also called as reference type of data type 

// object : they have three sub data types 
// object literals
//  array 
// function
/*
how to declare the object literals
*/

let empObj={
    id: 101,
    empName:'Alex',
    jobRole:'SD',
    info:function(){
        console.log('Employee from Infosys');
    },
    skills:['JAvA','JS'],
    contact:{
        add:'Pune',
        Phn_no:1234567890,
        pin_code:411017
    }
}
console.log(empObj)
console.log(empObj.skills);
console.log(empObj.contact.add);
empObj.email='itview@gmail.com'
console.log(empObj);
empObj.contact.tell_no=9876543210
console.log(empObj);