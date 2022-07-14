// menggunakan jquery
// $.ajax({
//     url: 'http://www.omdbapi.com/?s=avengers&apikey=49cd3c81',
//     success: movies => console.log(movies)
// })


// menggunakan ajax dari javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?s=avengers&apikey=49cd3c81');
// xhr.send();


// menggunakan fetch
// const movies = fetch('http://www.omdbapi.com/?s=avengers&apikey=49cd3c81');
// console.log(movies);

// fetch('http://www.omdbapi.com/?s=avengers&apikey=49cd3c81')
//     .then(response => response.json())
//     .then(response => console.log(response));



// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi ( then / catch )



// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati!');
//     } else {
//         reject('Ingkar janji...');
//     }
// });

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK!' + response));


// contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));
// console.log('selesai');


const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Naruto',
            sutradara: 'Haris',
            pemeran: 'Harith, Reindy'
        }])
    }, 1000)
});


const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            temp: 27,
            kondisi: 'Cerah Berawan'
        }])
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca]).then(respone => {
    // return console.log(respone);
    const [film, cuaca] = respone;
    console.log(film);
    console.log(cuaca);
});