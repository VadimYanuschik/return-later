import React from 'react';
import {AddListModalContainer, ColorsList, ColorCircle, CrossIcon} from './AddListModal.styles';
import Button from '../../Button/Button.component';

function AddListModal({isActive, handleShowModal}) {
    return (
        isActive && (<AddListModalContainer>
            <CrossIcon onClick={handleShowModal} />
            <input type="text" placeholder='Название списка'/>
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
        </AddListModalContainer>)
    )
}

export default AddListModal