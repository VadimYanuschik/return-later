import styled from 'styled-components';

export const ButtonContainer = styled.input`
  cursor: pointer;
  background-color: ${props => props.theme.colors[props.color]};
  color: #ffffff;
  font-size: ${props => props.theme.fontSizes.small};
  font-family: 'OpenSans-SemiBold', serif;
  border: none;
  outline: none;
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: ${props => props.theme.buttonSizes[props.size]};
`