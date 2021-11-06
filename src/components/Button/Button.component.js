import React from 'react';
import {ButtonContainer} from './Button.styles';

function Button({text, color, size, outline}) {
    return (
        <ButtonContainer type="button" outline={outline} value={text} color={color} size={size}/>
    )
}

export default Button