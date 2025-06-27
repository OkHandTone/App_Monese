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
            document.getElementById('difficulty').innerHTML = 'Difficulté : ';
            const star = '<div class="five-pointed-star"></div>';
            for (let i = 0; i < entry.difficulty; i++) {
                document.getElementById('difficulty').innerHTML += star;
            }
        })
        .catch(() => {
            alert('Une erreur est survenue lors du chargement des données.');
        });
}

function loadWordList() {
    fetch(jsonData)
        .then(response => response.json())
        .then(data => {
            const wordList = document.getElementById('word-list');
            wordList.innerHTML = '';
            data.forEach(entry => {
                const li = document.createElement('li');
                li.textContent = entry.word;
                wordList.appendChild(li);
            });
        })
        .catch(() => {
            alert('Une erreur est survenue lors du chargement de la liste des mots.');
        });
}

window.onload = () => {
    loadJsonData();
}

document.querySelector('button').addEventListener('click', () => {
    loadJsonData();
});