// récupération des données JSON si la promise(status) === true return la promise et convertit mon fichier json en object avec .json
const callJson = fetch("movies.json")
    .then(response => {
        if (response.ok === true) {
            return response.json();
        } else {
            Promise.reject("Fichier non trouvé");
        };
    })
// je récupère mes objects
    .then(object => {
        object.results.map(item => {
            const cards = 
            `<div class="card mb-3 p-0">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${item.poster_path}" class="img-fluid rounded-start" alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title">${item.original_title}</h1>
                            <hr>
                            <p class="card-text text-center">${item.overview}</p>
                            <p class="card-text card-footer text-center"><i class="fa-solid fa-star"></i> ${item.vote_average}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
            const col = document.querySelector(".colClone")
            col.innerHTML += cards            
        })
    });

