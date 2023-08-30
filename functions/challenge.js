//convet F to Celsius
function getCelsius(givenTemp) {
    const temp=(32*(givenTemp)-32)*(5/9);
    return console.log(temp);
};
getCelsius(54);
//to get max and min in array
const identifier=()=>{
    input=[1,2,3,4,5,6,7,8];
    const min=Math.max(...input);
    console.log(min);
    console.log(Math.min(...input));
};
identifier();