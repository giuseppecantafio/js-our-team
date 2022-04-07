/* <div class="team-card">
            <div class="card-image">
              <img
                src="img/wayne-barnett-founder-ceo.jpg"
                alt="Wayne Barnett"
              />
            </div>
            <div class="card-text">
              <h3>Wayne Barnett</h3>
              <p>Founder & CEO</p>
            </div>
          </div>
*/

// innanzitutto, mi creo un array contenente gli oggetti, ovvero i membri del team

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
console.log(ourTeam);

// mi vado a ciclare l'array per tirarmi fuori gli oggetti e vado ad appendere l'html

(function (){
    let teamContainerElm = document.querySelector('.team-container');
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