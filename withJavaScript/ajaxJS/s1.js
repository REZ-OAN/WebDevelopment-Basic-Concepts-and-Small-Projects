function loadData(callBack) {
    // create a new request
    const xhr = new XMLHttpRequest();

    // what to do when response arrives
    xhr.onload = function(){
        callBack(this);
    };
       

    // prepare request - methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
    xhr.open("GET", "./data/data.txt");

    // add a request header
     xhr.setRequestHeader("MY_buddy", "JavaScript"); // must be opened when set Request Header
   
    // send request
    xhr.send();

    // abort
     //xhr.abort();
}
function callBack1(xhr){
        const container = document.getElementById("demo");
        container.innerHTML = xhr.responseText; // here this is xhr
        document.getElementById('bsdk').innerHTML = xhr.getResponseHeader('Date').toString() + "<br>" + xhr.getAllResponseHeaders().toString();
}
function callBack2(xhr){
        const container = document.getElementById("demo2");
        container.innerHTML = xhr.responseText; // here this is xhr
}