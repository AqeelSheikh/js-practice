let x;
const person={
    name:"john doe",
    age:30,
    isAdmin:true,
    address:{
        street:'gohawa more',
        city:'Lahore',
        province:'Punjab'
    },
    hobbies:['cricket','movies','sleeping']
};
x=person.name;
x=person['age'];
x=person.address;
x=person.address.city;
x=person.hobbies[2];
person.name='John Wick';//to chane value of specific instance of an object
delete person.age;//to delete some instance
person.hasChildren=true;//add a instance to object
//ad function as a property
person.greet=function () {
    console.log(`hello,my name is ${this.name}`);
};
person.greet();


x=person;
console.log(x);