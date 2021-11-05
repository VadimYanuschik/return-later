import React from 'react';
import {SidebarContainer} from './Sidebar.styles';
import Header from './Header/Header.component';
import AllLists from './AllLists/AllLists.component';
import List from './List/List.component';
import AddList from './AddList/AddList.component';

function Sidebar({lists}) {
    return (
        <SidebarContainer>
            <Header/>
            <AllLists/>
            <List lists={lists}/>
            <AddList/>
        </SidebarContainer>
    )
}

export default Sidebar