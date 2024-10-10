function modifierInfo() {
    let fullName = prompt("Entrez votre nom complet:", document.getElementById("fullName").textContent);
    let address = prompt("Entrez votre adresse:", document.getElementById("address").textContent);
    let career = prompt("Entrez votre poste ou carrière:", document.getElementById("career").textContent);
    
    document.getElementById("fullName").textContent = fullName;
    document.getElementById("address").textContent = address;
    document.getElementById("career").textContent = career;
}

function modifierPhoto() {
    let newPhotoUrl = prompt("Entrez l'URL de la nouvelle photo de profil:", "https://via.placeholder.com/150");
    document.getElementById("profileImg").src = newPhotoUrl;
}

function modifierCover() {
    let newCoverUrl = prompt("Entrez l'URL de la nouvelle photo de couverture:", "https://via.placeholder.com/1200x300");
    document.getElementById("coverImg").src = newCoverUrl;
}

function modifierLangues() {
    let newLangues = prompt("Entrez vos langues parlées (séparées par une virgule):", "Français, Anglais");
    document.getElementById("languesListe").innerHTML = newLangues.split(',').map(langue => `<li>${langue.trim()}</li>`).join('');
}

function ajouterCv() {
    let cv = prompt("Ajoutez un lien vers votre CV:");
    document.getElementById("cvContent").innerHTML = `<a href="${cv}" target="_blank">Voir le CV</a>`;
}

function modifierBio() {
    let newBio = prompt("Entrez votre nouvelle bio:");
    document.getElementById("bioContent").textContent = newBio;
}

function modifierEducation() {
    let newEducation = prompt("Entrez votre parcours éducatif (séparé par des virgules):", "Diplôme en Informatique de Gestion");
    document.getElementById("educationListe").innerHTML = newEducation.split(',').map(edu => `<li>${edu.trim()}</li>`).join('');
}

function ajouterPortfolio() {
    let portfolioLink = prompt("Ajoutez un lien vers votre portfolio:");
    document.getElementById("portfolioContent").innerHTML = `<a href="${portfolioLink}" target="_blank">Voir le Portfolio</a>`;
}

let newExperiences = prompt("Entrez vos expériences professionnelles (séparées par des virgules):", "Expérience non ajoutée");
    document.getElementById("experiencesListe").innerHTML = newExperiences.split(',').map(exp => `<li>${exp.trim()}</li>`).join('');


    function openModal(modalId) {
        document.getElementById(modalId).style.display = "block";
    }
    
    function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
    }
    
    // Enregistrer les données du formulaire (simplifié)
    document.getElementById("cvForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const fileInput = document.getElementById("cvFile");
        if (fileInput.files.length > 0) {
            // Ici, tu pourrais ajouter une logique pour sauvegarder le CV côté serveur
            document.getElementById("cvContent").textContent = "CV téléchargé";
            closeModal('cvModal');
        }
    });
    