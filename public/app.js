const NUM_RESULTS = 3;

let loadMoreRequests = 0;

async function loadMore() {
    const from = (loadMoreRequests + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/Service?from=${from}&to=${to}`);
    const newTeams = await response.text();

    const teamsDiv = $('#teams');

    teamsDiv.append(newTeams);

    loadMoreRequests++;
}

function searchTeams() {
    const searchTerm = $('#buscar').val().toLowerCase(); // Obtenemos el término de búsqueda y lo convertimos a minúsculas
    const teamsDiv = $('#teams');

    // Mostramos solo los elementos cuyo nombre coincide con el término de búsqueda
    teamsDiv.children('.item').each(function () {
        const teamName = $(this).find('h1').text().toLowerCase();

        if (teamName.includes(searchTerm)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var favoritesButton = document.getElementById('favorites-button');
    var favoritesContainer = document.getElementById('favorites-container');

    favoritesButton.addEventListener('click', function () {
        if (favoritesContainer.style.right === '0px') {
            favoritesContainer.style.right = '-250px';
        } else {
            favoritesContainer.style.right = '0px';
        }
    });
});

function toggleFavorites() {
    var favoritesContainer = document.getElementById('favorites-container');
    if (favoritesContainer.style.right === '0px') {
        favoritesContainer.style.right = '-250px';
    } else {
        favoritesContainer.style.right = '0px';
    }
}
