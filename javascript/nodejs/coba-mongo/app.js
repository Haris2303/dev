const { ObjectID } = require('bson')
const { MongoClient } = require('mongodb')

const uri = "mongodb://127.0.0.1:27017"
const dbName = "kampus"

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

client.connect((error, client) => {
    if(error) {
        return console.log('Koneksi Gagal')
    }

    // pilih database
    const db = client.db(dbName)

    // Menambahkan satu data ke collection kampus (insertONe)
    // db.collection('mahasiswa').insertOne({nama: "Felix", email: "felix@gmail.com"}, (err, result) => {
    //     if(err) console.log('gagal menambahkan data')
    //     console.log(result);
    // })


    // Menambahkan lebih dari satu data (insertMany)
    // db.collection('mahasiswa').insertMany([
    //     {nama: "Haris", email: "haris@yahoo.com"},
    //     {nama: "Rent", email: "Rent@yahoo.com"},
    //     {nama: "Danish", email: "Danish@bing.com"},
    // ], (error, result) => {
    //     if(error) console.log('Gagal insert data')
    //     console.log(result)
    // })


    // Menampilkan semua data yang ada di collection 'mahasiswa'
    // console.log(db.collection('mahasiswa').find().toArray((error, result) => {
    //     console.log(result)
    // }))


    // Menampilkan data berdasarkan kriteria yang ada di collection 'mahasiswa'
    // berdasarkan nama field
    // console.log(db.collection('mahasiswa').find({nama: "Haris"}).toArray((error, result) => {
    //     console.log(result)
    // }))
    // berdasarkan id
    // console.log(db.collection('mahasiswa').find({ _id: ObjectID("62d5ff4a1f8f2f888c0f6ab9")}).toArray((error, result) => {
    //     console.log(result)
    // }))

    
    // Mengubah satu data (updateOne)
    // const updatePromise = db.collection('mahasiswa').updateOne({
    //     // kriteria target
    //     _id: ObjectID('62d5ff4a1f8f2f888c0f6ab9')
    // }, 
    // {
    //     // changed
    //     $set: {
    //         email: "harith@yahoo.com"
    //     }
    // })

    // ambil promise
    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // }) 


    // Mengubah data lebih dari 1, berdasarkan kriteria (updateMany)
    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: "Khana"
    //     },
    //     {
    //         $set: {
    //             nama: "Khana Doank"
    //         }
    //     }
    // ).then(resolve => console.log(resolve)).catch(reject => console.log(reject))


    // Menghapus 1 document (deleteOne)
    // db.collection('mahasiswa').deleteOne(
    //     {
    //         _id: ObjectID('62d5ff4a1f8f2f888c0f6ab9')
    //     }
    // ).then(resolve => console.log(resolve)).catch(reject => console.log(reject))


    // Menghapus lebih dari 1 document (deleteMany)
    // db.collection('mahasiswa').deleteMany(
    //     {
    //         nama: "Haris"
    //     }
    // ).then(resolve => console.log(resolve)).catch(reject => console.log(reject))

})