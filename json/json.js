const post={
    id:1,
    title:'Post One',
};
//convert to json string
const str=JSON.stringify(post);
//parse JSON
const obj=JSON.parse(str);
const posts=[
    {
    id:1,
    title:'Post One',
},
    {
    id:2,
    title:'Post two',
},
    {
    id:3,
    title:'Post four',
},
    {
    id:4,
    title:'Post four',
}
];
const str2=JSON.stringify(posts);
console.log(str2);
