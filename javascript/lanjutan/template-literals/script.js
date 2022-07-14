// multi line
// console.log(`String 1
// String 2`)


// embedded Expressions
// console.log(`${1 + 2}`)
// console.log(`${alert('Hello World')}`)
// const x = 11
// console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganjil'}`)


// HTML Fragments
// const mhs = {
//     nama: "Haris",
//     umur: 18,
//     email: 'Haris23@gmail.com'
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.email}</span>
// </div>`


// looping 
// const siswa = [{
//         nama: "Haris",
//         jurusan: "Rekayasa Perangkat Lunak"
//     },
//     {
//         nama: "Revaya",
//         jurusan: "Rekayasa Perangkat Lunak"
//     },
//     {
//         nama: "Harith",
//         jurusan: "Teknik Komputer dan Jaringan"
//     }
// ]


// document.write(`<div class="siswa">
//     <h2>List Siswa</h2>
//     ${siswa.map( s => `
//         <ul>
//             <li>${s.nama}</li><li>${s.jurusan}</li>
//         </ul>`).join('')}
// </div>`)


// Conditionals
// ternary
// const siswa = [{
//         nama: "Eldina",
//         jurusan: "Rekayasa Perangkat Lunak",
//         agama: "Kristen"
//     },
//     {
//         nama: "Wahyuni Riyadi",
//         jurusan: "Rekayasa Perangkat Lunak",
//         agama: "Islam"
//     },
//     {
//         nama: "Lapu Lapu",
//         jurusan: "Perancangan Game Virtual",
//     }
// ]

// document.body.innerHTML =
//     `<div class="siswa">
//     <h2>List Siswa</h2>
//     ${siswa.map( s => `<ul>
//         <li>Nama : ${s.nama}</li>
//         <li>Jurusan : ${s.jurusan}</li>
//         <li>Agama : ${(s.agama) ? s.agama : 'Atheist'}</li>
//     </ul>`).join('')}
// </div>`



const player1 = {
    nickname: "Papoy",
    rank: "Master",
    hero: ["Miya", "Zilong", "Thamuz", "Freya", "Argus", "Yu Zhong"]
}

function cetakHero(hero) {
    return `<ol>
        ${hero.map(h => `<li>${h}</li>`).join('')}
    </ol>`
}

const el = `<div class="player">
    <h2>${player1.nickname}</h2>
    <h3>Rank : ${player1.rank}</h3>
    <h4>List Hero :</h4>
    ${cetakHero(player1.hero)}
</div>`

document.body.innerHTML = el;