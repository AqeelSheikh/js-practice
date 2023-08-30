//event object
const logo=document.querySelector('#logo');
function onClick(e) {
    
    console.log(e.target);     
    console.log(e.currentTarget);     //both are same but different in case of nesting
    e.target.style.backgroundColor='blue';
    console.log(e.clientX);//to get x axis  coord page
    console.log(e.clientY);//to get y axis  coord  from the page
    console.log(e.offsetX);//to get x axis  coord from the obj
    console.log(e.offsetY);//to get y axis  coord from the obj
    console.log(e.pageX);//to get x axis  coord from the page
    console.log(e.pageY);//to get y axis  coord from the page
    
    console.log(e.screenX);//to get x axis  coord from the screen
    console.log(e.screenY);//to get y axis  coord from the screen
}
logo.addEventListener('click',onClick);
//preventDefault
document.querySelector('a').addEventListener('click',function(e){
    e.preventDefault();
})