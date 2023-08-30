// person is base class(parent class)
let Person=function (name,gender,birthYear) {
    this.name=name;
    this.gender=gender;
    this.birthYear=birthYear;
   
}
// inheritance-----------------
Person.prototype.calculateAge=function(){
    let age=new Date().getFullYear - this.birthYear;
    console.log(age);
};
// inheritance-----------------
let qumbar=new Person('qambar','male',2001)
    console.log(qumbar);

    // employ function constructor and empoy is child class
let Employee=function (name,gender,birthYear,empId,salary) {
    Person.call(this,name,gender,birthYear);//this=mark   (this is pointing to mark object) here we are inherting properties from person object
    this.empId=empId;
    this.salary=salary;
} 
Employee.prototype=Person.prototype;//so that amrk object also have properties of Person object these prototype must be attached before attaching the child class methods in our case empDetails and salary   
Employee.prototype.calSalary=function(){
    return this.salary*12;
}
Employee.prototype.EmpDetails=function(){
    console.log(this.name);
    console.log(this.empId);
}
let mark=new Employee('mark','male',2000,100,20000);
console.log(mark);