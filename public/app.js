const NUM_RESULTS = 3;

let loadMoreRequests = 0;

async function loadMore() {

    const from = (loadMoreRequests + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    try {
        const response = await fetch(`Service?from=${from}&to=${to}`);

        const newTeams = await response.text();

        const containerflex = document.getElementById("containerflex");

        containerflex.innerHTML += newTeams;

        loadMoreRequests++;
        
    } catch (error) {
        console.error('Error al cargar equipos:', error);
    }
}


