const status = true; 
console.log('Task-1');
// console.log('Task-2'); // if task 2 is completed then task 4 can be executed
/// we can declare it using callback
// setTimeout(function(){
//     if(status){
//         console.log('Take action for task-4');
//     }
//     else{
//         console.log('Failed To Proceed Task-4');
//     }
// },2000);

//same code can be written using promise
/**
 * promise constructor want a function as a parameter 
 * that function wants two functions as a parameter
 * if the promise has been met what the function will do is defined in resolve
 * and if the promise has not met what the function will do is defined in reject
 */
// definition of a promise
const prom = new Promise(function(resovle,reject){
    setTimeout(function(){
        if(status){
            resovle('Take action for task-4');
        }
        else{
            reject('Failed To Proceed Task-4');
        }
    },2000);
});
// call to a promise
/**
 * then wants a function that has a parameter value it is the same thing what is the function resolve takes
 * catch wants a function that has a parameter err it is the same thing what is the function reject takes
 */
prom
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    }
    )
console.log('Task-3');

/// solving the course enrollment problem using promise
// here every async function has to return a promise

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
function getCertificate(){
    console.log('preparing certificates');
    const prom = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("you're certified")
        },2000);
    });
    return prom;
}

/**
 * enroll()
    .then(()=>{
        progress()
            .then(()=>{
                getCertificate()
                    .then()
                    .catch()

            })
            .catch((err)=>{
                console.log(err);
            })
    })
    .catch((err)=>{
        console.log(err);
    })
    but in this method again we encounter the callBack hell problem
    we can ommit the problem 
 */
enroll()
    .then(progress) // for enroll
    .then(getCertificate) // for progress
    .then((value)=>{    // for getCertificate
        console.log(value);
    })
    .catch((err)=>{
        console.log(err);
    })