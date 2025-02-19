arr=[2,4,5,6]
let sum=0;
arr.forEach((i) => {

sum+=i;

}

);
console.log(`sum=${sum}`)
// console.log(s)



/*

//when we call the foreach helper we pass in anonymous callback function
//this function gets called one time for every element in the array
//whatever is inside the function that logic happens

const colors=["teal","blue","yellow"]
// colors.forEach((color) => {
//     console.log(color)
// });
colors.forEach(color =>  console.log(color));

const words=["hello","bye"]
const w=words.forEach((word,i,ar)=>{
    ar[i]=word[0].toUpperCase()+word.substring(1)
    console.log(ar[i])
})

console.log(w) */