// let student ={
//     id:101,
//     name:"raj",
//     marks:80,
// }

// // let ans=JSON.stringify(student)
// // JSON.parse(ans);

// console.log(student["name"]);
// console.log(student.name);

// student.city="mathura";
// console.log(student);

// delete student.id;
// console.log(student);





// let student ={
//     id:101,
//     name:"raj",
//     marks:80,
//     address:{
//         city:"mathura",
//         pincode:57603
//     },

//     displayInfo: function(){
//     console.log(`my name is ${this.name} and  got marks ${this.marks}`)
// }
// }


// console.log(student.address.city);
// console.log(student.address.pincode);




// student.displayInfo();



let listofStudents=[
    {
        id:101,
        name:"rahul"
        ,marks:80,
        gender:"male"
    },
    {
        id:102,
        name:"aryan"
        ,marks:90,
        gender:"male"
    },
    {
        id:103,
        name:"anand"
        ,marks:80,
        gender:"male"
    },
    {
        id:104,
        name:"shiv"
        ,marks:80,
        gender:"male"
    },
    {
        id:105,
        name:"tomar"
        ,marks:80,
        gender:"male"
    }
]


// for of loop

for(let i=0;i<listofStudents.length;i++){
    console.log(`my id is ${listofStudents[i].id} and name is ${listofStudents[i].name} and  got marks ${listofStudents[i].marks}`)
}



// for each loop

for(let x of listofStudents){
    let ans=`my id is ${x.id} and name is ${x.name} and marks is ${x.marks}`
    console.log(ans)
}

let nameoflist=listofStudents