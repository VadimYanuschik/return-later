import styled from 'styled-components';
import {ReactComponent as CrossIcon} from '../../../assets/cross.svg';
import {Link} from 'react-router-dom';

export const ListContainer = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
`

export const LinkStyled = styled(Link)`
  position: relative;
  font-weight: 600;
  padding: 12px 30px 12px 10px;
  ${props => props.theme.mixins.sidebarHoverEffect}
`

export const CrossIconSvg = styled(CrossIcon)`
  opacity: 0;
  position: absolute;
  right: 10px;
  top: 23px;
  transform: translateY(-50%);
  
  ${LinkStyled}:hover & {
    opacity: 1;
    transition: opacity 100ms ease-out 0.25s;
  }
`

export const ListDot = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 16px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors[props.color]};
`
