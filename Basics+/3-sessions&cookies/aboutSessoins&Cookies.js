// Sessions:

    // 1) to use sessions first we need to install express session package.
        // command : npm i express-session
    // 2) then we have to initialize express session in app.js file.
        // 1)) require express session and save it in a variable at the top.
            // const session = require('express-session');
            // create call a app.use() function and inside this call that variable and pass an object while calling that variable,that object shoul like:
                /*
                {
                    resave : false, // means if the session is same it will not resave it.
                    saveUninitialized : false, // if that data is uninitialized it'll not  saved.
                    secret :'any Random Secret Key' // a random key on the basis of which the session will be encrypted.
                }
                 */

// Cookies:
    // 1) to use cookies first we need to install cookie-parser package.
        // cookie-parser comes with express-generator bydefault.
    // 2) then we have to setup the cookie parser.
        // the express-generator also seted it up for up.
    // both of above steps you can see in app.js file.
    
                