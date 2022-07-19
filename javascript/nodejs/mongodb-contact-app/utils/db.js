const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/kampus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})


// // Menambah 1 data
// const contact1 = new Contact({
//   nama: 'Felix',
//   nohp: '081311223344',
//   email: 'felix@gmail.com'
// })

// // Simpan ke collections
// contact1.save().then(result => console.log(result))