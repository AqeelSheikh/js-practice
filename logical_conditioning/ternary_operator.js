let age;
age>18 ? console.log('small')
:console.log('large');
//multiple statements
const auth=true;
//let redirect;
// if(auth){
//     alert('welcome to dashboard');
//     redirect='/dashboard';
// }
// else{
//     alert('Acess denied');
//     redirect='/login';
// }
const  redirect =auth?(alert('welcome to dashboard'),redirect='/dashboard'):(alert('Acess denied'),'/login');
console.log(redirect);
//ternary operator without else:
auth ? console.log('true'):null;