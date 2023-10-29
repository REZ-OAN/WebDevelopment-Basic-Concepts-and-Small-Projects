
const para = document.querySelector('#demo');

let worker;
function startWorker(){
    if( typeof Worker !=='undefined'){
        //worker available
        if(typeof worker=="undefined"){
            worker = new Worker('hang.js')
        }
        //listening for worker events/msg
        worker.onmessage = function(event){
          para.innerText = event.data;
        }
    }
    else{
        alert("Browser Don't Support The WorkerAPI");
    }
}

function stopWorker(){
    if(typeof Worker!=="undefined"){
        worker.terminate();
        worker=undefined;
    }
    else{
        alert("Browser Don't Support The WorkerAPI");
    }
}

