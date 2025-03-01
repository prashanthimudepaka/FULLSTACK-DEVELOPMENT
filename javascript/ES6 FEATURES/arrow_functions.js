//arrow functions, also known as 
// fat arrow functions are a concise and shorter way to define functions in 
// js. they are introduced in ecmascript (es6)
//and provide a more compact syntax compared to traditional funcion expressions

function greet(username)
{
    return `Hello ${username}`
}
console.log("prashanthi")

greet= username=>{  //if one param avoid parantheseis (username) and if no parameters ()
    return `Hello ${username}`
}
greet= username=>  //if one param avoid parantheseis (username) and if no parameters ()
     `Hello ${username}`


console.log(greet("Huxn"))
const double=n=>n*2;
console.log(double(100))



//ex
setTimeout(()=>{
    console.log("hello")
    setTimeout(()=>{
    console.log("hey")
    setTimeout(()=>{
        console.log("Namaste")
        setTimeout(()=>{
            console.log("hi")
            setTimeout(()=>{
                console.log("hola")
    },2000)
},2000)
    },2000)
},2000)
}

)