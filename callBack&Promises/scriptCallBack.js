// course enroll system
/**
 * enroll  -- apply
 * payment -- confirm
 * progress -- course completetion
 * course complete -- attain with some grade
 * then get certificate
 */
const paymentSuccess = true
const marks = 70
function enroll(callbackFunc){
    console.log("course enrollment is in progress");
    setTimeout(()=>{
        if(paymentSuccess){
            //next step
            // after 2sec what i will do
            callbackFunc();
        }
        else{
            console.log("Payment Failed");
        }
    },2000)
}
function progress(callbackFunc){
    console.log('Course On Progress');
    setTimeout(()=>{
        if(marks>=70){
            callbackFunc();
        }
        else {
            console.log('you could not attain 70% marks');
        }
    },3000)
}
function getCertificate(){
    console.log('preparing certificates');
    setTimeout(()=>{
        console.log("you're certified")
    },2000);
}
// case -1
// enroll(progress);
// progress(getCertificate);
// getCertificate();
 /** belows scequnce is not a perfect way to do that it gives 
 * unwanted results
 */
// case -2
// enroll(progress(getCertificate))
/**
 * this call also end up with error because enroll will end up with a result returned by progress(getCertificate)
 * call 
 * so that result will not be a function
 */
// case -3 using call back function to call progress(getCertificate)
enroll(()=>{
    progress(getCertificate)
});
// this configuration will run perfectly without any confusion and error

/// this is a simple problem with three stages 
// but if we had same problem with more than three or four stages
// the debugging process will be not easy thats why  promise comes in
