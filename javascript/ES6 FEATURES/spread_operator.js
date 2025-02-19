//the spread operator is a new addtion to the set of operators in js es6.
//it takes in an iterable(e.g: an array) and expands it into individual elements.
//the spread operator is commonly used to make shallow copies of js objects.
//using this operators makes the code concise and enhances its readablilty
//function,

function giveme4(a,b,c,d){
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
    console.log("d",d)

}
const colors=["red","yellow","green","teal"]
// giveme4(1,2,3,4)
giveme4(...colors)

// arrays
const strNums=['one','two','three']
const moreStrNums=['four','five','six']
const concat=[...strNums,...moreStrNums]
console.log(concat)

// let peoples=['huxn','alex']
// let allpeople=["kumar",peoples,"ma"]
// console.log('prashanthi marries',allpeople)


let peoples=['huxn','alex']
let allpeople=["kumar",...peoples,"ma"]
console.log(allpeople)



const obj1={x:1, y:2}
const obj2={z:3}
//shallow copy
const obj3={...obj1,...obj2}//shallow copy
// const obj3={obj1,obj2}//nested objects
console.log(obj3)

let o = { name: "John", details: { age: 25 } };
let obj0 = { ...o }; // Shallow copy

o.details.age = 30;  // Modifies the original object
console.log(obj0.details.age); // Output: 30


// Deep Copy
/*A deep copy creates a completely new object and recursively copies
all nested objects, ensuring that modifications do not affect the original object.
Using JSON.parse(JSON.stringify(obj)) (⚠️ Does not handle functions, undefined, or circular references)

Using structuredClone(obj) (Best for modern browsers)

Using Lodash's cloneDeep()
 */

let one = { name: "John", details: { age: 25 } };
// let two = JSON.parse(JSON.stringify(one)); // Deep copy

// two.details.age = 30;  
// console.log(one.details.age); // Output: 25 (unchanged)

let two= structuredClone(one); // Works for most modern browsers
console.log(`${JSON.stringify(obj1)}`);
//or
console.log(`modern clone deep copy :
    `,two)