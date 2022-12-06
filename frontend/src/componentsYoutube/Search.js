import React from "react";
import './Search.css';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = { title: "" }

    }

    onSearchChange = event => {
        const _title = event.target.value
        this.setState({ title: _title })

    }

    onSubmit = event => {
        event.preventDefault()

        this.props.onSearch(this.state.title)
    }

    render() {


        return (

            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-controls">
                        <label>Recherche</label>
                        <input value={this.state.title}
                            onChange={this.onSearchChange}
                            id="recherche-video"
                            type="text"
                            placeholder="Entrer un mot clé...">

                        </input>
                    </div>
                </form>
            </div>

        );
    }
}

export default Search; 
