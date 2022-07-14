const fs = require('fs')

// function read
function readContact() {
    return JSON.parse(fs.readFileSync('./data/data.json', 'utf8'))
}

function saveContact(contacts) {
    fs.writeFileSync('data/data.json', JSON.stringify(contacts))
}

// function find
function findContact(nama) {
    const contacts = readContact()
    return contacts.find(contact => contact.nama === nama)
}

// add
function addContact(contact) {
    const contacts = readContact()
    contacts.push(contact)
    saveContact(contacts)
}

// duplicate
function checkDuplicate(value) {
    return findContact(value)
}

// filtered
function filteredContact(contacts, name) {
    return contacts.filter(contact => contact.nama !== name)
}

// delete
function deleteContact(nama) {
    const contacts = readContact()
    const newContacts = filteredContact(contacts, nama)
    saveContact(newContacts)
}

// update
function updateContact(contactBaru) {
    const contacts = readContact()
        // hilangkan contact lama yang namanya sama dengan oldnama
    const newContacts = filteredContact(contacts, contactBaru.namaLama)
        // hapus namaLama
    delete contactBaru.namaLama
        // tambahkan ke contact baru
    newContacts.push(contactBaru)
        // simpan ke data.json
    saveContact(newContacts)
}

if (!fs.existsSync('data')) fs.mkdirSync('data')
if (!fs.existsSync('data/data.json')) fs.writeFileSync('data/data.json', '[]', 'utf-8')

module.exports = { readContact, findContact, saveContact, addContact, checkDuplicate, deleteContact, updateContact }