import React from 'react';
import '../../style.css'

const Checker = (props) => {
    if (props.color === 'blue') {
        return <span className='checker backgroundBlue' draggable={true}/>
    } else if (props.color === 'red') {
        return <span className='checker backgroundRed' draggable={true} />
    } else return <></>
};

export default Checker;