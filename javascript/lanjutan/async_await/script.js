// Asynchronous dan Await
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Berhasil terkonek!')
//     }, 2000);
// });

// promise.then(response => console.log(response));



function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = prompt('Masukkan waktu yang diinginkan: ');
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('Waktunya pas!')
            }, waktu);
        } else {
            reject('Aduh kelamaan');
        }
    });
}

// menggunakan then
// cobaPromise().then(response => console.log(response)).catch(response => console.log(response))

// menggunakan async & await
async function cobaAsync() {
    // tambahkan syntax try_catch
    try {
        const promise = await cobaPromise();
        console.log(promise);
    } catch (err) {
        console.error(err);
    }
}

cobaAsync();