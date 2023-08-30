const itemForm=document.getElementById('item-form');
const itemList=document.querySelector('.items');
const clearButton=document.querySelector('#clear');
const itemInput=document.getElementById('item-input');
const itemfilter=document.getElementById('filter-input');

function displayItems() {
    const itemsFromStorage=getItemFromStorage();
    itemsFromStorage.forEach(items=>addItemToDom(items));
}
function onAddItemSubmit(e) {
    e.preventDefault();
    const newItem=itemInput.value;
    // validate
    if(newItem===''){
    alert('plz add some item');
    return;
    }
    //create item dom element
    addItemToDom(newItem);
//add item to local storage
addItemToStorage(newItem);
    //add li to the dom
    checkUi();
    
}
function addItemToDom(item){
//create List item
const li=document.createElement('li');
li.className = 'list-item';
li.appendChild(document.createTextNode(item));

const button=createButton('remove-item btn-link text-red');
li.appendChild(button);
itemList.appendChild(li);
itemInput.value='';
}

function createButton(classes) {
    const button=document.createElement('button');
    button.className=classes;
    const icon=createIcon('fa-solid fa-xmark');
    button.appendChild(icon);    
    return button;
}
 function createIcon (classes) {
    const icon=document.createElement('i');
    icon.className=classes;
    return  icon;
}
function addItemToStorage(item) {
const itemsFromStorage=getItemFromStorage();
//add new item from array    
itemsFromStorage.push(item);
//convert to JSON string and set to local string
localStorage.setItem('items',JSON.stringify(itemsFromStorage));
}
function getItemFromStorage() {
    let itemsFromStorage;
    if(localStorage.getItem('items')===null){
        itemsFromStorage=[];
}else{
    itemsFromStorage=JSON.parse(localStorage.getItem('items'));
}
return itemsFromStorage;   
}
function onClickItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')){
        removeItem();
    }
}
function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        if (confirm('are you sure?')) {
            e.target.parentElement.parentElement.remove();
            checkUi();
        }
    }
    
}
function itemClear() {
 while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
 }   
 checkUi();
}
function filterUi(e){
    const items=itemList.querySelectorAll('li');
const filterValue=e.target.value.toLowerCase();
items.forEach((item)=>{
const itemName=item.firstChild.textContent.toLowerCase();
if(itemName.indexOf(filterValue)!=-1){
item.style.display='flex';
}else{
    item.style.display='none';

}
});
}
function checkUi() {
    const items=itemList.querySelectorAll('li');
    if (items.length===0) {
        clearButton.style.display='none';
        itemfilter.style.display='none';
    }else{
        clearButton.style.display='block';
        itemfilter.style.display='block';

    }
}
//iniatlize app
function init() {
    
    // EventListner
    itemForm.addEventListener('submit',onAddItemSubmit);
    itemList.addEventListener('click',onClickItem);
    clearButton.addEventListener('click',itemClear);
    itemfilter.addEventListener('input',filterUi);
    document.addEventListener('DOMContentLoaded',displayItems);
    //  checkUi();
}
init();