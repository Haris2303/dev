// file system
// const fs = require('fs')

// write synchronous
// fs.writeFileSync('data/data.txt', 'Hello World', err => {
//     if (err) throw err;
//     console.log('The file has been saved!')
// })

// write asynchronous
// fs.readFile('data/data.txt', 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// read
// console.log(fs.readFileSync('data/data.txt', 'utf8'))


// Readline
// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('Masukkan nama anda: ', nama => {
//     rl.question('Masukkan nomor telpon: ', noHp => {
//         const contact = { nama, noHp }
//         const file = fs.readFileSync('data/data.json', 'utf-8')
//         const contacts = JSON.parse(file)

//         contacts.push(contact)

//         fs.writeFile('data/data.json', JSON.stringify(contacts), err => {
//             if (err) throw err
//             console.log(err)
//         })

//         rl.close()
//     })
// })

const { writequestion, saveQuestion } = require('./contacts')

async function main() {
    const nama = await writequestion('Masukkan nama Anda: ')
    const email = await writequestion('Masukkan email Anda: ')
    const noHp = await writequestion('Masukkan nomor telepon: ')

    saveQuestion(nama, email, noHp)
}

main()