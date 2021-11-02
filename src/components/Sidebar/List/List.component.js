import React from 'react';
import {ListContainer, ListDot, LinkStyled, CrossIconSvg} from './List.styles';

function List() {
    return (
        <ListContainer>
            <LinkStyled to="/">
                <ListDot color={"red"}/>
                Фильмы
                <CrossIconSvg/>
            </LinkStyled>
            <LinkStyled to="/">
                <ListDot color={"blue"}/>
                Сериалы
                <CrossIconSvg/>
            </LinkStyled>
            <LinkStyled to="/">
                <ListDot color={"green"}/>
                Книги
                <CrossIconSvg/>
            </LinkStyled>
            <LinkStyled to="/">
                <ListDot color={"yellow"}/>
                Страны для а также большой текс
                путешествий
                <CrossIconSvg/>
            </LinkStyled>
        </ListContainer>
    )
}

export default List