const disp = document.querySelector('#display');

async function getData(){
    // this will give us a response object
    /**
     * another implementation
     * fetch("http://127.0.0.1:5500/fetchAPI/data/data.txt")
     *                                  .then((res)=>res.text())
     *                                  .then((data)=>{
     *                                      disp.innerText = data;    
     *                                  });
     */
    const fetchedData = await fetch("http://127.0.0.1:5500/fetchAPI/data/data.txt");
    const data = await fetchedData.text();
    disp.innerHTML=data;
    
}