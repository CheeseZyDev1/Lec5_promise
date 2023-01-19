function promiseTimeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    });
}
async function logRunningOperation(){
    return 42;
}
async function run(){
    console.log("start!!");
    await promiseTimeout(2000);
    const reponse = await logRunningOperation();
    console.log(reponse);
    console.log("Stop!!");
}

run();