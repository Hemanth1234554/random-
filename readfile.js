const { readFile } = require("fs")
console.log('Started the first Task');

readFile('./content/casual.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log("Completed the First Task");
})
console.log('Starting the next task');
