// spread operator

// memecah iterables menjadi singel element
// const siswa = ['Revaya', 'Harith', 'Rafael'];
// console.log(...siswa[0]);


// menggabungkan 2 array
// const siswa = ['Revaya', 'Nicky', 'Fanhansel'];
// const guru = ['Hondrat', 'Frans', 'Kisto'];
// const orang = [...siswa, ...guru];
// console.log(...orang);


// meng-copy array
// const siswa = ['Matthew', 'Dania', 'Eldina'];
// // const siswaLama = siswa;
// const siswaLama = [...siswa];
// siswaLama[0] = 'Rahmat';
// console.log(siswa);


// const lisiswa = document.querySelectorAll('li');
// // for (let i = 0; i < liNama.length; i++) {
// //     console.log(liNama[i].outerText);
// // }

// console.log(lisiswa);

// [...lisiswa].map(m => console.log(m.outerText));
// console.log([...lisiswa]);



const nama = document.querySelector('.nama');
const huruf = [...nama.outerText].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;