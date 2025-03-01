//the reduce() method applies the reducer function to each element of an array. 
// accumulating the results into a single value,
//it is often  used to perform calculations or
//  aggregations on array elements and simplify the array into a single value


//the reduce() method applies the reducer function to each element of an array,
//accumulating the results into a single value. It is often used to perform calculations or aggregations on
// array elements and simplify the array into a single

const p=[
    {name:"i am",
      age:19,
    },
    {}
]

es=[
    {name:"r",
    age:30
    },
    {name:"p",
        age:27,
    }
]
const oldestAge=es.reduce((p,c)=>(c.age>p?c.age : p),0)
console.log(oldestAge)
words=[
    "banana",
    "orange",
    "banana",
    "apple",
    "grape",
]
const wordFrequency=words.reduce((frequencyMap,word)=>
{
    frequencyMap[word]=frequencyMap[word]||0+1;
    return frequencyMap
},[])
console.log(wordFrequency)
const numbers=[1,2,3,4,5]


function calculateProduct(arr)
{
    return arr.reduce((accumulator,currentValue)=> accumulator*currentValue);
}
const product=calculateProduct(numbers)
console.log(product)



// ['one','two','three']
const sum=numbers.reduce((p,c)=>{

    console.log(`Previous:${p}`)
    console.log(`current:${c}`)
    return p+c;
},0)
/*
0+1=>1
1+2=>3
3+3=>6
6+4=>10
10+5=>15
*/
console.log(sum)

//the every() and some() are two built in array methods in js that allow you to check the elements of an array based
//on a given condition. Both methods methods take a callback function as an argument, which is applied to 
// each element of the array

// the every() method tests whether all elements in the array pass the condition specified by the provided 
//callback fuunction. it returns true if any element fails the condtion

//the some() method tests whether at least one element in the array passes the condition specified by the

//provided callback function. it returns true if the callback function returns true for at least one element,
//and false if no element passes the condition

const peoples=['huxn','jordan','alex']
res=peoples.every(poeple=>peoples.length==3
)
console.log(res)
const songs=[
    {name:"Lucky you",duration:4.34},
    {name:"Just like you",duration:3.23}
]
const everyRes=songs.every(song=>song.duration>3)
console.log(everyRes)
const someRes=songs.some((song)=>song.duration>3)
console.log(everyRes)
console.log(someRes)


let products=[
    {name:"checkers", category:"toys"},
    {name:"harry potte", category:"books"},
    {name:"iphone", category:"Electronics"},
    {name:"Learn php", category:"books"},
]
//do all products have a category of books?
let allProductBooks=products.some(
    product=> product.category=="books"  //false because not all category has books
)
console.log(allProductBooks)
