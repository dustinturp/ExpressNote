const express = require('express');
const fs = require('fs');
const path = require('path');
const { db } = require('./db/db.json')
const app = express()
// npm run dev

app.use(express.static('public'));

const PORT = process.env.PORT || 3001;
// test connection
// app.get('/', (req, res) => {
//   res.send("Hello General Kenobi")
// });


// all
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// get notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

//get  /api/notes

app.get('/api/notes', (req, res) => {
  let results = db;
  if (req.query) {
    results = req.query, results;
  }
  res.json(results)
});


// post requests
app.post('/api/notes', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});




app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})