const express = require('express')
const { readContact, findContact, addContact, checkDuplicate, deleteContact, updateContact } = require('./partials/contacts')
const expressLayouts = require('express-ejs-layouts')
const { body, validationResult, check } = require('express-validator')
const session = require('express-session')
const cookie = require('cookie-parser')
const flash = require('connect-flash')
const app = express()
const port = 2307

// gunakan ejs
app.set('view engine', 'ejs')

// third party middleware
app.use(expressLayouts)

// Built-in middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// konfigurasi flash
app.use(cookie('secret'))
app.use(session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

// index.html
app.get('/', (req, res) => {
    const mahasiswa = readContact()
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
        contacts,
        msg: req.flash('msg')
    })
})

app.get('/contact/add', (req, res) => {

    res.render('add-contact', {
        title: 'Form tambah contact',
        layout: 'layouts/main'
    })

})

app.post('/contact', [
    body('nama').custom(value => {
        const duplikatName = checkDuplicate(value)
        if (duplikatName) throw new Error('Nama sudah terdaftar')
        return true
    }),
    check('email', 'Email tidak valid!').isEmail(),
    check('noHp', 'Nomor telpon tidak valid!').isMobilePhone('id-ID')
], (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.render('add-contact', {
            title: 'Form tambah contact',
            layout: 'layouts/main',
            errors: errors.array()
        })
    } else {
        addContact(req.body)
            // kirimkan flash msg
        req.flash('msg', 'Data contact berhasil ditambahkan!')
        res.redirect('/contact')
    }


})


// proses ubah
app.post('/contact/update', [
    body('nama').custom((value, { req }) => {
        const duplikatName = checkDuplicate(value)
        if (value !== req.body.namaLama && duplikatName) throw new Error('Nama sudah terdaftar')
        return true
    }),
    check('email', 'Email tidak valid!').isEmail(),
    check('noHp', 'Nomor telpon tidak valid!').isMobilePhone('id-ID')
], (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.render('update-contact', {
            title: 'Form Ubah Data Contact',
            layout: 'layouts/main',
            contact: req.body,
            errors: errors.array()
        })
    } else {
        updateContact(req.body)
            // flash msg
        req.flash('msg', 'Data contact berhasil diubah')
        res.redirect('/contact')
    }

    // res.send(req.body)
})

app.get('/contact/update/:nama', (req, res) => {
    const contact = findContact(req.params.nama)

    res.render('update-contact', {
        title: 'Form Ubah Data Contact',
        layout: 'layouts/main',
        contact
    })
})


// delete data contact
app.get('/contact/delete/:nama', (req, res) => {

    deleteContact(req.params.nama)

    req.flash('msg', 'Data contact berhasil dihapus!')
    res.redirect('/contact')

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