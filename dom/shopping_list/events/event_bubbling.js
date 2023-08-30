const button=document.querySelector('form button');
const div=document.querySelector('form div:nth-child(1)');
const form=document.querySelector('form');
button.addEventListener('click',()=>{
    alert('Button was Clicked');
}); 
div.addEventListener('click',()=>{
    alert('div was Clicked');
}); 
form.addEventListener('click',()=>{
    alert('form was Clicked');
}); 
document.body.addEventListener('click',()=>{
    alert('Body was Clicked');
}); 