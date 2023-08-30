// ElementNodes
let output;
//get child elements
const  parent=document.querySelector('.parent');
output=parent.children;
parent.children[1].innerText='child 2';//change  inner data
parent.children[1].style.color='red';//apply styles
parent.firstElementChild.innerText='child One';
parent.lastElementChild.innerText='last One';//get last element
//get parent elemnt from child
const child=document.querySelector('.child');
output=child.parentElement;
child.parentElement.style.border='1px solid black';
child.parentElement.style.padding='1rem';
//sibling elements
const seconedItem=document.querySelector('.child:nth-child(2)');
output=seconedItem.nextElementSibling;
seconedItem.nextElementSibling.style.color='green';
seconedItem.previousElementSibling.style.color='orange';
output=seconedItem
console.log(output);
