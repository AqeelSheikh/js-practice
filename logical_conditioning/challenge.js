//calculator challenge
let operator;
function calculator(num1,num2,operator) {
    let result;
    if(operator=='+'){
        result=num1+num2;
        console.log(`the output is ${num1} ${operator} ${num2}=${result}`);
    }
    else if(operator=='-'){
        result=num1-num2;
        console.log(`the output is ${num1} ${operator} ${num2}=${result}`);
    }
    else if(operator=='*'){
        result=num1*num2;
        console.log(`the output is ${num1} ${operator} ${num2}=${result}`);
    }
    else{
        result=num1/num2;
        console.log(`the output is ${num1} ${operator} ${num2}=${result}`);
    }
    
}
console.log(calculator(8,4,'/'));