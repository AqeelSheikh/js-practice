function removeClearBtn() {
    document.querySelector('#clear').remove();
}
removeClearBtn();
//remove  child
function removeFirstItem() {
    const ul=document.querySelector('ul');
    const li=document.querySelector('li:first-child');
    ul.removeChild(li);
}
removeFirstItem();
//remove specific item
function removeItem(itemNumber) {
    const ul=document.querySelector('ul');
    // const li=document.querySelector(`li:nth-child(${itemNumber})`);
    const li=document.querySelectorAll('li')[4];
    ul.removeChild(li);
}
removeItem(3);