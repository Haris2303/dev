const yargs = require('yargs')
const contacts = require('./contacts')


// command add contact
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
        contacts.saveContact(argv.nama, argv.email, argv.noHp)
    }
}).demandCommand();


// command list contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua contact',
    handler() {
        contacts.listContact()
    }
})


// command delete contact
yargs.command({
    command: 'delete',
    describe: 'Menghapus contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.deleteContact(argv.nama)
    }
})

yargs.parse()