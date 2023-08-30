let x;
const name='aqeel';
const age=30;
const y ='helllo';
// template literals
x=`hello,my name is ${name} and I am ${age} years old`;
console.log(x);
//string properties and methods
x=y.length;
console.log(x);
//acess any value by key
x=y[1];
x=y.__proto__;//to call prototype
console.log(x);
x=y.toUpperCase();
console.log(x);
x=y.toLowerCase();
console.log(x);
//to get specific chracter
x=y.charAt(0);
console.log(x);
x=y.indexOf('e');//to get specific ch index
console.log(x);
x=y.substring(0,3)//to get specific ch range
console.log(x);
x=y.slice(-6);
console.log(x);
x=x.trim();
console.log(x);
x=y.replace('hello','Aoa');
console.log(x);
x=y.includes('hello')
console.log(x);
x=y.split('');
console.log(x);
// challenges
let myString='dev';
let newString;
myString=myString.replace('d','D')

console.log(myString);