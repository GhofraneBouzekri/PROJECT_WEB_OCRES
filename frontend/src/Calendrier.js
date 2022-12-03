import React from 'react';
import Calendar from 'react-calendar'; 
import axios from 'axios';

import './calendrier.css';

const BACKEND_BASE_URL = "http://localhost:3001/events/"

export default class Calendrier extends React.Component{

//Dès que l'utilisateur saisie une date il faut vérifier dans la bdd si elle y est 
//Si elle y est alors on affiche l'évènement l'utilisateur peut ajouter un évènement, modifier le présent, supprimer l'évènement
//Si elle n'y est pas alors on lui propose d'en ajouter un

  constructor(props){
    super(props);
    //Initialisation
    this.state={
      jour:new Date(),
      events:[],
      addEvent:''
    }
    this.affichage=this.affichage.bind(this);
  }

  componentDidMount(){
    this.getList();
  }

  addEventChange = event => {
    this.setState({ addEvent: event.target.value });

  };

  getList=()=>{
    axios.get(BACKEND_BASE_URL).then((response) => response.json()).then((date)=> this.setState({ events: date }));
  }

  addEvent= () => {
    axios.put(BACKEND_BASE_URL, { event: this.state.addEvent }).then((date) => this.getList());
  }
  
  deleteEvent= (id) => {
    axios.delete(`${BACKEND_BASE_URL}/${id}`).then((date) => this.getList());
  }

  affichage=(date)=>{
    if (date===this.state.events.date){
        this.getList();
        <button onClick={this.addEvent}> ajouter un évènement </button>;
        <button onClick={this.componentDidUpdate}> modifier un évènement </button>;
        <button onClick={this.deleteEvent}> supprimer un évènement </button>;
    }
    else{
      <input>
      <button onClick={this.addEvent}> ajouter un évènement </button>;
      </input>
    }
  }
  render(){
    return(
      <>
      <div className="calendrier">
        <Calendar onClick={this.setState} value={this.state.jour}/>
      </div>
      <div className="affichage">
      </div>
      </>
    )
  }
}