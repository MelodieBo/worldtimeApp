// 3 - En fonction de l'heure actuellement affichée, afficher une image "LUNE" lorsqu'on est dans la nuit, afficher une image "SOLEIL" lorsque c'est le jour >> définir NUIT et JOUR

// Je créer ma fonction pour savoir si c'est le jour où la nuit

const temp = (horaire) => {
            
    let nuitJour = parseInt(horaire, 10);
    console.log(nuitJour)

    if ( nuitJour >= 20 || nuitJour <= 5) {
        document.body.classList.add('nuit');
        document.body.classList.remove('jour');
    } else {
        document.body.classList.add('jour');
        document.body.classList.remove('nuit');
    } 
}

let getTime = document.getElementById('getTime');

getTime.addEventListener('click', () => {
    let valeur = document.getElementById('ville').value;
    console.log(valeur);
    //TODO: call api word time
    async function get() {
        const response = await fetch('https://worldtimeapi.org/api/timezone/' + valeur);
        let data = await response.json();
        let { datetime } = data;
        console.log(datetime);
        let horaire = datetime.substring(11, 19);
        //1 -  Ecrire l'heure récupéré via l'API dans la zonne HH:MM:SS
        document.getElementById('horaire').innerText = horaire;

        temp(horaire);
    }  
    get();

})


/*2 - Créer 4 boutons sous le champ de formulaire, 
[NEW-YORK] [PARIS] [LONDRES] [...]
Lorsque l'on clique sur un des boutons, cela produit l'affichage de l'heure de cette ville dans la zone HH:MM:SS*/

//NYC
let cityChoiceNYC = document.getElementById('cityChoiceNYC');
cityChoiceNYC.addEventListener('click', () => {

    async function get() {
        const response = await fetch('https://worldtimeapi.org/api/timezone/America/New_York');
        let data = await response.json();
        let { datetime } = data;
        console.log(datetime);
        let horaire = datetime.substring(11, 19);
        //1 -  Ecrire l'heure récupéré via l'API dans la zonne HH:MM:SS
        document.getElementById('horaire').innerText = horaire;

        temp(horaire);
    }
    get();

})

//MELBOURNE
let cityChoiceMelbourne = document.getElementById('cityChoiceMelbourne');
cityChoiceMelbourne.addEventListener('click', () => {

    async function get() {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Australia/Melbourne');
        let data = await response.json();
        let { datetime } = data;
        console.log(datetime);
        let horaire = datetime.substring(11, 19);
        //1 -  Ecrire l'heure récupéré via l'API dans la zonne HH:MM:SS
        document.getElementById('horaire').innerText = horaire;

        temp(horaire);
    }
    get();
    
})

//LONDRES
let cityChoiceLondres = document.getElementById('cityChoiceLondon');
cityChoiceLondon.addEventListener('click', () => {

    async function get() {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Europe/London');
        let data = await response.json();
        let { datetime } = data;
        console.log(datetime);
        let horaire = datetime.substring(11, 19);
        //1 -  Ecrire l'heure récupéré via l'API dans la zonne HH:MM:SS
        document.getElementById('horaire').innerText = horaire;

        temp(horaire); 
    }
    get();  
})

//HONOLULU
let cityChoiceHonolulu = document.getElementById('cityChoiceHonolulu');
cityChoiceHonolulu.addEventListener('click', () => {

    async function get() {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Pacific/Honolulu');
        let data = await response.json();
        let { datetime } = data;
        console.log(datetime);
        let horaire = datetime.substring(11, 19);
        //1 -  Ecrire l'heure récupéré via l'API dans la zonne HH:MM:SS
        document.getElementById('horaire').innerText = horaire;

        temp(horaire); 
    }
    get();   
})
