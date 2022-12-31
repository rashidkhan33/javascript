// // object
 const product = [
     {
    id:1,
    name:"rashid",
    rolleno:201196,
    gpa:3.9,
    isPass:true,
    semester:"software engineering"


 },
 {
    id:2,
    name:"tufial",
    rolleno:201167,
    gpa:2.0,
    isPass:false,
    semester:"software engineering"


 },
 {
    id:3,
    name:"habib",
    rolleno:201168,
    gpa:3.6,
    isPass:true,
    semester:"software engineering"


 },
 {
    id:1,
    name:"amjad",
    rolleno:201187,
    gpa:1.0,
    isPass:false,
    semester:"software engineering"


 },
 {
    id:1,
    name:"hasin",
    rolleno:201188,
    gpa:4.0,
    isPass:true,
    semester:"software engineering"
}
  ]
 
 //console.log(product[0])
//  for(i=0; i<product.length; i++){
//     if(product[i].isPass==false){
//       console.log("name",product[i].name)
//       console.log("rolleno",product[i].rolleno,"shrm karu")

//    }
//  }
// for(i=350; i<500; i++){
//    if(i%2==0){
//       console.log(i,": even")
      
//    }
//    else{
//       console.log(i,": odd")
//    }
// }
// for(i=0; i<product.length; i++){
//    if(product[i].isPass && product[i].gpa>=2){
//       console.log(product[i].name,product[i].rolleno,"pass")
//    }
//    else{
//       console.log(product[i].name,"fail")
//    }

// }
// array method
// let list = [12,44,55,66,88,33,22,66,77,888,54,3344,677,99,91]
// console.log(list.length)
// console.log(typeof(list))
// console.log(typeof(product))
// //foreach
//  list.forEach((value)=>value)
// console.log(list)

// //filter
// const fil = list.filter((value)=>value>50)
//    console.log(fil)

// // map
// const ma = list.map((value)=>value+10)
// console.log(ma)

// // reduce
// const re = list.reduce((c,p)=>c+p)
// console.log(re)

// //sorting
// const sor = list.sort((a,b)=>a-b)
// console.log(sor)

// array method
//  let a="rashid"
//  let a1 = "khan"
//  let result = a.concat(a1)
//  console.log(result)

//  let text = [1,2,3]
//  let text1 = [44,55,66]

//  let sum = text.concat(text1)
//  console.log(sum)

// pop
// delete the last element from array
// let a = [1,2,3,4]
// a.pop()
// console.log(a)

// push => add element in the last
// let p = [1,2,3]
// p.push(55)
// console.log(p)

//unshift
// unshift add new element in array and give a new length
// let s = [22,3,5,77,88]
// s.unshift(111)
// console.log(s)
//shift
// delete the first element and give a new length
//  let se = [33,44,66,77]
//  se.shift(33)
// console.log(se)


// changing element by index

// let i = [1,3,4,56,78,99,6]

// i[2]=100
// console.log(i)

// delete element by index method
// let d = [1,2,3,4,5]
//  delete d[2]
//  console.log(d)

// splice
// remove the element from array

// let spl = [1,2,3,4]
// spl.splice(0,4)
// console.log(spl)

// slicing
// let arr= [ 1,2,3,4,5,6,7,8,9]

// let sli = arr.slice(1,4) 
// console.log(sli)

// the slice method make a new array 

// convert to string
// let rashid = [1,2,3,4,5,6,7]
// rh = rashid.toString()
// console.log(rh)
// console.log(typeof(rh))

// let m = [12,33,55,77,555]
// m.indexOf(2)
// console.log(m)

//console.log(product)
// array method\
// for each
// product.forEach(value=>console.log(value))
// product.forEach((value,index)=>{
//      console.log(value,index)
// })
// sorting
 //let list = [22,44,112,44,55,66,77,88,667,441,1334]
//  sot = list.sort((a,b)=>a-b
    
//  )
//  console.log(sot);

// filter
// const fil = list.filter((value)=>value>50

// )
// console.log(fil)

 //const index = list.indexOf(77)
// const fi = list.filter((value,i)=> i>=index)
// console.log(fi)

//findindexoff
// const bonus = list.map((value)=>value+5)
// console.log(bonus)

// console.log(product.map(v=>v.id+5))
// console.log(product.map(v=>v.rolleno+1))
// console.log(product.map(value=>value.name+"khan"))

// list[3]="rashid khan"
// console.log(list)

// decending method
// sor = list.sort((a,b)=>b-a)
// console.log(sor)
//reduce
// let re = list.reduce((c,p)=>c+p


// )
// console.log(re)
// chaining
// const sr =list
// .sort((a,b) => a-b)
// .filter(v => v > 50)
// .map(v => v+5)
// .reduce((c,p) => c+p,0)
// console.log(sr)
