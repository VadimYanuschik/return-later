import styled, {css} from 'styled-components';
import {ReactComponent as Icon} from '../../../assets/modal-cross.svg';

export const ListColorModalContainer = styled.div`
  position: absolute;
  margin-top: 20px;
  width: 100%;
  max-width: 327px;
  padding: 20px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  }
`

export const CrossIcon = styled(Icon)`
  position: absolute;
  cursor: pointer;
  right: -10px;
  top: -10px;
`

export const ColorsList = styled.div`
  display: flex;
  column-gap: 15px;
  margin-top: 15px;
  margin-bottom: 20px;
`

export const ColorCircle = styled.span`
  cursor: pointer;
  display: inline-block;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  ${props => props.isSelected ? css`border: 2px solid ${props => props.theme.colors.black}` : null};
  background-color: ${props => props.theme.colors[props.color]};
`