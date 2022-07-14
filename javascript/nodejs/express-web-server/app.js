const express = require('express')
const app = express()
const port = 2307

// index.html
app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
})

// contact.html
app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', { root: __dirname })
})

// about.html
app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname })
})

app.get('/product/:id', (req, res) => {
    res.send(`<h2>product dengan id = ${req.params.id} <br>
                  Merek = ${req.query.merek}
                </h2>`)
})

app.use('/', function(req, res) {
    res.status(404)
    res.send('404')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})