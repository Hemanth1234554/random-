// const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end("Welcome to Home Page")
//     }
//     else if (req.url === '/about') {
//         res.end("This is the About page")
//     }
//     else {

//         res.end(`
//             <h1>Ooops!</h1>
//             <p>THe page is not found</p>
//             <a href="/">back to home page</a>
//             `)
//     }
// })-+

// server.listen(5000)


const http = require('http')
const server = http.createServer((req,err)=>{
    console.log('request event');
})

server.listen(5000,()=>{
    console.log('Server listening on port 5000');
})