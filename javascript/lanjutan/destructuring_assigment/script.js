// 6.1 Destructuring Variable / Assignment

// Destructuring Array
// const perkenalan = ['Halo', 'Nama', 'Saya', 'Haris']
// const [salam, satu, dua, nama] = perkenalan
// console.log(salam)
// console.log(nama)


// skipping items
// const [salam, , , nama] = perkenalan
// console.log(salam)
// console.log(nama)


// swap items
// let a = 1
// let b = 2
// console.log(a)
// console.log(b);
// [a, b] = [b, a]
// console.log(a)
// console.log(b)


// return value pada function
// function coba() {
//     return [1, 2]
// }

// const [a, b] = coba();
// console.log(a);


// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);


// Destructuring Object
// const mhs = {
//     nama: 'Haris',
//     umur: 18
// }

// const { nama, umur } = mhs;
// console.log(nama);
// console.log(umur);


// Assignment tanpa deklarasi object
// ({ nama, umur } = { nama: "Haris", umur: 18 });
// console.log(nama);


// Assign ke variabel baru
// const mhs = {
//     nama: "Haris",
//     umur: 18
// }

// const { nama: n, umur: u } = mhs;
// console.log(n);


// Memberikan default value
// const mhs = {
//     nama: "Haris",
//     umur: 18,
//     email: 'haris@gmail.com'
// }

// const { nama, umur, email = 'emaildefault@gmail.com' } = mhs;
// console.log(email);


// memberikan nilai default + assign ke variabel baru
// const mhs = {
//     nama: "Haris",
//     umur: 18,
//     email: 'haris@gmail.com'
// }

// const { nama: n, umur: u, email: e = 'emaildefault@gmail.com' } = mhs;
// console.log(e);


// Rest parameter
// const mhs = {
//     nama: "Haris",
//     umur: 18,
//     email: 'haris@gmail.com'
// }

// const { nama, ...values } = mhs;
// console.log(nama);
// console.log(values);


// mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//     id: 12345,
//     nama: "Haris",
//     umur: 18,
//     email: 'haris@gmail.com'
// }

// function getIdMhs({ id }) {
//     return id;
// }

// console.log(getIdMhs(mhs));



// 6.2 Destructuring function

// function perjumlahPerkalian(a, b) {
//     return [a + b, a - b, a * b];
// }

// const kurang = perjumlahPerkalian(2, 3)[1];
// const tambah = perjumlahPerkalian(2, 3)[0];

// const [tambah, kurang, kali] = perjumlahPerkalian(2, 3);
// console.log(tambah);


// function aritmatika(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const { kali, kurang, tambah, bagi } = aritmatika(2, 3);
// console.log(tambah);



// destructuring object function
// const mhs1 = {
//     nama: "Haris",
//     kelas: "12 RPL 2",
//     umur: 18,
//     email: "haris@gmail.com"
// }

// function cetakMhs(nama, kelas, umur, email) {
//     return `Halo nama saya ${nama}, saya berumur ${umur} tahun. Saya dari kelas ${kelas}, email saya adalah ${email}`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.kelas, mhs1.umur, mhs1.email));

// function cetakMhs(mhs) {
//     return `Halo nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun. Saya dari kelas ${mhs.kelas}, email saya adalah ${mhs.email}`;
// }

// console.log(cetakMhs(mhs1));

// function cetakMhs({ nama, kelas, umur, email }) {
//     return `Halo nama saya ${nama}, saya berumur ${umur} tahun. Saya dari kelas ${kelas}, email saya adalah ${email}`;
// }

// console.log(cetakMhs(mhs1));