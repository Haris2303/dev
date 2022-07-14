// // object literal
// let mahasiswa = {
//     nama: "Haris",
//     energi: 10,
//     makan: function(porsi){
//         this.energi += porsi;
//         return console.log(`Selamat makan ${this.nama}`);
//     }
// }

// let mahasiswa2 = {
//     nama: "Andri",
//     energi: 15,
//     makan: function(porsi){
//         this.energi += porsi;
//         return console.log(`Selamat makan ${this.nama}`);
//     }
// }


// function deklarasi
// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama,
//     mahasiswa.energi = energi,
//     mahasiswa.makan = function(porsi) {
//         mahasiswa.energi += porsi;
//         return console.log(`Selamat makan ${mahasiswa.nama}`)
//     }
//     mahasiswa.tidur = function(jam){
//         mahasiswa.energi += jam * 2;
//         return console.log(`Selamat Tidur ${mahasiswa.nama}`);
//     }
//     return mahasiswa;
// }

// let mahasiswa1 = Mahasiswa('Haris', 10);
// let mahasiswa2 = Mahasiswa('Andri', 20);



// constructor function
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function(porsi) {
//         this.energi += porsi;
//         return console.log(`Selamat makan ${this.nama}`)
//     }
//     this.main = function(jam){
//         this.energi -= jam * 2;
//         return console.log(`Selamat Bermain ${this.nama}`);
//     }
//     this.tidur = function(jam){
//         this.energi += jam * 2;
//         return console.log(`Selamat Tidur ${this.nama}`);
//     }
// }

// let mahasiswa1 = new Mahasiswa('Haris', 20);



// menggunakan object.create() seperti inheritance
// cara biasa
// const methodMahasiswa = {
    
//     makan : function(porsi) {
//         this.energi += porsi;
//         return console.log(`Selamat makan ${this.nama}`)
//     },
//     main : function(jam){
//         this.energi -= jam * 2;
//         return console.log(`Selamat Bermain ${this.nama}`);
//     },
//     tidur : function(jam){
//         this. energi += jam * 2;
//         return console.log(`Selamat Tidur ${this.nama}`);
//     }
// }

// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
//     mahasiswa.tidur = methodMahasiswa.tidur;
//     return mahasiswa;
// }

// let mahasiswa1 = Mahasiswa('Haris', 10);

// Used Object.create();
// const methodMahasiswa = {
    
//     makan : function(porsi) {
//         this.energi += porsi;
//         return console.log(`Selamat makan ${this.nama}`)
//     },
//     main : function(jam){
//         this.energi -= jam * 2;
//         return console.log(`Selamat Bermain ${this.nama}`);
//     },
//     tidur : function(jam){
//         this. energi += jam * 2;
//         return console.log(`Selamat Tidur ${this.nama}`);
//     }
// }

// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
// }

// let mahasiswa1 = Mahasiswa('Haris', 10);


// // used prototype
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return console.log(`Selamat makan ${this.nama}`)
// }
// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam * 2;
//     return console.log(`Selamat Bermain ${this.nama}`);
// }
// Mahasiswa.prototype.tidur = function(jam){
//     this. energi += jam * 2;
//     return console.log(`Selamat Tidur ${this.nama}`);
// }

// let mahasiswa1 = new Mahasiswa('Haris', 10);


// versi class
class Mahasiswa {
    // constructtor
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return console.log(`Selamat Makan ${this.nama}`);
    }

    main(jam){
        this.energi -= jam;
        return console.log(`Selamat Main ${this.nama}`);
    }

    tidur(jam){
        this.energi += jam * 2;
        return console.log(`Selamat Tidur ${this.nama}`);
    }
}

let haris = new Mahasiswa('Haris', 10);
let andri = new Mahasiswa('Andri', 20);