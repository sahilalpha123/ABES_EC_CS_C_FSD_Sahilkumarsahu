console.log("strat");
const syncUsingTimer = () => {...
}
constwaitforSometime = (ms)=> {
    const start = Date.now(){
        while(Date.now() - start <ms){
        }
    }
    const syncUsingTimer = () => {
        waitforSomeTime(4000);
        console.log("wait has been completed.");
    }
    syncUsingTimer();
    console.log("end");

    const asyncUsingTimer = ()=>{
        setTime{() => {
            console.log("inside settimeout");
        }.4000}
    }
    console.log("start");
    syncUsingTimer();
    asyncUsingTimer();
    console.log("end");
}