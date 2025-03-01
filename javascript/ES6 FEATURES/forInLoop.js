// the "for...in" loop in js is used to iterate over the enumerate
//properties of an object. It is a way to loop through the 
//keys(property names) of an object.
//for (let key in object){...}

let person={
    name:"prahsn",
    age:19,
    gender:"male",
};
for(let i in person)
{
    console.log(i,person[i])
}