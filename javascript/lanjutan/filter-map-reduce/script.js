// array angka
const angka = [3, -1, 6, 2, -5, 8, 9, 10, 4, 7]

// for
// const newAngka = [];
// for(let i = 0; i < angka.length; i++){
//     if(angka[i] >= 4){
//         newAngka.push(angka[i])
//     }
// }
// console.log(newAngka)

// filter
// const newAngka = angka.filter( a => a >= 4 )
// console.log(newAngka)

// map 
// const newAngka = angka.map( a => a * 2)
// console.log(newAngka)

// reduce
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue )
// console.log(newAngka);


// method chaining
const newAngka = angka.sort( (a, b) =>  a - b).filter( a => a >= 5).map( a => a * 3)
console.log(newAngka.join(' + '))
const hasil = newAngka.reduce( (accumulator, currentValue) => accumulator + currentValue)
console.log(hasil)