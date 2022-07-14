const express = require('express')
const { readContact, findContact } = require('./partials/contacts')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 2307

// gunakan ejs
app.set('view engine', 'ejs')

app.use(expressLayouts)

// Built-in middleware
app.use(express.static('public'))

// index.html
app.get('/', (req, res) => {
    const mahasiswa = [{
            nama: 'Harith',
            email: 'haris@gmail.com'
        },
        {
            nama: 'Haris',
            email: 'haris@gmail.com'
        },
        {
            nama: 'Wahyuni',
            email: 'wahyuni@gmail.com'
        }
    ]
    res.render('index', {
        layout: 'layouts/main',
        nama: 'Haris',
        title: 'Halaman Home',
        mahasiswa
    })
})

// contact.html
app.get('/contact', (req, res) => {

    const contacts = readContact()

    res.render('contact', {
        layout: 'layouts/main',
        title: 'Halaman Contact',
        contacts
    })
})

app.get('/contact/:nama', (req, res) => {

    const contact = findContact(req.params.nama)

    res.render('detail', {
        title: 'Halaman Detail',
        layout: 'layouts/main',
        contact
    })

})

// about.html
app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main',
        title: 'Halaman About'
    })
})

// halaman detail

app.get('/product/:id', (req, res) => {
    res.send(`<h2>product dengan id = ${req.params.id} <br>
                  Merek = ${req.query.merek}
                </h2>`)
})

app.use('/', function(req, res) {
    res.status(404)
    res.send('404')
})

app.listen(port)