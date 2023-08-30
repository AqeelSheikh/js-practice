function replaceFirstItem() {
    const firstItem=document.querySelector('li:first-child');
    const li=document.createElement('li');
    li.textContent='Replaced First';
    firstItem.replaceWith(li);

}
replaceFirstItem();
function replaceSeconedItem() {
    const seconedItem=document.querySelector('li:nth-child(2)');
    seconedItem.outerHTML='<li>Replaced Seconed</li>';
}
replaceSeconedItem();
//replace all the items
function replaceAllItems() {
    const lis=document.querySelectorAll('li');
    lis.forEach((item,index) => {
        // item.outerHTML='<li>Replace all</li>';
        if (index===1) {
            item.innerHTML='second item';
            
        }
        else{
            item.innerHTML='Replace all';
        }
        
    });    
}
replaceAllItems();
//replace by parent child function
function replaceChildHeading() {
    const header=document.querySelector('header');
    const h1=document.querySelector('header h1');
    const h2=document.createElement('h2');
    h2.id='title';
    h2.textContent='Shopify';
    header.replaceChild(h2,h1);
}
replaceChildHeading();
