




































const t1 = performance.now();
let fragment = document.createDocumentFragment();
for (let i=1; i<=100;i++){
    let para = document.createElement
    ('p');
    para.textContent = "this is para" +i;
    fragment.appendChild(para);

}
document.body.appendChild(fragment);
const t2 = performance.now();
console.log("time taken :" +(t2-t1));










function changeText() {
    let first = document.getElementById('fpara');
    fpara.textContent = "teri-mkc";
}

let first = document.getElementById('fpara');

fpara.addEventListener('click', changeText);
// fpara.removeEventListener('click' , changeText)






// let fdiv = document.querySelector('#mydiv');

// let newElement = document.createElement("span");
// newElement.textContent = " Badhiya";
// fdiv.insertAdjacentElement('beforebegin', newElement);






















// // // // const i = abhi;
// // // for (let i = 10; i > 0; i--) {
// // //   if (i == 4) continue;
// // //   else console.log(i);
// // // }
// // let i=1;
// // while(i<=10){
// //     console.log("im struck")
// //     if(i==3){

    
// //         i++;
// //         continue;
// //     }
// //     else
// //     console.log("Starry The Explorer")
// //     i++;
// // }
// // let a = "abhi";
// // // let b = "jain";
// // let c = "Starry the explorer";
// //  let d = c.split(' ')
// //  console.log(d)
// // console.log(d.join('-'))
// // let squareNumber = (num) =>{
// //     let ans = num**2;
// //     return ans;
// // }
// // let ans = squareNumber(9);
// // console.log(ans

// // )
// // let obj = {
// //     name : "darshna",
// //     age :19,
// //     City:"Jamner",
// //  greet : function(){
// //     for(let i=0; i<10;i++){
// //         console.log("Starry The Explorer")
// //     }

// // }

// // }
// // obj.greet();
// let arr =[
//     function(a,b){
//         return a+b;
//     }
//     ,
//     function(a,b){
//         return a-b;
//     }
//     ,
//     function(a,b){
//         return a*b;
//     }
//     ,
// ]
// let first = arr[2];
// let ans = first(10,5);
// console.log(ans)

