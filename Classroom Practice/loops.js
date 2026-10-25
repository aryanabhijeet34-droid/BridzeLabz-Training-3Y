//  let arr=[1,2,3,4,5,6]
//         console.log(arr[2])
//         for(let i=0;i<=arr.length;i++){
//             console.log(arr[i])
//         }
      

function generateHexcolor(){
let arr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let hexColor="#";
for(let i=0;i<6;i++){
    let randomNum=Math.floor(Math.random()*16);
    hexColor +=arr[randomNum];
}
console.log(hexColor)
document.body.style.backgroundColor=hexColor;
}
generateHexcolor()

