// const {createReadStream} = require('fs')

// const str = createReadStream('./content/big.txt')

// str.on('data' ,(result)=>{
//     console.log(result,'utf');
// })

var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    const fileStream = fs.createReadStream('./content/big.txt','utf-8');
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})
.listen(5000)