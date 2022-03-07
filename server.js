const express = require('express');

const app = express();

var path = require('path');

var skillsRouter = require('./routes/skills')

app.use(express.static(path.join(__dirname + '../public')));
app.set('views', path.join(__dirname + '/app/views'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    // this line redirects root to /skills
    res.redirect('/skills')
})

app.use('/skills', skillsRouter);

const port = process.env.PORT || 4000;

app.listen (port, () => {
    console.log(`Express-Dev-Skills is running on port ${port}`);
})