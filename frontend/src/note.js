import React from "react"
import './note.css'

export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <div className="note">
            <textarea rows='13'
                cols='25'
                placeholder='Your note here...' 
                value={this.state.value} 
                onChange={this.handleChange} />
        </div>
      );
    }
  }
