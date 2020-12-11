import React, { Component} from "react";
import Character from "./Character.component";

export default class ListCharacter extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    listOfCharacters() {
        let i = 0;
        if (this.props.listOfCharacters && this.props.listOfCharacters.length)
            return this.props.listOfCharacters.map(character => {
                return <Character character={character} key={i++}/>
            });
        else
            return ;
    }
    
    render() {
            return (
                <div>
                    {this.listOfCharacters()}
                </div>
            )
    }
}