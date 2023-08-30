for(let i=0;i<10;i++){
if(i===7){
    console.log('7 luck');
}
else{
    console.log('Number'+1);

}
}
// nested loop
for(let i=0;i<=5;i++){
    console.log('Number'+1);
    for (let j = 0; j <=5; j++) {
        console.log(`${i}*${j}=${i*j}`);
        
    }
}
//loop through an array
const names=['a','b','c','d','e'];
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
    if (element=='c') {
        console.log('c is for  chamn');
        
    }
    
}
//break to stop the execution
const array=['a','b','c','d','e'];
for (let l = 0; l < array.length; l++) {
    const element = array[l];
    if (element=='d') {
        console.log("donkey Raja");
        break;
        
    }
}
//continue
const arrays=['a','b','c','d','e'];
for (let l = 0; l < arrays.length; l++) {
    const element = arrays[l];
    console.log(element);
    if (element=='b') {
        console.log("skip");
        break;
        
    }
}