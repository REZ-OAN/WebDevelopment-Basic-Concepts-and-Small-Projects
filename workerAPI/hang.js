// this code will encounter a hang
let i = 0
while(i<1000000000){
    i++;
}
postMessage(i);