// // object
// var data = {
//     id : 1,
//     name : "rashid",
//     gpa : 3.4,
//     isEngineer : true,
//     course : ["c++","java","python"],
//     District : "bajaur"
    
//     }

// }
// console.log(data.name)
// console.log(data.course)
// console.log(data.District)
// console.log(data.course[2]) // it will give you python
// const cannot be change its more use
// var is a global variable
// let is changeable
// function
// function work uniqualy
// function sum(a,b){
//     return a+b
    
// }
// const res = sum(10,30)
// console.log(res)
//  const sum = (a,b)=>{
//     return a+b;
//  }
// or
// const sum = (a+b)=> a+b;
// square function is one argument
//const square = (a)=>{
   // return a*a
//}
// or

//const square = a=>  a*a
// if else
// const marks = 12
// if(marks>33){
//     console.log("pass")
// }
// else if(marks===33){
//     console.log("just pass")

// }
// else{
//     console.log("fail")
// }

//switch statment
//number = 10
// switch(number){
//     case 10:
//     case 15:
//     case 20:
//     case 25:
//     console.log("its is less than are equal 25")
//     break;
//     default:
//         console.log("greater than 25")
// }

// const student = [
//     {
//         id:1,
//         name:"rashid",
//         age:20,
//         gpa:3.4,
//         isPass:true
//     },
//     {
//         id:1,
//         name:"tufail",
//         age:22,
//         gpa:3.8,
//         isPass:true
//     },
//     {
//         id:1,
//         name:"hasin",
//         age:24,
//         gpa:2.4,
//         isPass:false
//     }
// ]

// for(i=0; i<student.length; i++){
    //console.log(student[i].name)
    // if(student[i].isPass==true){
    // console.log(student[i].gpa)
//}
//}
// age  is graeter than 20 and Ispass
// if(student[i].isPass && student[i].age>20){
//     console.log(student[i].gpa)
//     console.log(student[i].name)
// }
// }
//const marks = [12,24,33,44,56,67,77,88,90,94]
// console.log(marks.length)
// for each
// one argument
// marks.forEach((value,index)=>
//     console.log(value,index)
// )
// if we get values greater than 50
//for each function
// marks.forEach((value)=>{
//     if(value>50){
//         console.log(value)
//     }
// })

// filter 
// use to extract value and make a new array
// fillter is one which is callback function and his 3 values
// const graeter = marks.filter((value=>value>50))
// console.log(graeter)
// map
// its imutable method
// in map has one callback function and has three values
// map actually change the data but not the original data
// map is operation
// const mp = marks.map((value)=>value*value)
// console.log(mp)

// indexof
// its a array method if you give value you will give its index
// its use for searching in a array if found give index if not present give you -1
// const marks = [22,44,66,77,88,199,44,22,11,222,134,235,778,567,456]

// const index = marks.indexOf(11)
// console.log(index)

// reverse method
// marks.reverse()
// console.log(marks)
// sort method
// marks.sort((a,b)=>a-b)
// console.log(marks)
// there is a problem it sort first first index
// sort is higher order function in whch has callback and has 2 argument current and previous
//
// reduce method
// use to add all array in give you is a single vallue
// reduce has two argument one is callback and one is initial value which has 0

// const sum = marks.reduce((c,p)=>c+p,0)
// console.log(sum)

// chaning
// sort all values
// get values greater than 50
// add 5 marks to all element
// sum all the values

// const sum = marks
// .sort((a,b)=a-b)
// .filter((v)=>v>50)
// .map((v)=>v+5)
// .reduce((c,p)=>c+p,0)

// console.log(sum)


