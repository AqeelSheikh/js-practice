// querySelectorAll
// const listItems=document.querySelectorAll('.list-item');
// console.log(listItems[0].innerText);//to get a specific attribute from selected query
// listItems[1].style.color='yellow';
// listItems.forEach((item,index)=>{
//     item.style.color='red';
//     if (index===1) {
//         item.remove();        
//     }
//     if (index===0) {
//         item.innerText='aaru';
        
//     }
// })
const listItems2=document.getElementsByClassName('list-item');
const listItemsArray=Array.from(listItems2);//first convert it into array to use forEach in classname
console.log(listItems2[1].innerText);
listItemsArray.forEach((item)=>{
    console.log(item.innerText);
});
const listItems3=document.getElementsByTagName('li');
console.log(listItems3[1]);

