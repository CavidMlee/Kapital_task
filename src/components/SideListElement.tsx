import React from 'react'
import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface SideListProps {
    theme: DefaultTheme;
    choosed:boolean
}

interface IProps{
    index:string|number,
    selectindex:string|number,
    [x:string]: any;
}

export const SideListElement:React.FC<IProps> = ({index,selectindex,...rest})=>{
    return(
        <StyledSideListElement choosed={index === selectindex} {...rest}/>
    )
}

export const StyledSideListElement = styled.div<SideListProps>`
    position: relative;
    padding: 15px 25px;
    margin:10px;
    color: ${props =>props.choosed ? props.theme.colors.dark : props.theme.colors.white};
    background-color:${props =>props.choosed ?  props.theme.colors.white : 'transparent'};
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