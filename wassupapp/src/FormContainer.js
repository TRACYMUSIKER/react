import React, { Component } from 'react';
import WassupForm from './WassupForm';

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newWassup: ''
        }
    }
    render() {
        let updateWassup = (value) => { 
            this.setState({ newWassup: value}) 
        }
    return <WassupForm updateWassup={updateWassup} addWassup={this.props.addWassup} newWassup={this.state.newWassup}/> 
    }
}

export default FormContainer;