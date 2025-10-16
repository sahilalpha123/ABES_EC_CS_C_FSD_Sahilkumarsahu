const waitFun = (time, message) => {
    return new Promise((resolve) =>{
    setTimeout(() => {
        console.log(message);
        resolve();
    },time)
    })
    
}
const orderCoffee = () => {
    waitFun(4000,"Make some order");
    .then(()=> waitFun(2000,"Brewing Coffee."))
    .then(()=> waitFun(3000,"Servicingg Coffee"));
    .then(()=> waitFun(1000,"Thankyou for the visiting"));
}