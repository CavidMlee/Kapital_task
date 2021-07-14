import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface FixOverflowProps {
  theme: DefaultTheme;
}

export const FixOverflow = styled.div<FixOverflowProps>`
    height:100%;
    width: calc(100% - 300px);
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
    //background-color: ${props => props.theme.colors.main};
`;

