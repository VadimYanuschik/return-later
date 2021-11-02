import React, {useState} from 'react';
import {ReactComponent as PlusIcon} from '../../../assets/plus.svg';
import {AddListContainer, AddListBtn} from './AddList.styles';
import AddListModal from '../AddListModal/AddListModal.component';

function AddList() {
    const [isActive, setIsActive] = useState(false);
    const handleShowModal = () => {
        setIsActive(!isActive)
    }
    return (
        <AddListContainer>
            <AddListBtn onClick={handleShowModal}>
                <PlusIcon/>
                <span>Создать список</span>
            </AddListBtn>
            <AddListModal handleShowModal={handleShowModal} isActive={isActive}/>
        </AddListContainer>
    )
}

export default AddList