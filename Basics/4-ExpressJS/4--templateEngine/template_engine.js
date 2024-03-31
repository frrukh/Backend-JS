// WHAT IS TEMPLATE ENGINE?
    // it is a markup that converts into HTML later on.
    // also like html with super powers.
    // there are many template engines like put, handlebars ,ejs ,jade and jsx etc.
    // but we will use ejs.

//  WHY EJS?
    // because unlike others it is very similar to HTML.

// HOW TO SETUP IT?
    // to setup ejs we have to follow some steps:
        // 1) install ejs.
            // npm i ejs
        // 2) configure ejs.
            // app.set("view engine", "ejs");
        // 3) create a folder by name:
            // views
        // 4) make ejs files in it.
        // 5) in functions instead of res.send() use res.render()
            // this render will map the views folder directly. pass the file name in res.render() function without file extension.

const express = require('express');
const app = express();
// configuring ejs.
app.set("view engine", "ejs");
// configuring static files.
app.use(express.static("./public"));

app.get('/', (req, res)=>{
    res.render('index');
})


// HOW CAN WE PASS DATA INTO EJS?
    // we can pass a dictionary as a second argument of res.render() function in order to do so.

// HOW CAN WE ACCEPT IT INTO EJS?
    // we can use <%= %> enter dynamic value in ejs and in order order to get data that we sent, we can use this: <%= key %>
app.get("/data", (req, res)=>{
    res.render('data', {name: "Farrukh", age: 12});
})


// HOW CAN WE LINK STATIC FILES ?
    // to do so, you should follow the following steps :
        // 1) create a folder called public
        // 2) create three folders inside it (not essential):
            // images
            // stylesheet
            // javascripts
        // 3) configure the express static in index.js(main js) file:
            // app.use(express.static(./public))
        // 4) understand linking:
            // after doing this, url attribute of everything to link like css js or images will maps this folder. 

app.get('/style', (req, res)=>{
    res.render('cssfile')
})

// HOW CAN WE HANDLE THE ERRORS IN EXPRESS-JS?
    // 

app.listen(3000);