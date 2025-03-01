//the map() method creates a new array populated with the results of calling
// a provided function on every element in the calling array

let numbers=[1,2,3,4,5]
let double=numbers.map(num=>num*2)

console.log(double)

function myFunction(num)
{
    return num*10
}

const newArr=numbers.map(myFunction);
console.log(newArr)
