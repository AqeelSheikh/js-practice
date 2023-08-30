// insertElement
function insertElement() {
    const filter=document.querySelector('.filter');
    const h1=document.createElement('h1');
    h1.textContent='insertAdjacentElement';
    filter.insertAdjacentElement('beforebegin',h1);

}
insertElement();
//inserAjacentText
function inserText() {
    const item=document.querySelector('li:first-child');
    item.insertAdjacentText('afterend','inserAjacentText');
}
inserText();
//insertAdjacentHtml
function insertHtml() {
    const clearBtn=document.querySelector('#clear');
    clearBtn.insertAdjacentHTML('beforebegin','<h2>insertAdjacentHTML</h2>');

}
insertHtml();
//insertBefore
function insertBeforeItem() {
    const ul=document.querySelector('ul');
    const li=document.createElement('li');
    li.textContent='insertBefore';
    const thirdItem=document.querySelector('li:nth-child(3)');
    ul.insertBefore(li,thirdItem);
}
insertBeforeItem();

//insertAfter custom
function insertAfter(newEl,prev) {
    prev.parentElement.insertBefore(newEl,prev.nextSibling);
    
 
}

const li=document.createElement('li');
li.textContent='before after';
const prev=document.querySelector('li:first-child');
insertAfter(li,prev);   