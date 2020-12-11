import React, { Component} from "react";
import ListCharacter from "./ListCharacter.component";

export default class Episode extends Component {
    constructor(props){
        super(props);

        this.state = {
            episode: this.props.episode.episode,
            name: this.props.episode.name,
        }
    }

    
    render() {
            return (
                <div>
                    {this.state.episode} - {this.state.name}
                    <ListCharacter listOfCharacters={this.props.episode.characters} />
                </div>
            )
    }
}