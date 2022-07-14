// Rest Parameter

// function myFunc(a, b, ...values) {
//     return `a = ${a}, b = ${b}, values = ${values}`
// }

// console.log(myFunc(1, 2, 3, 4, 5));


// menghitung total
// function total(...angka) {
// console.log(arguments);
// variabel hasil
// let hasil = 0;
// for (const a of angka) {
//     hasil += a;
// }

// reduce
// return angka.reduce((hasil, i) => hasil + i)
// }

// console.log(total(1, 2, 3, 4, 5));


// array destructuring
// const kelompok1 = ['Haris', 'Revaya', 'Wahyunii', 'Eldina', 'Matthew', 'Lasma'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota.join(', '));



// object destructuring
// const teamML = {
//     ketua: 'Haris',
//     mage: 'Alfian',
//     marksman: 'Rehan',
//     assasin: 'Harith',
//     tank: 'Revaya',
//     cadangan: {
//         marksman: 'Haris',
//         fighter: 'Feri'
//     }
// }

// const { ketua, ...team } = teamML;

// console.log(team);



// contoh
// filtering
// function filterBy(type, ...values) {
//     return values.filter(v => typeof v === type);
// }

// console.log(filterBy('string', 1, 4, 'Haris', true, 5, false, 'String', 4.6));