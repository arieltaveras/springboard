function holler(){
    console.log('HEY YOU!');
}
//an anonymous function expression
const whisper = function(){
    console.log('pssst I have a secret');
};

function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    return x / y;
}

function power(x,y){
    return x ** y;
}

const mathFuncs = [add, subtract, multiply, divide, power];


function doMath(a,b,mathFunc){
    return mathFunc(a,b)
}

doMath(3,4, function(a,b){
    console.log(a ** b)
});

function doAllMath(a,b,mathFuncs){
    for(let func of mathFuncs){
        console.log(func(a,b));
    }
}