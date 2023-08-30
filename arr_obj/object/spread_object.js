let x;
const toDo={};
toDo.id=1;
toDo.name='Get milk';
toDo.completed=false;
x=toDo;
const person={
    address:{
        coords:{
            lat:42.3242,
            lng:-81.3133
        }
    }
}
//nesting by spread operator
x=person.address.coords.lat;
const obj1={a:1,b:2};
const obj2={c:1,d:3};
const obj3={...obj1,...obj2};//spread operator
const obj4=Object.assign({},obj1);//empty{} will create a empty object and then obj1 value will be assign to obj4 that empty object
x=obj3;
x=obj4;
//arrays of object
const toDos=[
{id:1, name:'buy milk'},
{id:2, name:'Sip milk'},
{id:3, name:'boil milk'},
{id:4, name:'Drink milk'},
];
x=toDos[2];//to get specific  instance
x=toDos[2].name;//to get specific value of instance
x=Object.keys(toDos);//to get keys of object
x=Object.keys(toDo);//to get keys of object
x=Object.keys(toDo).length;
x=Object.values(toDo);//to get values of an object
x=Object.entries(toDo);//to get Key values pair of an object
x=toDo.hasOwnProperty('age');//to check existence of an instance

console.log(x);