// WEB WORKER 

self.onmessage= event =>{
    let x = consumingFunction();
    self.postMessage(x); 
}

function consumingFunction(){
    let result =0;
    for(let i =0; i <1000000000; i++){
        result += 1;
    }
}