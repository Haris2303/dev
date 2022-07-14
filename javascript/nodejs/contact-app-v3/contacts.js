const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')

// membaca file json
function readContact() {
    return JSON.parse(fs.readFileSync('data/data.json', 'utf-8'))
}

// simpan pertanyaan
function saveContact(nama, email, noHp) {
    const contact = { nama, email, noHp }
        // baca file
    const contacts = readContact()

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

// list contact
function listContact() {
    const contacts = readContact()
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHp}`);
    })
}

function deleteContact(nama) {
    // readFile
    const contacts = readContact()
        // mencari nama yang sama pada contact
    const newContacts = contacts.filter(contact => contact.nama.toLowerCase() !== nama.toLowerCase())
    console.log(newContacts);
    if (contacts.length === newContacts.length) {
        console.log(chalk.red.bold(`${nama} tidak ditemukan!`))
        return false
    }
    fs.writeFileSync('data/data.json', JSON.stringify(newContacts), 'utf-8')
    console.log(chalk.green.bold(`contact ${nama} berhasil dihapus`))
}


// membuat folder data jika tidak ada
if (!fs.existsSync('./data')) fs.mkdirSync('./data')
if (!fs.existsSync('data/data.json')) fs.writeFileSync('data/data.json', '[]', 'utf8')


module.exports = { saveContact, listContact, deleteContact }