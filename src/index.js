import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import HeaderTopBar from './components/header_top_bar';

class App extends Component {
    constructor(props) {
        super(props);

        this.state= { currentState: ''}
    }

    render() {
        return (
            <div>
                <HeaderTopBar />
            </div>
        );
    }
}

ReactDOM.render( <App />, document.getElementById('root'));