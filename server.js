// DEPENDENCIES
const express = require('express');
const path = require('path');
const { api, html } = require('./routes');


// DATA
const tasks = [
    {
        task: "buy milk",
        priority: 3,
        complete: false
    }
]

// APP/PORT
const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARE
// express.json
app.use(express.json());
// express.urlencoded
app.use(express.urlencoded({extended: false}))
// express.static
app.use(express.static(path.join(__dirname, 'public')))


// ROUTERS
// api router
app.use('/api', api);
// html router
app.use('/', html);



// INIT
app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}`));