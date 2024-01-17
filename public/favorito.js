
function toggleFavorito(button) {
	var listItem = button.parentNode;
	var spanElement = listItem.querySelector('span');
	var itemName = spanElement.textContent;

	// Verifica si el elemento ya es un favorito
	var esFavorito = button.classList.toggle('favorite');

	// Obtiene la lista de favoritos almacenada localmente
	var favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

	// Actualiza la lista de favoritos
	if (esFavorito) {
		favoritos.push(itemName);
	} else {
		favoritos = favoritos.filter(item => item !== itemName);
	}

	// Almacena la lista actualizada localmente
	localStorage.setItem('favoritos', JSON.stringify(favoritos));

	// Actualiza la lista de favoritos en la UI
	actualizarListaFavoritos();
}

// Función para actualizar la lista de favoritos en la UI
function actualizarListaFavoritos() {
	var listaFavoritos = document.getElementById('listaFavoritos');
	listaFavoritos.innerHTML = ''; // Limpiar la lista antes de actualizar

	// Obtiene la lista de favoritos almacenada localmente
	var favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

	// Agrega los elementos favoritos a la lista
	favoritos.forEach(item => {
		var li = document.createElement('li');
		li.textContent = item;
		listaFavoritos.appendChild(li);
	});
}

// Muestra la lista de favoritos, a pesar de recargar la página
window.onload = actualizarListaFavoritos();