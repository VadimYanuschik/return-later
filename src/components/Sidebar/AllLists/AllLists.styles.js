import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const AllListsLink = styled(Link)`
  padding: 12px 10px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.big};
  font-family: "OpenSans-SemiBold", serif;
  ${props => props.theme.mixins.sidebarHoverEffect}
`
