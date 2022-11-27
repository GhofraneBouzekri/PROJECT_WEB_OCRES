import React from "react";

export default class Horloge extends React.Component{
    constructor(props){
        super(props)
        this.state={date:new Date()}
        this.timer=null
    }

    componentDidMount(){
        this.timer=window.setInterval(this.tick.bind(this),1000)
    }

    componentWillMount(){
        window.clearInterval(this.timer)
    }

    tick(){
        this.setState({date:new Date()})
    }
    render(){
        return(
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}