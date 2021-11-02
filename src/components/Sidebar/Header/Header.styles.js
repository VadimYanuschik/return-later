import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ReactComponent as SidebarHide} from '../../../assets/sidebar-hide.svg';

export const HeaderContainer = styled.div`

`

export const SidebarHideIcon = styled(SidebarHide)`
  display: block;
  margin-left: auto;
  cursor: pointer;
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 30px;
  color: #43aa99;
  font-size: ${props => props.theme.fontSizes.big};
  font-family: "OpenSans-SemiBold", serif;
`