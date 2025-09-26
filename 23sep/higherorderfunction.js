// function demo(data){
//     console.log(typeof(data));
// }

// function test(){
//     console.log('I am from test function');
// }

// demo(test)


function higherOrderFunction(tester){
    console.log('From higher order function');
    tester()
}

function tester(){
    console.log('From call back function');
}

higherOrderFunction(tester)

