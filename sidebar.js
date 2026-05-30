const openbtn = document.getElementById('openbtn'); // Seleziona il pulsante menu
const closebtn = document.getElementById('closebtn'); // Seleziona il pulsante chiusura sidebar
const sidebar = document.getElementById('sidebar'); // Seleziona il contenitore della sidebar
const menucolori = document.getElementById('scelta-colore'); // Seleziona il menu del tema

openbtn.addEventListener('click', () => { // Al click sul menu, mostra la sidebar
    sidebar.classList.add('active'); // Aggiunge la classe che la rende visibile
});

closebtn.addEventListener('click', () => { // Al click sulla X, nasconde la sidebar
    sidebar.classList.remove('active'); // Rimuove la classe che la rende visibile
});

menucolori.addEventListener('change', () => { // Quando cambia l'opzione del select
    const valuemenu = menucolori.value; // Legge il valore scelto nel menu

    if (valuemenu === 'black') { // Se è selezionato il tema scuro
        document.body.style.backgroundColor = '#333'; // Imposta lo sfondo scuro
        document.body.style.color = '#fff'; // Imposta il testo chiaro
        document.querySelector('.navbar').style.backgroundColor = '#222'; // Scura la navbar
        document.querySelector('.sidebar').style.backgroundColor = '#222'; // Scura la sidebar
    } else { // Altrimenti usa il tema chiaro
        document.body.style.backgroundColor = '#fff'; // Imposta lo sfondo chiaro
        document.body.style.color = '#333'; // Imposta il testo scuro
        document.querySelector('.navbar').style.backgroundColor = '#333'; // Ripristina il colore della navbar
        document.querySelector('.sidebar').style.backgroundColor = '#333'; // Ripristina il colore della sidebar
    }
});