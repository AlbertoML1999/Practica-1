const NUM_RESULTS = 3;

let loadMoreRequests = 0;

async function loadMore() {
    const from = (loadMoreRequests + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/Service?from=${from}&to=${to}`);
    const newTeams = await response.text();

    const teamsDiv = $('#teams'); // Usamos jQuery para seleccionar el contenedor de equipos

    // Ocultamos todos los elementos antes de agregar los nuevos
    // teamsDiv.children('.item').hide();

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