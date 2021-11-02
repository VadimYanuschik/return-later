import React from 'react';
import SidebarLogo from '../../../assets/sidebar-logo.png'
import {HeaderContainer, LogoLink, SidebarHideIcon} from './Header.styles';

function Header() {
    return (
        <HeaderContainer>
            <SidebarHideIcon/>
            <LogoLink to="/">
                <img src={SidebarLogo} alt=""/>
                <span>ReturnLater</span>
            </LogoLink>
        </HeaderContainer>
    )
}

export default Header