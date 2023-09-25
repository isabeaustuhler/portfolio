// JavaScript, um das Popup zu öffnen und zu schließen

// Popup-Element und Schließen-Button abrufen
const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");

// Funktion, um das Popup zu öffnen
function openPopup() {
    popup.style.display = "flex";
}

// Funktion, um das Popup zu schließen
function closePopup() {
    popup.style.display = "none";
}

// Eventlistener für den Schließen-Button
closeButton.addEventListener("click", closePopup);

// Überprüfen, ob die Seite auf einem Smartphone geöffnet wird
if (/Mobi|Android/i.test(navigator.userAgent)) {
    openPopup(); // Popup öffnen, wenn auf einem Smartphone
}
