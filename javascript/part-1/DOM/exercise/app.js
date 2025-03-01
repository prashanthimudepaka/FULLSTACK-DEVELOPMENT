const first=document.querySelector(".first")
console.log(first.classList)

/*classlist
add()
remove()
toggle()*/
// first.classList.add("second")
//if u have class it will remove it if u dont have second class then it adds
first.classList.toggle("second")

//attributes
/*
href
val

*/
const a=document.querySelector("a")
console.log(a.href)
const input=document.querySelector("input")
//get attributes
// console.log(input.type  )
//set atributes
console.log(input.value="")

console.log(input.getAttribute("type"))

console.log(input.setAttribute("placeholder","passwrod"))




