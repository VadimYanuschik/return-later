import styled, {css} from 'styled-components';

export const ButtonContainer = styled.input`
  cursor: pointer;
  background: ${props => props.outline ? 'none' : props.theme.colors[props.color]};
  color: ${props => props.outline ? props.theme.colors[props.color] : '#ffffff'};
  font-size: ${props => props.theme.fontSizes.small};
  font-family: 'OpenSans-SemiBold', serif;
  border: ${props => props.outline ? '1px solid ' + props.theme.colors[props.color] : 'none'};
  outline: none;
  border-radius: 5px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: ${props => props.theme.buttonSizes[props.size]};
  transition: 200ms ease-in-out;
  &:hover {
    ${props => props.outline && css`
      background-color: ${props.theme.colors[props.color]};
      color: #fff;
    `}
    ${props => props.theme.mixins.shadowButton};
  }
`