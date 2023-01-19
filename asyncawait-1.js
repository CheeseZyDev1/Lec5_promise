function promiseTimeout(ms){
    console.log('Asynchoronous work');
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    });
}
async function run(){
    console.log("start!!");
    await promiseTimeout(2000);
    console.log("Stop!!");
}

console.log('Before run');
run();
console.log('after run');