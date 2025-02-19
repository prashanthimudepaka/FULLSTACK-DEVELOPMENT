//the find() method is another built-in array helper in js that allows you to find first elemnt in an array that
// matches a specific condition. It returns the value of the first element that satisfies the given testing 
// function, or undefined if no element is found.
const peoples=[
    {name:"prash",age:17},
    {name:"psh",age:19},
    {name:"ph",age:10}

] ;
const res=peoples.find((person)=> person.name=="prash")
console.log(res)
const postRes=peoples.find((post)=> post.name=="psh")
console.log(postRes)
