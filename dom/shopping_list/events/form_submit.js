const form=document.getElementById('item-form');
function onSubmit(e) {
    e.preventDefault();
    console.log('submit');
const item =document.getElementById('item-input').value;
const priority =document.getElementById('priority-input').value;
if (item===''|| priority==='0') {
    alert('plz filled all terms');
    return;
}
console.log(item,priority);
}
function onSubmit2(e) {
    e.preventDefault();
   const formData=new FormData(form);
   const item=formData.get('item');
   const priority=formData.get('priority');
   console.log(item,priority);
}
form.addEventListener('submit',onSubmit2);
