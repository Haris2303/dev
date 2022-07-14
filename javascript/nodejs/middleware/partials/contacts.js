const fs = require('fs')

// function read
function readContact() {
    return JSON.parse(fs.readFileSync('./data/data.json', 'utf8'))
}

// function find
function findContact(nama) {
    const contacts = readContact()
    return contacts.find(contact => contact.nama === nama)
}

if (!fs.existsSync('data')) fs.mkdirSync('data')
if (!fs.existsSync('data/data.json')) fs.writeFileSync('data/data.json', '[]', 'utf-8')

module.exports = { readContact, findContact }