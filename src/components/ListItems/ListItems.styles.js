import styled from 'styled-components';
import {ReactComponent as Edit} from '../../assets/edit.svg';
import {ReactComponent as Check} from '../../assets/check.svg';
import {ReactComponent as SolidArrow} from '../../assets/solid-arrow.svg';

export const NoItems = styled.div`

`

export const ListItemsContainer = styled.div`
  width: 100%;
  padding-top: 60px;
  padding-left: 50px;

  hr {
    background-color: ${props => props.theme.colors.gray};
    border-top: 0;
    margin-bottom: 30px;
    margin-top: 25px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  h1 {
    font-size: 36px;
    color: ${props => props.theme.colors.red};
    font-family: "OpenSans-Bold", serif;
  }
`

export const EditIcon = styled(Edit)`
  cursor: pointer;
`

export const ItemsList = styled.ul`

`

export const Item = styled.li`
  display: flex;
  column-gap: 20px;
  margin-bottom: 21px;
`

export const CheckboxContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;

  input[type="checkbox"] {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    cursor: pointer;
    border: 2px solid ${props => props.theme.colors.gray};
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`

export const AddNewItem = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`

export const AddNewItemInput = styled.input`
  width: 100%;
  max-width: 600px;
  height: 40px;
  border-radius: 5px;
  padding: 9px 0 9px 20px;
  font-size: 18px;
  color: ${props => props.theme.colors.gray};
  border: 1px solid ${props => props.theme.colors.gray};
  margin-bottom: 20px;
  display: block;
`

export const AddNewItemFormContainer = styled.div`
  input:last-child {
    margin-left: 20px;
  }
`

export const AddNewItemButton = styled.div`
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.big};
  color: ${props => props.theme.colors.gray};
  font-family: "OpenSans-SemiBold", serif;

  svg {
    margin-right: 10px;
  }
`

export const ItemListCompleted = styled.ul`
`

export const ItemListCompletedButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-family: 'OpenSans-SemiBold', serif;
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.gray};
  margin-bottom: 28px;
`

export const SolidArrowIcon = styled(SolidArrow)`
  
`

export const InputText = styled.input.attrs({type: 'text'})`
  border: none;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.medium};
  font-family: "OpenSans-Regular", serif;
  outline: none;
  
  ${ItemListCompleted} & {
    color: ${props => props.theme.colors.gray};
    text-decoration: line-through;
  }
`

export const CheckIcon = styled(Check)`
  stroke: white;
  transition: 200ms ease-in-out;

  &:hover {
    stroke: ${props => props.theme.colors.gray};
  }
  ${ItemListCompleted} & {
    stroke: ${props => props.theme.colors.gray};
  }
`

