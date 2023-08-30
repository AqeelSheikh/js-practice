//nesting arrays
let x,y;
const fruits=['apple','pear','grape'];
const berries=['strawberry','blueberry','rasberry'];
// fruits.push(berries);
// console.log(fruits);
//to get specif index in nested array
// x=fruits[3][1];
// console.log(x);
//to get strawberry
// const allFruits=[fruits,berries];
// x=allFruits[1][0]//it has two index fruits and berries so it will go to the sec index and get strawberry at 0 index
// console.log(x);
//concatination (merging two arrays into one)
// x=fruits.concat(berries);
//spread method
x=[...fruits,...berries];
console.log(x);
//flatten arrays
const num=[1,2,3,[3,4],78,3,[9,0,8],90,9,3,2];//to avoid nesting
 y=num.flat();
console.log(y);
// static methods
y=Array.isArray(num);
console.log(y);
y=Array.from('123456');//to conert string into array index values
console.log(y);
const a=1;
const b=3;
const c=2;
y=Array.of(a,b,c);
console.log(y);
// array challenge
const row=[1,2,3,4,5];//output[6,1,2,3,4,5,0]
row.reverse();
row.push(0);
row.unshift(6);
console.log(row);

