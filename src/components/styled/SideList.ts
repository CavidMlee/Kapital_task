import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface SideListProps {
    theme: DefaultTheme;
}

export const SideList = styled.div<SideListProps>`
  display: flex;
  flex-direction: column;
  padding: 20px 10px 20px 5px;
  width: 300px;
  background-color: ${props => props.theme.colors.secondary};
  
`;

export const SideListElement = styled.div<SideListProps>`
    position: relative;
    padding: 15px 25px;
    margin:10px;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    transition: all 0.2s;
    &:hover{
        background-color: ${props => props.theme.colors.white};
        color:${props => props.theme.colors.dark}
        
    }
    &::before{
        content:'';
        display: inline-block;
        margin-right: 10px;
        width:10px;
        height: 10px;
        border-radius: 100%;
        background-color: ${props => props.theme.colors.white};
    }
`

