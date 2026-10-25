console.log(true+3);
console.log(false+3);


let student = { name: "John", age: 20, grade: "A" };
for (let key in student) {
console.log(key + ": " + student[key]);
}


let a=[1,2,3,4,5]
for(let i=0;i=a.length;i++){
    console.log(i);

}



var globalVar = 'I am global';
function myFunction() {
console.log(globalVar); // Accessible here
}
myFunction();
console.log(globalVar);