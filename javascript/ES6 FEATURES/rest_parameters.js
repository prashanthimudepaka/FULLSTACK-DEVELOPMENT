//rest parameters syntac allows a function to accept an indefinite number of arguments 
//as an array, providing a way to represent variadic functions in js
function user(x,...userData)//function user(userData)
//user(...userdata,x)  this is invalid
{
    console.log(x)
    console.log(userData)
}
user("HuXn",19,"programming","football")
