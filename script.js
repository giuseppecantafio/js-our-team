
// innanzitutto, mi creo un array contenente gli oggetti, ovvero i membri del team e setto variabili globali

const ourTeam = [
    {
        immagine: 'img/wayne-barnett-founder-ceo.jpg',
        nomeCognome: 'Wayne Barnett',
        ruolo: 'Founders & CEO'
    },
    {
        immagine: 'img/angela-caroll-chief-editor.jpg',
        nomeCognome: 'Angela Caroll',
        ruolo: 'Chief Editor'
    },
    {
        immagine: 'img/walter-gordon-office-manager.jpg',
        nomeCognome: 'Walter Gordon',
        ruolo: 'Office Manager'
    },
    {
        immagine: 'img/angela-lopez-social-media-manager.jpg',
        nomeCognome: 'Angela Lopez',
        ruolo: 'Social Media Manager'
    },
    {
        immagine: 'img/scott-estrada-developer.jpg',
        nomeCognome: 'Scott Estrada',
        ruolo: 'Developer'
    },
    {
        immagine: 'img/barbara-ramos-graphic-designer.jpg',
        nomeCognome: 'Barbara Ramos',
        ruolo: 'Graphic Designer'
    },
];

let teamContainerElm = document.querySelector('.team-container');

// mi vado a ciclare l'array per tirarmi fuori gli oggetti e vado ad appendere l'html

(function (){
    teamContainerElm.innerHTML = '';
for (let i = 0; i < ourTeam.length; i++){
    teamContainerElm.innerHTML += `<div class="team-card">
                                        <div class="card-image">
                                            <img src="${ourTeam[i].immagine}"
                                                 alt="${ourTeam[i].nomeCognome}"
                                            />
                                        </div>
                                        <div class="card-text">
                                        <h3>
                                        ${ourTeam[i].nomeCognome}
                                        </h3>
                                        <p>
                                        ${ourTeam[i].ruolo}
                                        </p>
                                        </div>
                                    </div>`
}
})();

// permettiamo all'utente di inserire un nuovo membro del team. Prendo i valori di input e creo una nuova card

let addMemberButtonElm = document.getElementById('addMemberButton');

function generateMember(){

    let imageElm = document.getElementById('image');
    let imageValue = imageElm.value;
    let nameElm = document.getElementById('name');
    let nameValue = nameElm.value;
    let roleElm = document.getElementById('role');
    let roleValue = roleElm.value;

    const newMember = {
        immagine: `img/${imageValue}.jpg`,
        nomeCognome: nameValue,
        ruolo: roleValue
    }
    
    teamContainerElm.innerHTML += `<div class="team-card">
                                        <div class="card-image">
                                            <img src="${newMember.immagine}"
                                                 alt="${newMember.nomeCognome}"
                                            />
                                        </div>
                                        <div class="card-text">
                                        <h3>
                                        ${newMember.nomeCognome}
                                        </h3>
                                        <p>
                                        ${newMember.ruolo}
                                        </p>
                                        </div>
                                    </div>`
    
}

addMemberButtonElm.addEventListener('click', generateMember)
