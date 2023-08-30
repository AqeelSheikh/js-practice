// const div=document.createElement('div');
// div.className='my-element';
// div.id='my-element';
// div.setAttribute('title','My Element');
// //div.innerText='limu Pani';
// const text=document.createTextNode('hello world');
// div.appendChild(text);
// // document.body.appendChild(div);//to append in body of the page
// document.querySelector('ul').appendChild(div);// to append in specific UI of page
// console.log(div);
//dirty
// function createListItem(item) {
//     const li=document.createElement('li');
//     li.innerHTML=`
  
//             <button>${item}</button>
//         `
//     document.querySelector('.list-item').appendChild(li);
// }
// createListItem('Eggs');
//clean and performant
// function createNewItem(item) {
//     const li = document.createElement('li');
//     li.className = 'list-item';
    
//     const span = document.createElement('span');
//     span.className = 'item-text';
//     span.appendChild(document.createTextNode(item));
//     li.appendChild(span);
    
//     const button = document.createElement('button');
//     button.className = 'remove-item btn-link text-red';
    
//     const icon = document.createElement('i');
//     icon.className = 'fa-solid fa-xmark';
//     button.appendChild(icon);
//     li.appendChild(button);
    
//     document.querySelector('.items').appendChild(li);
//   }
  
//  createNewItem('Eggs');
// createNewItem('cheese');

// by multiple functions
