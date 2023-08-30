// two ways of create class
//  class declartion
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
let qumbar=new Person('qambar',2001,'male');
console.log(qumbar);
//hoisting a class is not allowed.means making a object before making the class
// class expression
// let Person=class{
  
// }
