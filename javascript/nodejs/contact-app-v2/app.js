const yargs = require('yargs')
const { saveContact } = require('./contacts')


yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        noHp: {
            describe: 'Nomor Hp',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        saveContact(argv.nama, argv.email, argv.noHp)
    }
})

yargs.parse()