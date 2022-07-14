var penumpang = ['Haris', undefined, 'Andri'];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if(penumpang.length == 0) {
            // tambah penumpang di awal array
            penumpang.push(namaPenumpang);
            // kembalikan isi array & keluar dari function
            return penumpang.join(' - ');

    } else {
        // telusuri seluruh kursi dari awal
        for(var i = 1; i <= penumpang.length; i++) {
            // jika ada kursi kosong
            if(penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if(penumpang[i] == namaPenumpang) {
                console.log(namaPenumpang + ' sudah ada didalam angkot!');
                return penumpang;
            } else if(i == penumpang.length) {
                penumpang.push(namaPenumpang);
            }
        }
    }
}