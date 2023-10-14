function sendRequest(method,url,data){
    /**
     * to use the response we have to sent a promise
     */
    const promise = new Promise((resolve,reject)=>{
            // create request
            const xhr = new XMLHttpRequest();
            // accepting response
            xhr.onload = ()=>{
                if(xhr.status >=400){
                    reject('Network Connection Error code '+ xhr.status);
                }
               resolve(xhr.response); 
            };
            xhr.onerror = ()=>{
               reject('Network Connection Not Established');               
            }
            // open for the url
            xhr.open(method,url);
            /**
             * normally the response is get as text string if we want to get the reponse as json
             * then have to use .responseType = "json"
             * and the responseText must be ommited 
             * and use response
             */
            xhr.responseType = 'json';
            // sending request
            if(data)
                xhr.send(data);
            else 
                xhr.send();
        });
   return promise;
}
async function getData(){
    const container = document.querySelector('#getData');
    try{
        const response = await sendRequest('GET','https://jsonplaceholder.typicode.com/comments/1');
        let txt = "";
        for (let x in response) {
        txt += response[x] + " ";
        };
        container.innerHTML = txt;
    }catch(err){
        container.innerHTML = err.toString();
    }
   
}
async function sendData(){
    const container = document.querySelector('#sendData');
    try{
        const response = await sendRequest('POST','https://jsonplaceholder.typicode.com/posts',JSON.stringify({
        title: 'hola mola',
        body: 'hello mello',
        userId: 'cyborg_p',
      }));
      let txt = "";
        for (let x in response) {
        txt += response[x] + " ";
        };
        container.innerHTML = txt;
    }catch(err){
        container.innerHTML = err.toString();
    }
   
}
const getBtn = document.querySelector('#get');
const sendBtn = document.querySelector('#send');

getBtn.addEventListener('click',getData);
sendBtn.addEventListener('click',sendData);