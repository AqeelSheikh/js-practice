//objects as params
function loginUser(user) {
return`the user ${user.name} with the id of ${user.id} is logged in`;    
}
const user ={
    id:1,
    name:"john",
}
console.log(loginUser(user));
console.log(
    loginUser({
        id:2,
        name:'sara',
    })
);
//arryas as params
function getRandom(...arr) {
    const randomIndex=Math.floor(Math.random()*arr.length);
    const item=arr[randomIndex];
    console.log(item);
}
getRandom([1,2,3,4,5,6,7,8,9,10]);