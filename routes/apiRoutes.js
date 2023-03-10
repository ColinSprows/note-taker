// WHEN FRONTEND NEEDS TO GET DATA
const uuid = require('uuid');
const fs = require('fs');
const express = require('express');
const path = require('path');
const apiRouter = express.Router();
const tasks = require('../db/db');

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
    const { title, text } = req.body
    const newTask = { title, text, id: uuid.v4(), }
    tasks.push(newTask)
    const tasksList = JSON.stringify(tasks , null, 2);
    fs.writeFile('./db/db.json', tasksList , (err) =>
    err ? console.error(err) : console.log(`Review for ${newTask.title} has been added`)
  )
});
// read
// GET

// update
// PUT

// delete
// DELETE
apiRouter.delete('/notes/:id', (req, res) => {
    const id = req.params.id
    const taskID = tasks.findIndex(task => task.id === parseInt(id));
    tasks.splice(taskID, 1);
    fs.writeFile('./db/db.json', JSON.stringify(tasks), (err) =>
      err ? console.error(err) : console.log(`Note ${taskID} deleted.`)
    )
    res.end(); 
})

module.exports = apiRouter;