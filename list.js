let jsonData = "/assets/csvjson.json";

function loadWordList() {
    fetch(jsonData)
        .then(response => response.json())
        .then(data => {
            const wordList = document.getElementById('word-list');
            wordList.innerHTML = '';
            data.forEach(entry => {
                if (entry.word) {
                    const li = document.createElement('li');
                    li.textContent = entry.word;
                    
                    const diff = document.createElement('div');
                    diff.textContent = `Difficulté : ${entry.difficulty}`;
                    diff.style.fontSize = "14px";
                    diff.style.color = "#944b28";
                    diff.style.marginBottom = "10px";

                    li.appendChild(diff);
                    wordList.appendChild(li);
                }
            });
        })
        .catch(() => {
            alert('Une erreur est survenue lors du chargement de la liste des mots.');
        });
}

window.onload = loadWordList;