// used to simplify and writing understandable codes usin promises
// async keyword before any function denotes that it's a asynchronous function
// and if we use async keyword then we don't need to return promise that we have defined
// js automatically understand that  

const paymentSuccess = true
const marks = 90
 function enroll(){
    console.log("course enrollment is in progress");
    const prom = new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(paymentSuccess){
            resolve();
        }
        else {
            reject('enrollment failed');
        }
       },2000);
    });
  return prom;
}
 function progress(callbackFunc){
    console.log('Course On Progress');
    const prom = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(marks>=70){
                resolve();
            }
            else {
                reject('you could not attain 70% marks');
            }
        },3000);
    });
   return prom;
}
async function getCertificate(){
    console.log('preparing certificates');
    return "you're certified"; // similar to return Promise.resolve("you're certified")
}
// we can write this
async function course(){
    try{
        await enroll();
        await progress();
        const res = await getCertificate();
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
course();
// instead of this
// enroll()
//     .then(progress) // for enroll
//     .then(getCertificate) // for progress
//     .then(function(value){    // for getCertificate
//         console.log(value);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
