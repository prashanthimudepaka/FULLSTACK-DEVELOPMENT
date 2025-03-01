//Map is a built in data structure introduced in es6 that allows you to store key-value pairs 
// where both the keys and values can be of any data type. It is similar to an object, 
// but with few key differences:

//-> keys can be of any data type: unlike objects where keys are limited to strings,
//symbols, Map allows you to use any data type as keys, including numbers, boolean, objects, 
// and even other Map instances

//
//Map is a built in data structure introduced in ES6 that allows you to store key-value pairs where both 
//the keys and values can be of any data type. It is simiar to an object, but with a few key differences:
//-> Keys can be of any data type: Unlike objects, where keys are limited to strings and symbols, 
// Map allows you to use any data type as keys, including numbers, boolean, objects, and even other Map instances,

//-> Maintains insertion order: Map preserves the order of key-value pairs as they were inserted, while object
//keys may not be guaranteed to be in a specific order.
//-> iteratio: Map provides built-in methods for easy iteration over its elements.

const mp=new Map()
const keyOne="string"
const keyTwo ={}
keyThree=function(){}
console.log(mp)
mp.set(keyOne, "value of key one")
mp.set(keyTwo,"value of key three ")
console.log(mp.keys())
console.log(mp.values())
for(let [key,value] of mp)
{
    console.log(`${key}--${value}`)
}
for(let key of mp.keys())
{
    console.log(key)
}
const map1=new Map()
map1.set("a",1)
map1.set("b",2)
map1.set("c",3)
console.log(map1.size)
const initialValues=[1,2,3]
const mySet=new Set()
mySet.add("apple")
mySet.add("banana")
console.log(mySet.has("banana"))
mySet.clear()


//Symbol
const mySymbol=Symbol("name")
const mySymbol1=Symbol("name")
console.log(mySymbol==mySymbol1)
const obj={}
    obj[mySymbol1]="value1"
    obj[mySymbol]="value 2"
    console.log(obj)

