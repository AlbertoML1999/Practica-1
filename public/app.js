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

function filterTeams() {
    const comparisonType = $('#comparison').val(); // Obtener si es "mayor" o "menor"
    const valueToCompare = parseInt($('#valueToCompare').val()); // Obtener el valor a comparar

    if (isNaN(valueToCompare)) {
        alert('Ingrese un valor numérico válido.');
        return;
    }

    const teamsDiv = $('#teams');

    teamsDiv.find('.item').each(function () {
        const debutYear = parseInt($(this).find('h1').text().match(/\d+/));

        console.log(`Debut Year: ${debutYear}, Comparison Type: ${comparisonType}, Value to Compare: ${valueToCompare}`);

        if ((comparisonType === 'mayor' && debutYear > valueToCompare) ||
            (comparisonType === 'menor' && debutYear < valueToCompare)) {
            console.log('Showing:', debutYear);
            $(this).show();
        } else {
            console.log('Hiding:', debutYear);
            $(this).hide();
        }
    });
}



function searchTeams() {
    const searchTerm = $('#buscar').val().toLowerCase();
    const teamsDiv = $('#teams');

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
