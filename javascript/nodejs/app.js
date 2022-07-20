const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const cookie = require('cookie-parser')
const flash = require('connect-flash')

require('./utils/db')
const Contact = require('./model/contact')
const cookieParser = require('cookie-parser')

// call app express
const app = express()
const port = 3000

// setup ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Konfigurasi flash
app.use(cookieParser('secret'))
app.use(
    session({
        cookie: { maxAge: 6000}, 
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
)
app.use(flash())


// Halaman home
app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: "Haris",
            email: "haris@gmail.com"
        },
        {
            nama: "Harith", 
            email: "harith@gmail.com"
        }
    ]
    res.render('index', {
        layout: 'layouts/main',
        nama: 'Haris',
        title: 'Halaman Home',
        mahasiswa
    })
})


// Halaman about
app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main',
        title: 'Halaman About'
    })
})


// Halaman Contact
app.get('/contact', async (req, res) => {

    // Contact.find().then(result => {
    //     res.send(result)
    // })

    const contacts = await Contact.find()

    res.render('contact', {
        layout: 'layouts/main',
        title: 'Halaman Contact',
        contacts,
        msg: req.flash('msg')
    })
})


// Halaman Detail
app.get('/contact/:nama', async (req, res) => {

    const contact = await Contact.findOne({ nama: req.params.nama })

    res.render('detail', {
        title: 'Halaman Detail',
        layout: 'layouts/main',
        contact
    })

})


app.listen(port, () => {
    console.log('Mongo Contact App | listening at http://localhost:', port);
})