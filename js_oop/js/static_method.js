// static methods are connected to class
// static methods functions on object and instance method on instances
class Person{
    constructor(name,birthYear,gender){
        this.name=name;
        this.birthYear=birthYear;
        this.gender=gender;
    }
        calAge(){
            console.log(new Date().getFullYear() - this.birthYear);
        }
        static greet(){
            console.log("hey there")
        }

    }
let qumbar=new Person('qambar',2001,'male');
console.log(qumbar);
Person.greet();