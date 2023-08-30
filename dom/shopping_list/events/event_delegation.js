//adding event listner  on multiple objects
const listItems=document.querySelectorAll('li');
listItems.forEach((items)=>{
    items.addEventListener('click',(e)=>{
     e.target.remove();

    });
});
//adding event listner  on multiple objects
const list=document.querySelector('ul');
list.addEventListener('mouseover',(e)=>{
    if (e.target.tagName==='LI') {
        e.target.style.color='red';
        
    }
})