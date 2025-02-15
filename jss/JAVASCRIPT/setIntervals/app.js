const intervalId=setInterval(function()
{
    console.log(`this function is being executed at the interval`)
},1000)
setTimeout(function()
{
    clearInterval(intervalId)
    console.log(`cleared interval so stopped`)
},10000)