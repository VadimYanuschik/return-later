import React from 'react';
import {ButtonContainer} from './Button.styles';

function Button({text, color, size}) {
    return (
        <ButtonContainer type="button" value={text} color={color} size={size}/>
    )
}

export default Button