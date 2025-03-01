//enhanced object literals, introduced in es6 are a set of enhancements to the syntax for defining objects
//in jsThese enhancements make it more convinient and concise to define object properties and methods
// function user(name, age, work)
// {
//     return{
//         name:name,
//         age:age,
//         work:work,
//     };
// }
function user(name, age, work)
{
    return{
        name,
        age,
        work,
        intro:()=>//funtion(){}
            console.log(  `my name is ${name} ${work}`)
        
    };
}
const prash=user("prash",19,"programmer")
console.log(prash.intro())
//ex:
// refactor es5 to es6(enhanced object literal)

// const a=1;
// const b=2;
// const c=3;
// function ob(a,b,c)
// {
// return {
//     a,
//     b,
//     c,
//     sum:()=>console.log(`sum=${a+b+c}`),
// }
// }
// obj=ob(1,2,3);

// console.log(` ${obj.sum()}`)

const lib={
    sum:(a,b)=> a+b,
    mult:(a,b)=> a*b,
};
console.log(lib.sum(1,2));
console.log(lib.mult(1,2));
