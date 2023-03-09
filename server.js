// DEPENDENCIES
const express = require('express');

// DATA
const todos = [
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

// ROUTES
// create
// POST

// read
// GET

// update
// PUT

// delete
// DELETE

// INIT
app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}`));