//destructuring allows us to "unpack" values from
//  data-structures(Arrays, object) into separate distinct variables
//ARRAY DESTRUCTURING
const foo=['one','two','three']
// console.log(foo[0])
const [one,two,three]=foo;
console.log(one)
console.log(two)

let a,b;
// [a=3,b=5]=["one","two"]
// console.log(a)
[a=2,b=3]=[]
console.log(a)

function ar(){
    return [1,2];
}
let x,y
[x,y]=ar()
console.log(`values of x and y ${x} , ${y}`)

function ex()
{
    return [1,2,3]
}

const [p, , q]=ex()
console.log(p)
console.log(q)
// console.log(r)

//asigning the rest of an array to a variable
const [c,...d]=["one","two","three",true,12,["one"]]
// console.log(c)
console.log(d)

// OBJECT DESTRUCTURING
//in object destructuring order doent matter but the name does

const student={name:"prash",position:"first"}
// console.log(student.name)

const {name,position}=student
console.log(position)
console.log(name)

//renaming the object literals
const num={s:100,t:200}
const {s:n1,t:n2}=num

// console.log(s) it wont work bcz we renamed it to n1
console.log(n1)
console.log(n2)

//OBJECT DESTRUCTURING AND REST OPERATOR

let {w,e,...rest}={w:12,e:13,c:30,d:11,f:10}
console.log(w)
console.log(rest)


//FUNCTION DESTRUCTURING 
const person={
    name:"joseph",
    age:23
}
/*
function printPersonInfo(p)
{
    console.log(`Name:${p.name}`)
}
printPersonInfo(person)
*/
function printPersonInfo({name,age})
{
    console.log(`Name:${name} age:${age}`)
}
printPersonInfo(person)

//rename property names as well as add new properties and use in functions

let options={
    title:"my tile",
    items:["it1","it2"],
}
function showMenu({
    title="untitled",width:w=12,h=13, items:[it1,it2]
}){
    console.log(`${title} ${w} ${h}`)
    console.log(it1)
    console.log(it2)
}
showMenu(options)

