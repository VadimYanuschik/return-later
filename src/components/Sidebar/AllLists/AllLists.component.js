import React from 'react';
import {AllListsLink} from './AllLists.styles'
import {ReactComponent as ListIcon} from '../../../assets/list-all.svg';

function AllLists() {
    return (
        <AllListsLink to="/">
            <ListIcon/>
            <span>Все списки</span>
        </AllListsLink>
    )
}

export default AllLists