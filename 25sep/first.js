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

// how to add new property or delete existing property
console.log(empObj);
empObj.contact.email_id='xyz@gmail.com'
console.log(empObj);

delete empObj.jobRole
console.log(empObj);


Object.freeze(empObj) //by using this function of object we can not add,delete and modify in existing object 
empObj.experience=7
delete empObj.city
empObj.city='Mumbai'
console.log(empObj);