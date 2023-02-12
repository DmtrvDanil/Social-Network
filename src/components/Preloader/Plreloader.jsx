import React from 'react';
import preloaderIcon from './../../assets/6b67cb8a166c0571c1290f205c513321.gif'

const Preloader = (props) => {
    return (
        <div>
            <img src={props.preload ? preloaderIcon : null}/>
        </div>
    )
}

export default Preloader;