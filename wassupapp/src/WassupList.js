import React from 'react';
import WassupIndividualPost from './WassupIndividualPost';

let WassupList = (props) => <div 
    className='wassup-posts-field'>
        { props.wassups.map(post =>
        <WassupIndividualPost post={post} /> )}
    </div> 

export default WassupList;