//the filter method is a built in array method  in js that allows you to create a new array
//containing elemnts that pass a certain condition. it provides a clean and concise way to filter
//out elements from an array based on a specified criteria

const songs=[
    {name:"Lucky you",duration:4.34},
    {name:"Lucky you",duration:3.23},
    {name:"Lucky you",duration:2.33},
    {name:"Lucky you",duration:4.34},
    {name:"Lucky you",duration:1.33},  
];
console.log(songs.filter(song=>
    song.duration>3
))
const computers=[
    {ram:4,hdd:100},
    {ram:8,hdd:24}
]
console.log(computers.filter((com)=>com.ram<16)
)

//ex:
const ages=[32,33,16,40]
function checkAdults(age)
{
    return age>=18
}
const res=ages.filter(checkAdults)
console.log(res)


