let x;
const arr=[2,3,4,45,3,5,65,76,86,0];
arr.push(100);
console.log(arr);
arr.pop(100);
console.log(arr);
arr.unshift(80);
console.log(arr);
arr.shift();
console.log(arr);
arr.reverse();
console.log(arr);
x=arr.includes(3);
console.log(x);
x=arr.indexOf(4);
console.log(x);
x=arr.slice(0,3);//it takes the required index
console.log(x);
x=arr.splice(0,3);//it takes the required index an other pluck out
console.log(x);
//mehods chaining
x=arr.splice(1,8).reverse().toString().charAt(0);//chartat can only be used  with string so we first converted with string
console.log(x);
