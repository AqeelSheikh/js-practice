//acess properties get and set for encapsulation

let ahmad={
    name:'ahmad',
    birthYear:1999,
    annualSalary:12000,
    get getName(){
        return this.name;
    },
    set setName(val){
        this.name=val;
    }
}
console.log(ahmad.getName);
ahmad.setName='abid';
// console.log(ahmad.getName);
let User=class{
    constructor(name,pswd,role){
        this.name=name;
        this.password=pswd;
        this.role=role;
    }
    set setPassword(val){
        if (val.length<4) {
            console.log('atleast 4 chracters')
            
        }else{
            this.password=val; //it will set the password value if it is gretaer than four 
        }
    }
}
let mark=new User('Mark','pswd123','admin');
// console.log(mark);
mark.setPassword="23*";
console.log(mark);