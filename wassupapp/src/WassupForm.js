import React, { Component } from 'react';

let WassupForm = (props) => (
    <form className='wassup-form'
        onSubmit = { (event) => {
            event.preventDefault();
            props.addWassup(props.newWassup);
            console.log('submit!!!!!')
        }}>

        <input 
            value={ props.newWassup }
            type='text' 
            className='wassup-input'
            placeholder='ok'
            onChange= { (event) => {
                let value = event.target.value;
                props.updateWassup(value);
            }}
        />,
        <button 
            type='submit' 
            className='input-button'
        > Click here </button>
    </form>
)


export default WassupForm;