import styled from 'styled-components';


export const AddListContainer = styled.div`
  
`

export const AddListBtn = styled.div`
  cursor: pointer;
  padding: 12px 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  font-weight: 600;
  column-gap: 10px;
  color: ${props => props.theme.colors.gray};
  ${props => props.theme.mixins.sidebarHoverEffect};
  user-select: none;
`