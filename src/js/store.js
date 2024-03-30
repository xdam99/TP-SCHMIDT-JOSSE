fetch('./src/json/produits.json')
    .then(response => response.json())
    .then(data => {
        console.log("Données JSON chargées avec succès :");
        console.log(data);
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors du chargement du fichier JSON:', error);
    });