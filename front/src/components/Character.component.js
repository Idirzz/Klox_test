import React, { Component} from "react";
const axios = require("axios");

export default class ListCharacter extends Component {
    constructor(props){
        super(props);

        this.state = {
            character : null
        }
    }
    
    componentDidMount() {
        axios.post("http://localhost:3001/character", {url : this.props.character})
        .then(res => {  
            this.setState({character : res.data})
        }).catch(err =>{
            this.setState({character : false})
        });
    }

    render() {
        if (this.state.character)
            return (
                <div>
                    <p><img alt={this.state.character.name} src={this.state.character.image} /> - {this.state.character.name} - {this.state.character.species}</p>
                </div>
            )
        else
            return(
                <div>
                    <p>Loading...</p>
                </div>
            )
    }
}