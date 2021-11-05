import React from 'react';
import {ListColorModalContainer, CrossIcon, ColorsList, ColorCircle} from './ListColorModal.styles';
import Button from '../../Button/Button.component';

function ListColorModal() {
    return (
        <ListColorModalContainer>
            <CrossIcon />
            <ColorsList>
                <ColorCircle color={"red"} isSelected={true}/>
                <ColorCircle color={"orange"} isSelected={false}/>
                <ColorCircle color={"yellow"} isSelected={false}/>
                <ColorCircle color={"green"} isSelected={false}/>
                <ColorCircle color={"purple"} isSelected={false}/>
                <ColorCircle color={"aqua"} isSelected={false}/>
                <ColorCircle color={"gray"} isSelected={false}/>
            </ColorsList>
            <Button text={"Добавить"} color={"aqua"} size={"default"}/>
        </ListColorModalContainer>
    )
}

export default ListColorModal