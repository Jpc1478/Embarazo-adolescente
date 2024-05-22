function redirectTo(page) {
    // Redirige a la página especificada
    window.location.href = page + '.html';
}

function loadContent(page) {
    fetch(`content/${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('contenido').innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar la página:', error);
            document.getElementById('contenido').innerHTML = '<p>Error al cargar el contenido.</p>';
        });
}
