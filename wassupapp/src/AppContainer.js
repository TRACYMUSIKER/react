import React, { Component } from 'react';
import App from './App'
import uuid from 'uuid';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wassups: []
        };

        let getWassups = () => 
        fetch('http://0.tcp.ngrok.io:18064/wassups.json')
            .then(res => res.json())
            .then(wassups => {
                this.setState({
                    wassups: wassups
                });
            })
        getWassups();
    }
    render() {
        let addWassup = (newWassup) => {
            this.setState({
                wassups: this.state.wassups.concat([
                    {
                        id: uuid(), 
                        content: newWassup
                    }
                ])
            })
        } 
        console.log(this.state.wassups);
        return <App wassups={this.state.wassups} addWassup={addWassup}/ >
    }   
}

export default AppContainer;