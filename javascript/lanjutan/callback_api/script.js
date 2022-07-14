// ajax
function getDataApiOMDB(url, success, err) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.status === 404) {
                err();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}

// ambil element
const btnSearchMovie = document.querySelector('.search-movie-button');
const keywordNameMovie = document.querySelector('.keyword-name-movie');

// jika tombol search diklik
btnSearchMovie.addEventListener('click', function() {
    getDataApiOMDB('http://www.omdbapi.com/?s=' + keywordNameMovie.value + '&apikey=49cd3c81', results => {
        // const parseJson = JSON.parse(results);
        const movies = JSON.parse(results).Search;
        let cards = '';
        movies.forEach(m => {
            cards += showMovies(m);
        });

        // ubah isi movie-container 
        document.querySelector('.movie-container').innerHTML = cards;

        // ambil modal-detail-botton
        const detailMovies = document.querySelectorAll('.modal-detail-button');

        // destructuring dan looping detail movies
        [...detailMovies].map(dm => dm.addEventListener('click', function() {
            // ambil id dari data-imdbid
            const id = (this).getAttribute('data-imdbid');
            // lakukkan ajax asynchronous
            getDataApiOMDB('http://www.omdbapi.com/?i=' + id + '&apikey=49cd3c81', values => {
                const m = JSON.parse(values);
                const detailMovies = showDetailMovie(m);

                // ubah isi modal-body 
                document.querySelector('.modal-body').innerHTML = detailMovies;
            })
        }))

    }, err => console.log(err.responseText));
})


function showMovies(m) {
    return `<div class="col-sm-4 my-3">
    <div class="card rounded-3">
        <img src="${m.Poster}" class="card-img-top">
        <div class="card-body bg-dark">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-secondary">${m.Year}</h6>
            <a href="#" class="btn btn-secondary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
        </div>
    </div>
</div>`
}

function showDetailMovie(m) {
    return `<div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <img src="${m.Poster}" class="img-fluid">
        </div>
        <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item bg-dark text-light"><h4>${m.Title} (${m.Year})</h4></li>
                <li class="list-group-item bg-dark text-light"><strong>Directtor: </strong>${m.Director}</li>
                <li class="list-group-item bg-dark text-light"><strong>Actors: </strong>${m.Actors}</li>
                <li class="list-group-item bg-dark text-light"><strong>Plot: </strong><br>${m.Plot}</li>
            </ul>
        </div>
    </div>
</div>`;
}