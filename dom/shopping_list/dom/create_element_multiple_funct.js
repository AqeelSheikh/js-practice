function createNewItem(item) {
         const li = document.createElement('li');
         li.className = 'list-item';
        
         
         const span =createSpan( 'item-text');
          span.appendChild(document.createTextNode(item));
         li.appendChild(span);
        
         const button =createButton('remove-item btn-link text-red');
         
         
        
     
         
         li.appendChild(button);
        
         document.querySelector('.items').appendChild(li);
       }
      
      createNewItem('cream');
     createNewItem('butter');
     createNewItem('chtni');


function createButton(classes) {
    const button=document.createElement('button');
    button.className=classes;
    const icon =createIcon('fa-solid fa-xmark');
    button.appendChild(icon);//because icon is in button so we are using it here not in main function
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}
function createSpan(classes) {
 
    const span = document.createElement('span');
    span.className = classes;
    return span;
}