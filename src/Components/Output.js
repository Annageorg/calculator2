import React from 'react';
import './Output.css'

const Output = (props) => {
    return (
        <div className='output'>
            <div className='previous-operand'>{props.previous} {props.operation}</div>
            <div className='current-operand'>{props.current}</div>
        </div>
    )
}

export default Output;