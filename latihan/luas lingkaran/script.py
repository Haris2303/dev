# Menghitung luas lingkaran
# rumus luas lingkaran -> phi * r * r

# fungsi luas lingkaran
def luasLingkaran():
    # inputan diameter dari user
    diameter = float (input('Masukkan diameter lingkaran: '))

    # buat varibel hasil untuk menampung hasil
    hasil = 0
    # pecah diameter menjadi jari-jari
    r = diameter / 2
    # hitung luas lingkaran
    hasil = 22 / 7 * r * r
    print('Hasil luas lingkaran = ', hasil)

luasLingkaran()