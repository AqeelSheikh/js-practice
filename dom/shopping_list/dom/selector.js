console.log(document.getElementById('clear'));
console.log(document.getElementById('clear').getAttribute('id'));//get attribute
console.log(document.getElementById('clear').setAttribute('clears','title'));//get attribute
console.log(document.getElementById('clear').id='clear-all');//set attribute
const  title=document.getElementById('title');
console.log(title)
//get or change  the content

console.log(title.texContent);
title.textContent='hello world';
//change styles
title.style.color='pink';
title.style.backgroundColor='black';
title.style.borderRadius='5px';
//document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#clear-all'));
console.log(document.querySelector('input[type="text"]'));//select attributes
console.log(document.querySelector('li:nth-child(2)'));//select specific attributes 
console.log(document.querySelector('li:nth-child(2)').innerText);//select specific value attributes 
const seconedItem=document.querySelector('li:nth-child(2)');
// console.log(seconedItem.innerText="chaunsa mango");
seconedItem.style.color='red'
