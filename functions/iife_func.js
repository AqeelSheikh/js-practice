//imedaitely invoked function expresions.............(IIFE)
//if you  have several js file and are connected or imported with each other you cannot use a global variable from one file to other .to do so we use iife function
(function () {
    const user='shakeel';
    console.log(user);
})();
(function (name) {
console.log('hello'+ name);
})('shumaila');//we can only call it in a iife not outside of it
