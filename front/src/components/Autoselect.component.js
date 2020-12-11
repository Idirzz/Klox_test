import React, { Component} from "react";
import Episode from "./Episode.component";
const axios = require("axios");

export default class Autoselect extends Component {
    constructor(props){
        super(props);

        this.state = {
            episodesList : null,
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/")
        .then(res => {
            this.setState({episodesList : res.data})
        }).catch(err =>{
            this.setState({episodesList : false})
        });
    }

    listOfEpisodes() {
        if (this.state.episodesList && this.state.episodesList.length)
            return this.state.episodesList.map(episode => {
                return <Episode episode={episode} key={episode.id}/>
            });
        else
            return ;
    }
    
    render() {
            return (
                <div>
                    {this.listOfEpisodes()}
                </div>
            )
    }
}