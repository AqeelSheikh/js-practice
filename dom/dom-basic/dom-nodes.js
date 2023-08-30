let output;
const parent=document.querySelector('.parent');
output=parent.childNodes;
output=parent.childNodes[3];
output=parent.firstChild;
output=parent.lastChild;
output=parent.lastChild.textContent='hello';
//parent node
const child=document.querySelector('.child');
output=child.parentNode;
output=child.parentElement;
child.parentNode.style.backgroundColor='cyan';
//siblings
const secondItem=document.querySelector('.child:nth-child(2)');
output=secondItem.nextSibling;
output=secondItem.previousSibling;
console.log(output);

