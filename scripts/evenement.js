import Formulaire from "./formulaire.js";

// force la réinitialisation du select au rechargement de la page
document.addEventListener("DOMContentLoaded", function(){
    let selectObjet = document.getElementById('objet');
    let radioParticulier = document.getElementById('particulier')
    let radioProfessionel = document.getElementById('professionel')
    radioParticulier.checked = true;
    radioProfessionel.checked = false;
    selectObjet.value = "offre_d_emploi";
})

const formulaire = new Formulaire('formulaire');

// champ Société masqué par défaut
formulaire.maskChamp('societe');

// Champs email masqué par défaut
formulaire.maskChamp('email');

// afficher société ou pas en fonction du bouton coché

formulaire.getElement('particulier').addEventListener('change',()=>{
    formulaire.hideChamp('societe');
});

formulaire.getElement('professionel').addEventListener('change',()=>{
    formulaire.showChamp('societe');
});

//afficher ou non l'input mail en fonction de l'objet
formulaire.getElement('objet').addEventListener('change', ()=>{
    formulaire.isSelected('objet','demande_de_contact',()=>formulaire.showChamp('email'),()=>formulaire.hideChamp('email'));
});

// récupérer la réponse du answers 
formulaire.formulaireHtml.addEventListener('submit',(event) => {
        console.log('ici');
        event.preventDefault();
        formulaire.affAnswers();
        console.log(formulaire.answers);
    }
)
