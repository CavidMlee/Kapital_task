import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface SelectProps {
    theme: DefaultTheme;
}

export const Select = styled.select<SelectProps>`
  padding: 15px;
  width: 100%;
  font-size: 16px;
  border: solid 1px ${props => props.theme.colors.lightGray};
  outline:none;
  position: relative;
`;

