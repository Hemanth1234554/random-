// const SayName = (name) =>{
//     console.log(`Name of the person is ${name}`);
// }

// module.exports=SayName
// console.log(SayName("Hemanth hi"))


const {writeFileSync} = require('fs')
for(let i=0;i<10000;i++){
    writeFileSync('./content/big.txt' , `hello world ${i}\n` , {flag : 'a'} )
}