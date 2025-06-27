let jsonData = "/assets/csvjson.json"; 

function loadJsonData() {
    fetch(jsonData)
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const entry = data[randomIndex];
            document.getElementById('word').textContent = entry.word;
            document.getElementById('type').textContent = entry.type;
            document.getElementById('definition').textContent = entry.definition;
            document.getElementById('example').textContent = entry.example;
        })
        .catch(() => {
            alert('Une erreur est survenue lors du chargement des données.');
        });
}

window.onload = () => {
    loadJsonData();
}

document.querySelector('button').addEventListener('click', () => {
    loadJsonData();
});