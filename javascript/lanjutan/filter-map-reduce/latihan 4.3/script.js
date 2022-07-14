// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let videoJs = videos.filter( video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing2 video
    .map( durations => durations.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        // pecah 10:30 -> [10, 30]
        const parts = waktu.split(':').map( part => parseFloat(part))
        return (parts[0] * 60) + parts[1];
    })
// jumlahkan semua detik
    .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam, menit, detik
const jam = Math.floor(videoJs / 3600)
videoJs = videoJs - jam * 3600
const menit = Math.floor(videoJs / 60);
const detik = videoJs - menit * 60 

// simpan di DOM 
const pDurasi = document.querySelector('.total-durasi')
const pJmlVideo = document.querySelector('.jumlah-video')
const jmlVideo = videos.filter( video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length
pDurasi.textContent = `${jam} jam ${menit} menit ${detik} detik`
pJmlVideo.textContent = `${jmlVideo}`

console.log(detik);