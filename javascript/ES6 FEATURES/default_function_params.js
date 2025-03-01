//default function parameters, introduced in es6,allow you to assign default values to function params.
//when a function is called and an argument is not provided for a parameter, the default value will be
//used instead. this feature makes it easier to handle cases where arguemnts might be missing or undefined.

function countto5(count=false)
{
    if(count==true)
    {
        for (let i = 0; i <=5; i++) {
            console.log(`count:${i}`);
            
        }
    }
}
countto5(true)