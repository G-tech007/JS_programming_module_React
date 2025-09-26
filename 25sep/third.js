// operate on specific property

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
Object.defineProperty(empObj,'id',{
    writable:false,
    configurable:false,
})

empObj.id=122
console.log(empObj);
delete empObj.id
console.log(empObj);

// object.defineproperty(obj name,'property name'{ writable:false, configurable:false})
// we restrict 