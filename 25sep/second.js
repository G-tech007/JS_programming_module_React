// seal function of object
// object.seal prevent to add and delete new property but they allow to replace or edit existing property value

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

console.log(empObj);
Object.seal(empObj)
empObj.empName='John'
console.log(empObj);
empObj.contact.email_id='xyz@gmail.com'
console.log(empObj);
delete empObj.empName
console.log(empObj);