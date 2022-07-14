// function constructor
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // fungsi penumpang naik
    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    // fungsi penumpang turun
    this.penumpangTurun = function(namaPenumpang, bayar) {
        // jika penumpang kosong
        if(this.penumpang.length == 0) {
            alert('Penumpang kosong');
        } else {
            // telusuri seluruh penumpang
            for(var i = 0; i < this.penumpang.length; i++){
                if(this.penumpang[i] == namaPenumpang) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.kas;
                }
            }
        }
    }
}

var angkot1 = new Angkot("Haris", ['Rufei', 'Yohan'], [], 0);