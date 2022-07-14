// file system
const fs = require('fs')
const { stdin, stdout } = require('process')

// readLine
const readline = require('readline')

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})


// fungsi pertanyaan
async function writequestion(question) {
    return new Promise(resolve => {
        rl.question(question, value => {
            resolve(value)
        })
    })
}

// simpan pertanyaan
async function saveQuestion(nama, email, noHp) {
    const contact = { nama, email, noHp }
        // baca file
    const contacts = JSON.parse(fs.readFileSync('data/data.json', 'utf-8'))

    // tambahkan / push
    contacts.push(contact)

    // menulis ke data.json
    fs.writeFileSync('data/data.json', JSON.stringify(contacts), 'utf-8')

    console.log('Terima kasih sudah mengisih pertanyaan');

    rl.close()
}


// membuat folder data jika tidak ada
if (!fs.existsSync('./data')) fs.mkdirSync('./data')
if (!fs.existsSync('data/data.json')) fs.writeFileSync('data/data.json', '[]', 'utf8')


module.exports = { writequestion, saveQuestion }