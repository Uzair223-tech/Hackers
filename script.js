


// async function Func1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Initializing Hacking....");
            
//         },1000);
//     })
// }
// async function Func2(){
//     let getfun1 = await  Func1();
//     document.writeln(`${getfun1}<br>`);
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Reading Your Files....");
            
//         },2000);
//     })
// }
// async function Func3(){
//     let getfun2 = await  Func2();
//     document.writeln(`${getfun2}<br>`);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Password Files Detected....");
            
//         },4000);
//     })
// }
// async function Func4(){
//     let getfun3 = await  Func3();
//     document.writeln(`${getfun3}<br>`);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Sending all Passwords and Files to the server....");
            
//         },5000);
//     })
// }
// async function Func5(){
//     let getfun4 = await  Func4();
//     document.writeln(`${getfun4}<br>`);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Cleaning Up....");
            
//         },7000);
//     })
// }

// async function main(){
//     let getfun5 = await Func5();
//     document.writeln(`${getfun5}<br>`);
//     document.writeln("Your system is successfully Hacked.....");
    
    
// }
// main();

const additem = async (item)=>{
    await  delay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
}
const delay = ()=>{
    return new Promise((resolve,reject)=>{
        let timeout = 1 + 6*Math.random();
        setTimeout(()=>{
            resolve();
        },timeout*1000);
    })
}

async function main(){
    let cl = setInterval(()=>{
        let last = document.body.lastElementChild;
        if(last.innerHTML.endsWith("...")){
              last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3);
        }else{

            last.innerHTML =  last.innerHTML + ".";
        }

    },100);

    let arr = ["Initializing Hacking","Reading Your Files","Password Files Detected","Sending all Passwords and Files to the server","Cleaning Up"];
    
    // console.log(Array.isArray(arr));
    
    // for (const [index , item] of arr.entries()) {
    //      console.log(`index:${index} value:${item}`);    
    // }
    
    for (const item of arr) {
          await additem(item);
    }
    await delay();
    clearInterval(cl);
}
main();
