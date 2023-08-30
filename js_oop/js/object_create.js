// proto_typyal inheritance using Object.create
let person={
    calAge(){
        return new Date().getFullYear() - this.birthYear;
    },
    greet(){
        return 'have a nice day';
    }
}
let qumbar =Object.create(person);
qumbar.name='qumabr';
qumbar.birthYear=1999;
qumbar.gender='male';
console.log(qumbar);
console.log(qumbar.calAge());
// anonymus object
let joe =Object.create(person,{
   name:{value:'joe'},
   birthYear:{value:2000},
   gender:{value:'male'}
});
console.log(joe);
