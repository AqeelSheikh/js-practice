 const clearBtn=document.querySelector('#clear');
 let bool;
// clearBtn.onclick=function () {
//     alert('clear Items');
// };
//modern way
//to clear the list
// clearBtn.addEventListener('click', ()=> {
//   bool= alert('clear Items'); 
//   if(typeof bool ==='undefined'){
//     const ul=document.querySelectorAll('ul');
//     const li=document.querySelectorAll('li');
//     li.forEach((item,index) => {
        
        
//         document.querySelector('li').remove();
        
//     });  
//   }
// });
//by while loop
function onClear() {
    const itemList=document.querySelector('ul');
    const items=itemList.querySelectorAll('li');
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}
clearBtn.addEventListener('click',onClear); 

// clearBtn.addEventListener('click', ()=> {
//    console.log('clear Items'); 
// });
