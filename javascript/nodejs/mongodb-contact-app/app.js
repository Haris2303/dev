const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const {body, validationResult, check} = require('express-validator')
const methodOverride = require('method-override')
const session = require('express-session')
const cookie = require('cookie-parser')
const flash = require('connect-flash')

require('./utils/db')
const Contact = require('./model/contact')
const cookieParser = require('cookie-parser')

// call app express
const app = express()
const port = 3000

// setup method override
app.use(methodOverride('_method'))

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
app.get('/', async (req, res) => {
    const mahasiswa = await Contact.find()
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

// Halaman form tambah data contact
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        title: 'Form Tambah Data Contact',
        layout: 'layouts/main'
    })
})

// Proses tambah data contact
app.post('/contact', [
    body('nama').custom( async value => {
        const duplicate = await Contact.findOne( {nama: value} )
        if (duplicate) {
            throw new Error('Nama sudah digunakan!')
        }
        return true
    }),
    check('email', 'Email tidak valid').isEmail(),
    check('nohp', 'No HP tidak valid!').isMobilePhone('id-ID')
    ], (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.render('add-contact', {
                title: 'Form Tambah Data Contact',
                layout: 'layouts/main',
                errors: errors.array()
            })
        } else {
            Contact.insertMany(req.body, (error, result) => {
                // kirimkan flash
                console.log(error);
                req.flash('msg', 'Data contact berhasil ditambahkan')
                res.redirect('/contact')
            })
        }
    })

// Proses delete contact
// app.get('/contact/delete/:nama', async (req, res) => {
//     const contact = await Contact.findOne({nama: req.params.nama})
//     if(!contact) {
//         res.status(404)
//         res.send('<h1>404</h1>')
//     } else {
//         Contact.deleteOne({ _id: contact._id}).then((result) => {
//             req.flash('msg', 'Data contact berhasil dihapus!')
//             res.redirect('/contact')
//         })
//     }
// })
app.delete('/contact', (req, res) => {
    Contact.deleteOne({nama: req.body.nama}).then(result => {
        req.flash('msg', 'Data berhasil dihapus!')
        res.redirect('/contact')
    })
})

// Halaman form edit data contact
app.get('/contact/update/:nama', async (req, res) => {
    const contact = await Contact.findOne({nama: req.params.nama})
    res.render('update-contact', {
        title: 'Form Ubah Data Contact',
        layout: 'layouts/main',
        contact
    })
})

// proses ubah data contact
app.put('/contact', [
    body('nama').custom( async (value, { req }) => {
        const duplicate = await Contact.findOne({nama: value})
        if(value !== req.body.namaLama && duplicate) throw new Error('Nama contact sudah digunakan')
        return true
    }),
    check('email', 'Email tidak valid').isEmail(),
    check('nohp', 'No HP tidak valid').isMobilePhone()
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.render('update-contact', {
            title: 'Form Ubah Data Contact',
            layout: 'layouts/main',
            errors: errors.array(),
            contact: req.body
        })
    } else {
        Contact.updateOne(
            {
                _id: req.body._id
            }, 
            { 
                $set: {
                    nama: req.body.nama,
                    email: req.body.email,
                    nohp: req.body.nohp
                }
            }
        ).then(result => {
            req.flash('msg', 'Data contact berhasil diubah!')
            res.redirect('/contact')
        })
    }
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

// jalankan server
app.listen(port, () => {
    console.log('Mongo Contact App | listening at http://localhost:', port);
})