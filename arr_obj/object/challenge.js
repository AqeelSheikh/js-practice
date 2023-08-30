const library=[
   {
        title:"Bookomania",
        author:"Aqeelsheikhsabir",
        status:{
            own:true,
            reading:false,
            read:false

        }
    },
   {
        title:"raja gidh",
        author:"lovly singh",
        status:{
            own:true,
            reading:false,
            read:false

        }
    },
   {
        title:"jheel mandar",
        author:"bano qudsia",
        status:{
            own:true,
            reading:false,
            read:false

        }
    }
    
    
];
library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;
console.log(library);
const {title:bookistan}=library[0]
console.log(bookistan);
//convert it to json data
const str=JSON.stringify(library);
console.log(str);