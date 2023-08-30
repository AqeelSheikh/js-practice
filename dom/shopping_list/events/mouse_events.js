const logo=document.querySelector('#logo');
const onClick=()=>{
    console.log('click event');
}
const onDoubleClick=()=>{
    if (document.body.style.backgroundColor !=='purple') {
        document.body.style.backgroundColor='purple';
        document.body.style.color='white';
        
    }else{
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
}
    
    
};

const onMouseOver=()=>{
    console.log('mouse hover');
}

const onMouseOut=()=>{
    console.log('mouse out');
}
const onDragStart=()=>{
    console.log('drag start');
}
const onDrag=()=>{
    console.log('drag ');
}
const onDragEnd=()=>{
    console.log('drag end ');
}
//event listeners
logo.addEventListener('click',onClick);
logo.addEventListener('dblclick',onDoubleClick);
logo.addEventListener('mouseover',onMouseOver);
logo.addEventListener('dragstart',onDragStart);
logo.addEventListener('drag',onDrag);
logo.addEventListener('dragend',onDragEnd);
logo.addEventListener('mouseout',onMouseOut);