//template strings also known as template literals,are afeature in jsthat allows  you to create srings with  
//embedded expressions. they are denoted by backticks ``(it displays text as you type exactly) instead of single
//or double quotes. template strings provide a more flexible
//and concise way to construct strings, especially when they invlove variables or expressions
console.log(`${2+2}`)
console.log(`${["one","two","three"]}`)
function info()
{
    return  `my name is ..`

}
console.log(`${info}`)
console.log(`${info()}`)
const text=`hi
hello,
yes`
console.log(text)
