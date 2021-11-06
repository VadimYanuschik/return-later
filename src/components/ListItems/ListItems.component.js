import React from 'react';
import {
    AddNewItemButton,
    AddNewItem,
    CheckboxContainer,
    Header,
    Item,
    InputText,
    ItemListCompleted,
    ItemsList,
    ListItemsContainer, EditIcon, CheckIcon, ItemListCompletedButton,
    SolidArrowIcon, AddNewItemFormContainer, AddNewItemInput
} from './ListItems.styles';
import {ReactComponent as PlusIcon} from '../../assets/plus.svg';
import Button from '../Button/Button.component';

function ListItems() {
    return (
        <ListItemsContainer>
            <Header>
                <h1>Фильмы</h1>
                <EditIcon/>
            </Header>
            <hr/>
            <ItemsList>
                <Item>
                    <CheckboxContainer>
                        <input type="checkbox"/>
                        <span className="custom-checkbox">
                            <CheckIcon/>
                        </span>
                    </CheckboxContainer>
                    <InputText value={"Во все тяжкие"}/>
                </Item>
                <Item>
                    <CheckboxContainer>
                        <input type="checkbox"/>
                        <span className="custom-checkbox">
                            <CheckIcon/>
                        </span>
                    </CheckboxContainer>
                    <InputText value={"Гарри Поттер"}/>
                </Item>
            </ItemsList>
            <AddNewItem>
                <AddNewItemButton>
                    <PlusIcon/>
                    Добавить новый элемент
                </AddNewItemButton>
                <AddNewItemFormContainer>
                    <AddNewItemInput/>
                    <Button size={"small"} color={"blue"} text={"Добавить"}/>
                    <Button size={"small"} color={"gray"} text={"Отмена"} outline={true}/>
                </AddNewItemFormContainer>
            </AddNewItem>

            <ItemListCompletedButton>
                Завершенные <SolidArrowIcon/>
            </ItemListCompletedButton>
            <ItemListCompleted>
                <Item>
                    <CheckboxContainer>
                        <input type="checkbox"/>
                        <span className="custom-checkbox">
                            <CheckIcon/>
                        </span>
                    </CheckboxContainer>
                    <InputText value={"Ведьма"}/>
                </Item>
                <Item>
                    <CheckboxContainer>
                        <input type="checkbox"/>
                        <span className="custom-checkbox">
                            <CheckIcon/>
                        </span>
                    </CheckboxContainer>
                    <InputText value={"Большой куш"}/>
                </Item>
            </ItemListCompleted>
        </ListItemsContainer>
    )
}

export default ListItems