import React from 'react';
import {
    AddNewItem,
    CheckboxContainer,
    Header,
    Item,
    InputText,
    ItemListCompleted,
    ItemsList,
    ListItemsContainer
} from './ListItems.styles';

function ListItems() {
    return (
        <ListItemsContainer>
            <Header>

                <hr/>
            </Header>
            <ItemsList>
                <Item>
                    <CheckboxContainer></CheckboxContainer>
                    <InputText></InputText>
                </Item>
                <Item>
                    <CheckboxContainer></CheckboxContainer>
                    <InputText></InputText>
                </Item>
            </ItemsList>
            <AddNewItem></AddNewItem>
            <ItemListCompleted></ItemListCompleted>
        </ListItemsContainer>
    )
}

export default ListItems