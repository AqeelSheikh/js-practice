class Person{
    constructor(name,birthYear,gender){
        this.name=name;
        this.birthYear=birthYear;
        this.gender=gender;
        this.calAge=function(){
            console.log(new Date().getFullYear() - this.birthYear);
        }
    }
}
class Employee extends Person{
    constructor(name,gender,birthYear,empId,salary){
        

    }
}