function search() {
    // Obtener el valor de la barra de búsqueda
    var query = document.getElementById('searchInput').value;

    // Realizar la lógica de búsqueda (puedes expandir esto según tus necesidades)
    var results = performSearch(query);

    // Mostrar los resultados en la página
    displayResults(results);
}

function performSearch(query) {
    // Aquí implementarías la lógica de búsqueda, por ejemplo, consultar una base de datos o una API
    // Por ahora, simplemente devolveremos un conjunto de resultados de ejemplo
    return [
        "Resultado 1",
        "Resultado 2",
        "Resultado 3"
    ];
}

function displayResults(results) {
    var resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores

    // Mostrar cada resultado en un nuevo párrafo
    results.forEach(function(result) {
        var resultElement = document.createElement('p');
        resultElement.textContent = result;
        resultsContainer.appendChild(resultElement);
    });
}
