// Middleware is some lines of code that run between client request and server response.
// i.e request comes to middleware and after processing middleware send it to server.

    // middleware will run every time when ever request will come.

// HOW TO CREATE MIDDLEWARE IN NODEJS?
    // to do that we need to use express js.

const express = require('express');
const app = express();

// to write middleware code in express we'll follow the given syntax.

// when the request comes in middleware it will be executed and block the request.
// to continue the request we have to push it by using a function comes in third parameter.i.e next();
app.use((req, res, next)=>{
    console.log('done')
    // res.send('middleware pr aar gya hai!'); // after sending response next'll not work.
    // console.log('not-done') // but this will work.
    next();
})

app.get('/', (req, res)=>{
    res.send('done')
})

app.listen(2030)