import React from "react";

export default class Note extends React.Component(){
    //Création du rectangle
    constructor(largeur,hauteur){
        super(largeur,hauteur)
        this.hauteur=hauteur
        this.largeur=largeur
    }
    render(){
        <div className="rectangle">
            <Note hauteur="20" largeur="10"/>
            <button onClick={calccpt(<input/>)}>Ajouter une note</button>
        </div>
    }
}
function calccpt(note1){
    let cpt=0;
    if (note1!==''){
        while (cpt<86400){ //Tant que le compteur est inférieur à 24h
            cpt ++;
            return (
            <h3>
                {note1}
            </h3>)
        }
    }
}
