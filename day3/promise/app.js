
let promise = new Promise(function(resolve,reject){
    console.log("waite for promise");
    setTimeout(function(){
           let data ="promise is resolved,data mil gaya";
           let err = "promise is rejected, mai paise nahi dunga";
           resolve(data);
           reject(err);
    },2000)
})
promise.then(function(data){
    console.log(data);
}).catch(function(){
    console.log(err);
})

// console.log(promise);


