

function processdata(records){

    console.log(records)
    
    }
    
    
function processreponse(res){
    
        let datapromise =res.json ()
        datapromise.then(processdata)
        
        }
    
    
    let promise = fetch ("https://jsonplaceholder.typicode.com/posts/1/comments")
    
    promise.then(processreponse) 
    
    //the then - it will have to wait until the data comes back
    
    //(if you called the processreponse function before the it would do it before the data came back)