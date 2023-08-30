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
    

let Gujjar=new Person('gyjjar','male',2001)
    console.log(Gujjar);
    Gujjar.calculateAge();

let Zeeshan=new Person('shani','male',2001)
    console.log(Zeeshan);
    
