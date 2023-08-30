//fasly values false,0,'',null,undefined,NaN and anything other than that are truthy
//true,'0','false',[],{},empty function function(){empty function}
const x=false;
if(x){
    console.log('truthy');
}
else{
    console.log('this is falsy');
}
console.log(Boolean(x));