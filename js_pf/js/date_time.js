let date;
let zone;
date=new Date();
date=date.toString();
console.log(date);
date=new Date(2023,5,21,12,30,0);
console.log(date);
date=new Date('07/10/21');
console.log(date);
date=new Date('07/10/23');
date=date.getTime();
console.log(date);
// zone=date.getFullYear();
// console.log(zone);
// zone=date.getMonth();
// console.log(zone);
let x;
let y=new Date();
x=y.getFullYear();
console.log(x);
x=y.getMonth()+1;
console.log(x);
x=`${y.getFullYear()}-${y.getMonth()+1}-${y.getDate()}`;
x=Intl.DateTimeFormat('en-GB').format(y);//Gb for UK timeframe/US for USA
console.log(x);

