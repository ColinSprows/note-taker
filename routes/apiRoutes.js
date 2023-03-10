// WHEN FRONTEND NEEDS TO GET DATA

const express = require('express')
const path = require('path')
const apiRouter = express.Router()
const tasks = require('../db/db')

// ROUTES
// create
// POST

apiRouter.get('/notes', (req, res) => {
    console.log(tasks)
    res.json(tasks)
    
});

apiRouter.post('/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});
// read
// GET

// update
// PUT

// delete
// DELETE

module.exports = apiRouter;