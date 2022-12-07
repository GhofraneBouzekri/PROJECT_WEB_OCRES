import React from "react";
import './horloge.css';

export default class Horloge extends React.Component{
    //Il faut prendre un interval et changer toutes les secondes la date
    constructor(props){
        super(props)
        //Initialisation
        this.state={date:new Date()}
        this.timer=null
    }
    //Détermine quand un composant a été monté

    componentDidMount(){
        this.timer=window.setInterval(this.changementdestate.bind(this),1000)
    }
    //Suppression de l'interval dans timer
    componentWillUnmount(){
        window.clearInterval(this.timer)
    }

    //changement de l'état de la date
    changementdestate(){
        this.setState({date:new Date()})
    }
    render(){
        return(
            <div className="timecontainer">
                <div className="timedecor">
                    <div className="horloge">
                    <h1>{this.state.date.toLocaleTimeString()}</h1></div>
                </div>
            </div>
        )
    }
}