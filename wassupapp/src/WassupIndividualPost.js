import React, { Component } from 'react';

let WassupIndividualPost = (props) =>  <li 
    key={ props.post.id } 
    className='wassup-posts'>
    { props.post.content } </li> 

export default WassupIndividualPost;