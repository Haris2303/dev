// callback

// contoh sederhana Synchronouss Callback
// function halo(nama) {
//     alert(`Halo ${nama}`);
// }

// function tampilPesan(callback) {
//     const nama = prompt('Masukkan nama anda: ');
//     return callback(nama);
// }

// console.log('Mulai');
// console.log(tampilPesan(nama => alert(`halo ${nama}`)));
// console.log('Selesai');


// const siswa = [{
//         "idSiswa": 1,
//         "nama": "Haris",
//         "jurusan": "Rekayasa Perangkat Lunak",
//         "email": "haris@smkn1sorong"
//     },
//     {
//         "idSiswa": 2,
//         "nama": "Revaya",
//         "jurusan": "Rekayasa Perangkat Lunak",
//         "email": "Revaya@smkn1sorong"
//     },
//     {
//         "idSiswa": 3,
//         "nama": "Harith",
//         "jurusan": "Teknik Komputer dan Jaringan",
//         "email": "harith@smkn1sorong"
//     },
// ]

// console.log('mulai');
// siswa.forEach(s => {
//     for (let i = 0; i < 1000000; i++) {
//         new Date();
//     }

//     return console.log(s.nama);
// });
// console.log('selesai');



// Asynchronous Callback
function getDataSiswa(url, success, err) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.status === 404) {
                err();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}

console.log('Mulai');
getDataSiswa('siswa.json', results => {
    const siswa = JSON.parse(results);
    siswa.forEach(s => console.log(s.nama))
}, err => console.log(err.responseText));
console.log('Selesai');