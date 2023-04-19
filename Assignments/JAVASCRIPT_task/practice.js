// const data = [
//     {
//         name: 'Peter',
//         age: 99,
//         place: 'abc'
//     },
//     {
//         name: 'Loki',
//         age: 99,
//         place: 'abc'
//     },
//     {
//         name: 'Thor',
//         age: 99,
//         place: 'abc'
//     }
// ];
// // documnet.write(data[1].age);
// for(i=0; i<data.length;i++){
//     if(data[i].name=='peter'){
//         console.log(data[i])
//     }
// }

const data = [
    {
        name: "richa mam",
        age: 90,
        place: "abc"
    },
    {
        name: "peter",
        age: 70,
        place: "abcd"
    },
    {
        name: "sandhya",
        age: 25,
        place: "abcef"
    }
]


console.log(data[0].age);

for (let i = 0; i < data.length; i++) {
    if (data[i].name == "peter") {
        console.log(data[i], i);
    }
}

data.forEach((e, i) => {
    if (e.name === "sandhya") {
        console.log(e, i);
    }
})
// data.forEach((e)=>{
//     let a=prompt("Enter a name");
//     if(a==='Peter'){
//         console.log(a);
//        let b=10;
//         return b;
//     }
//     else{
//         console.log("Error")
//     }
// })