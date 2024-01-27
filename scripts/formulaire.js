export default class Formulaire {
    //définition du constructeur
    constructor(id){
        console.log('constructeur');
        this.id = id;
        this.formulaireHtml = document.getElementById(this.id);
        console.log(this.formulaireHtml);
        this.formdata = new FormData(this.formulaireHtml);
        this.answers = new Array();
    }
    
    // récupère la div parent
    getDiv(id){
        return document.getElementById(id).parentNode;
    }

    // récupère l'élément
    getElement(id){
        return document.getElementById(id);
    }

    // méthode permettant de masquer un élement ( sans animation)
    maskChamp(id){
        console.log('masque champ')
        this.getDiv(id).classList.add('masque');
        this.getElement(id).required = false;
    }

    // méthode permettant d'afficher le champs
    showChamp(id){
        this.getDiv(id).classList.remove('disp');
        this.getDiv(id).classList.add('app');
        this.getElement(id).required = true;
    }

    // méthode permettant d'afficher le champ (avec animation)

    hideChamp(id){
        this.getDiv(id).classList.remove('app');
        this.getDiv(id).classList.add('disp');
        this.getElement(id).required = false;
    }

    // savoir si un radio est sélectioné
    isSelected(id,value, action, otherAction){
        this.formdata = new FormData(this.formulaireHtml);
        if (this.formdata.get(id) == value){
            action();
        }
        else{
            otherAction();
        }
           
    }
    // récupère les élément de l'input et les ajouter à answer

    getAnswers(){
        console.log ('testanswers')
        this.formdata = new FormData(this.formulaireHtml);
        console.log(this.formdata)
        this.formdata.forEach((value, key) => {
            console.log(key + " : " + value)
            if(key !="" && value!="on"){
                this.answers.push([key,value])
            }
        })
        return this.answers
    }
    
     //MÉTHODE POUR AFFICHER DANS UN ALERT LES RÉSULTATS

     affAnswers() {
        let chaine = "Récapitulatif\n\n";
        for (let ligne of this.getAnswers()) {
            chaine += `${ligne [0]} : ${ligne[1]}\n`
        }
        alert(chaine);
    }
}