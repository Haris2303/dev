const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')

// simpan pertanyaan
function saveContact(nama, email, noHp) {
    const contact = { nama, email, noHp }
        // baca file
    const contacts = JSON.parse(fs.readFileSync('data/data.json', 'utf-8'))

    // cek duplikat nama
    if (contacts.find(value => value.nama === nama)) {
        console.log(chalk.red.bold('Contact sudah terdaftar, gunakan nama lain!'))
        return false
    }

    // cek email
    if (!validator.isEmail(contact.email)) {
        console.log(chalk.red.bold('Email tidak valid'))
        return false
    }


    // cek nomor telepon
    if (!validator.isMobilePhone(contact.noHp, 'id-ID')) {
        console.log(chalk.red.bold('Nomor telpon tidak valid'))
        return false
    }

    // tambahkan / push
    contacts.push(contact)

    // menulis ke data.json
    fs.writeFileSync('data/data.json', JSON.stringify(contacts), 'utf-8')

    console.log(chalk.green.bold('Terima sudah memasukkan data'))
}


// membuat folder data jika tidak ada
if (!fs.existsSync('./data')) fs.mkdirSync('./data')
if (!fs.existsSync('data/data.json')) fs.writeFileSync('data/data.json', '[]', 'utf8')


module.exports = { saveContact }