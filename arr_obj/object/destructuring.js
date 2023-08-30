const firstName='John';
const lastName='Wick';
const age=28;
const person={
    firstName:firstName,
    lastName:lastName,
    age:age
};
//if value and key have same name you can also do this
const persons={
    firstName,
    lastName,
    age,
};
console.log(person);
console.log(persons);
//destructuring
const toDo={
    id:1,
    title:'Sdqy tumharey',
    user:{
        name:'John Trevolta',
    },
};
const {id,title,user:{name}}=toDo;
console.log(name);