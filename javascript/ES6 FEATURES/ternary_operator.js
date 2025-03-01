//ternary  operator in js is a consise way of writing conditional
//exps it is the only js operator that takes operands a condition followed by a question mark
// condition ? expifTrue : expIfFalse;
let password=2
function passwordChecker(ps)
{
    // if(ps==8)
    // {
    //     return `strong password`
    // }else {
    //     return 'password should be 8 characters'
    // }
return ps==8?`strong password`:'password should be 8 characters';
}
const res=passwordChecker(password)
console.log(res)
const age=12
const isAdult=age>=18?"is adult":"not an adult"
console.log(isAdult)