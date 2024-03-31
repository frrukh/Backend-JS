// WHAT IS EXPRESS JS?
    // Express is a Framework for Node.js.

// FOR WHICH PURPOSE IT IS USED?
    // it is mainly used for routing.
        // types of routes: GET POST PUT PATCH DELETE and more.


// install : npm i express
// run : node filename

// there is an issue to run server with node i.e if we make any changes in our code we have to restart the server, that's a huge problem.
// to solve this we can install a package called nodemon. it well automatically restart the server on changes.
// install : npm i nodemon
// it is preferred to install it globally so you can add a flag of global.
// install globally : npm i nodemon -g
// now we'll run like : nodemon filename
// if it not work you can run like : npx nodemon filename

const express = require('express') // importing express functionality.
const app = express() // creating an app.


// first parameter: req - Information (ip address, location etc) about request coming from client.
// second parameter: res - All things about the response from the server.
app.get('/', function (req, res) {
    console.log(req)
    res.send('Hello World')
})

app.get('/help', function (req, res) {
    res.send('How can I help you?')
})

// to use params we can add : in route and after that we can type variable for param name.
// to get it we can say req.params.variable_name.
app.get('/profile/:username', function (req, res) {
    res.send(`Hi there ${req.params.username} it is nodemon.`)
})

app.listen(3000) // this is the port.