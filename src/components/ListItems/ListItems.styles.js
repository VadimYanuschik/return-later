import styled from 'styled-components';

export const NoItems = styled.div`
  
`

export const ListItemsContainer = styled.div`
  width: 100%;
  
  hr {
   background-color: ${props => props.theme.colors.gray}; 
  }
`

export const Header = styled.h1`
  font-size: 36px;
  color: ${props => props.theme.colors.red};
  font-family: "OpenSans-Bold", serif;
`

export const ItemsList = styled.ul`
  
`

export const Item = styled.li`
  
`

export const CheckboxContainer = styled.div`
  input[type="checkbox"] {
    
  }
  span {
    
  }
`

export const InputText = styled.input.attrs({type: 'text'})`
  
`

export const AddNewItem = styled.div`
  
`

export const ItemListCompleted = styled.ul`
  
`

