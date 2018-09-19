import React, { Component } from 'react';
import WassupList from './WassupList';
import WassupHeader from './WassupHeader';
import FormContainer from './FormContainer'

let App = (props) => 
    <div className='main-div'>
        <WassupHeader/>
        <FormContainer addWassup={props.addWassup} />
        <WassupList wassups={ props.wassups } />
    </div>

export default App;
