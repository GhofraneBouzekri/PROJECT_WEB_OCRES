import Calendar from 'react-calendar';

class Rectangle{
  constructor(hauteur,largeur){
    this.hauteur=hauteur;
    this.largeur=largeur;
  }
  getHauteur() {
    return this.hauteur
  }
  getLargeur() {
    return this.largeur
  }
}

function Calendrier() {

  return (
    <div>
      <Calendar/>;
      <Rectangle hauteur={30} largeur={40} />;
    </div>
  );
}