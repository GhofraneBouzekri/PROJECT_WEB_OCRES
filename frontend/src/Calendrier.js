import React from 'react';
import Calendar from 'react-calendar'; 
import './calendrier.css';

export default class Calendrier extends React.Component{
  constructor(props){
    super(props);
    this.state={
      jour:new Date()
    };
  }
  render(){
    return(
      <div className="calendrier">
        <Calendar onChange={this.setState} value={this.state.jour} />
      </div>
    )
  }
}