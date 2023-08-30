const itemInput=document.getElementById('item-input');
const onKeyPress=(e)=>{
    console.log('keypress');

}
const onKeyUp=(e)=>{
    console.log('key up');

}

const onKeyDown=(e)=>{
    console.log('key down');
    if (e.key==='Enter') {
        alert('you press enter'); 
    }
    //keyCode
    if(e.keyCode===13){
        alert('you hit enter');
    }
    if (e.repeat) {
        console.log('you are holding down'+ e.key);
        console.log('shift'+ e.shiftKey);
    }

}
itemInput.addEventListener('keypress',onKeyPress);
itemInput.addEventListener('keyup',onKeyUp);
itemInput.addEventListener('keydown',onKeyDown);
