// const nama = 'Haris'
// const umur = 18

// function coba(strings, ...values) {
//     // let result = ''
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // })
//     // return result

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
// }

// const str = coba `Halo nama saya ${nama}, saya ${umur} tahun.`
// console.log(str)



// Highlight
const nama = 'Haris'
const umur = 18
const email = 'haris@gmail.com'

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="highlight">${values[i] || ''}</span>`, '')
}

const str = highlight `Halo nama saya ${nama}, saya ${umur} tahun. dan email saya adalah ${email}`
document.write(str)