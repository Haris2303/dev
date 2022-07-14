const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 2307

// gunakan ejs
app.set('view engine', 'ejs')

app.use(expressLayouts)

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
    res.render('contact', {
        layout: 'layouts/main',
        title: 'Halaman Contact'
    })
})

// about.html
app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main',
        title: 'Halaman About'
    })
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

app.listen(port)