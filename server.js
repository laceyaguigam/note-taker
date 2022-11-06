// these two are needed to express.js
const express = require('express')
const app = express();
const path =require('path')

const PORT = process.env.PORT || 3001;

const notes = require(`./db/db.json`);

//WHEN I open the Note Taker
//THEN I am presented with a landing page with a link to a notes page

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})


 app.get(`/api/notes`, (req, res) => {
   res.json(notes);
 });

app.post(`/api/notes`, (req, res) => {
notes.push(req.body)
res.json(notes)
});

//needed to make server listen 
app.listen(PORT, () => {
    console.log(`start!`)
});