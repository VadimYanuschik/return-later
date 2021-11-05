import React from 'react';
import {ListContainer, ListDot, LinkStyled, CrossIconSvg} from './List.styles';
import ListColorModal from '../ListColorModal/ListColorModal.component';

function List({lists}) {
    return (
        <ListContainer>
            {lists.map(item => (
                <LinkStyled key={item.id} to={`/lists/${item.id}`}>
                    <ListDot color={item.color}/>
                    {item.name}
                    <CrossIconSvg/>
                </LinkStyled>
            ))}
            {/*<ListColorModal/>*/}
        </ListContainer>
    )
}

export default List