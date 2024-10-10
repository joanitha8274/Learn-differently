// Exemple de données simulées (remplacées plus tard par des données en temps réel)
const studentName = "Joani";
const pendingTasks = 9;  // Nombre de tâches restantes

// Mettre à jour le message de bienvenue avec les informations de l'étudiant
document.getElementById('welcomeMessage').innerText = `Welcome back, ${studentName}! You have ${pendingTasks} pending tasks.`;

// Mettre à jour le nombre de tâches dans le tableau de bord
document.getElementById('taskCount').innerText = `${pendingTasks} pending tasks`;

// Afficher la date actuelle
const dateElement = document.getElementById('date');
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date();
dateElement.textContent = today.toLocaleDateString('fr-FR', options);

