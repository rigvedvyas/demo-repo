
const express = require('express');

const app = express();

app.get('/',(request,response)=>{
    response.send("Welcome.");
})

app.listen(4000,'0.0.0.0',()=>{

})
