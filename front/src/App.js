import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"

import EpisodeList from "./components/Autoselect.component";

function App() {
    return (
        <Router>
            <Route path="/" exact component={EpisodeList} />
        </Router>
        );
    }
    
    export default App;
    