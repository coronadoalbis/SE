const) => {
    setTimeout(() => { 
   let operationSuccessful = true;
    
    if (operationSuccessful) {
        resolve("la operacion fue exitosa!!");
    }else {
        reject("Fallo la operacion");
    }
}, 2000);

});

Promise
.then(successMessage) => {
    console.log(successMessage); 
});
.catch(errorMessage) => {
   console.log(errorMessage);
});
