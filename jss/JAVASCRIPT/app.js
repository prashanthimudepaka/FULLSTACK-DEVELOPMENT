function myFunction(a,b) {
    return a*b
}
console.log(myFunction(1,3))
//function declaration
function say(username)
{
    console.log(username)
}

//function expression
const mygreeting=function(user)
{
    console.log(`hello ${user}`)
}
mygreeting("prashanthi")

//callback function:
//when we provide function as an argument to other function 
// that function is known as callback function
/*
showCallFunc(function(){})
*/
// showCallFunc(function(){

    function showCallFunc(fn)
    {
        const value=10;
        fn(value) 
    }

// })
showCallFunc(function(value){
    console.log(value);
})

//ex-2
function greet(name,callMe)
{
    console.log(`hello ${name}`)
    callMe()
}
function callMe()
{
    console.log(`i am a callback function `)
}
greet("john",callMe)

//ex-3
function showCallFunc(fn)
{
    const a=19
    fn(a)
}

// function fn(value)
// {
// }

showCallFunc(function(value){
    console.log(`assignmmeent =${value}`)

});

//Scopes in javascript
//scope in javascript refers to the current context of code, which determines
// accesibility of vars in js
//there are two types of scopes
//global scope var-->vars are
//  declared outside the block 
//local scode var


//method: it is a function inside an object
function greety()
{
    return `Hello my name is ${person.name} & i am 
    ${person.age} years old`;
}
const person={
    name:"prash",
    age:25,
    greety,
}

console.log(person.greety())

const persons={
    name:"prash",
    age:25,
    greeting:function(){
        return `Hello, my name is ${persons.name}`
    },
};
console.log(persons.greeting())


//json--> tramitting data b/w server and web aplication
//for storing configuration settings etc.
//JSON is human-readable and easy to understand compared to other formats like XML.
// Used in APIs and Web Services
// {
//     "status": "success",
//     "data": {
//       "id": 101,
//       "message": "User created successfully"
//     }
//   }
// Database Integration (MongoDB, Firebase, etc.)
// Cross-Platform Data Sharing
// JSON enables seamless data sharing between web applications, mobile apps, and servers.
/*
const man = { name: "Alice", age: 25, city: "New York" };

const jsonString = JSON.stringify(man);

console.log(jsonString); 
*/
/*
const numbers = [1, 2, 3, 4, 5];
console.log(JSON.stringify(numbers)); 
// Output: [1,2,3,4,5]
*/
// Output: {"name":"Alice","age":25,"city":"New York"}
// The object is converted into a string that follows JSON format.
// This is useful for sending data to APIs or storing it in databases.

const jsonstring=JSON.stringify(person)
const jsonobject=JSON.parse(jsonstring)
console.log(jsonobject)

//date time
const date=new Date()
// console.log(currentDate)
const year=date.getFullYear()

const month=date.getMonth()
// const minutes=date.
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(date.toISOString())

date.setDate(date.getDate()+1)
console.log(date)
date.setDate(date.getDate()-1)
console.log(date)


