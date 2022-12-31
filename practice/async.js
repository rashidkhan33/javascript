// const one = (callback)=>{
//     setTimeout(()=>{console.log("one")},5000)
//     callback()

//const { reject } = require("async")

// }

// const two = (callback)=>{
//     setTimeout(()=>{console.log("two")},3000)
//         callback()
// }

// const three = (callback)=>{
//     console.log("three")
//     callback()
// }

// // call back hell  
// one(()=>{
//     two(()=>{
//         three(()=>{
//             console.log("done")
//         })
//     })
// })

// callback function
//function will be argument pass

// es6
// promises
// const one = ()=>{
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{console.log("one")
//     resolve();

// },5000)
// })
// }

// const two = ()=>{
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{console.log("two")
// resolve();
// },1000)
    
//    })
  
// }

// const three = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("three")
//         resolve();

//     } ,3000)

// }

// one().then(()=>{
//     two().then(()=>{
//       three().then(()=>{
//             console.log("done ")
//         })
//     })
// })

// async await
 async function run(){
 await one();
await two ();
 await three();
 }
 run()

// Assync Function



