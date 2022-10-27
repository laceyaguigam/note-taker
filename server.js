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

//WHEN I click on the link to the notes page
//THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title 

app.post(`/api/notes`, (req, res) => {
notes.push(req.body)
res.json(notes)
});

//WHEN I enter a new note title and the note’s text
//THEN a Save icon appears in the navigation at the top of the page

//WHEN I click on the Save icon
//THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

//WHEN I click on an existing note in the list in the left-hand column
//THEN that note appears in the right-hand column

//WHEN I click on the Write icon in the navigation at the top of the page
//THEN I am presented with empty fields to enter a new note title and the note’s

//needed to make server listen 
app.listen(PORT, () => {
    console.log(`start!`)
});