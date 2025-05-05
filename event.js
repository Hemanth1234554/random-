const EventEmmitter = require("events");

const CustEmit = new EventEmmitter();

CustEmit.on('responce',()=>{
    console.log("responce recieved");
})
CustEmit.on('responce',()=>{
    console.log("responce recieved second one");
})

CustEmit.emit('responce')