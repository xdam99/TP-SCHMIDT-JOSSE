let cards = document.querySelector('#cards')


fetch('./src/json/produits.json')
    .then(response => response.json())
    .then(data => {
        console.log("Données JSON chargées avec succès :");
        console.log(data);
        for(let i=0; i < data.length ; i++){
            const titleContainer = document.createElement("div");
            titleContainer.setAttribute("id", "card"+i)
            cards.appendChild(titleContainer)
            
            const titleElement = document.createElement('h2');
            titleElement.textContent = data[i].nom;
            titleContainer.appendChild(titleElement);
        }
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors du chargement du fichier JSON:', error);
    });

