import React from 'react';
import './Buttons.css'

const ButtonsLayout = (props) => {
    return (
        <>
            <button className="span-two" onClick={props.click} value="AC" key="AC">AC</button>
            <button onClick={props.click} value="DEL" key="DEL">DEL</button>
            <button onClick={props.click} value="÷" key="÷">÷</button>
            <button onClick={props.click} value="1" key="1">1</button>
            <button onClick={props.click} value="2" key="2">2</button>
            <button onClick={props.click} value="3" key="3">3</button>
            <button onClick={props.click} value="*" key="*">*</button>
            <button onClick={props.click} value="4" key="4">4</button>
            <button onClick={props.click} value="5" key="5">5</button>
            <button onClick={props.click} value="6" key="6">6</button>
            <button onClick={props.click} value="+" key="+">+</button>
            <button onClick={props.click} value="7" key="7">7</button>
            <button onClick={props.click} value="8" key="8">8</button>
            <button onClick={props.click} value="9" key="9">9</button>
            <button onClick={props.click} value="-" key="-">-</button>
            <button onClick={props.click} value="." key=".">.</button>
            <button onClick={props.click} value="0" key="0">0</button>
            <button className='span-two equal' onClick={props.click} value="=" key="=">=</button>
        </>
    )
}

export default ButtonsLayout;