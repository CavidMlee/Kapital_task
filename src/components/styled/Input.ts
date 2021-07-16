import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface InputProps {
    theme: DefaultTheme;
}

export const Input = styled.input<InputProps>`
  display: flex;
  align-items: center;
  padding: 15px;
  max-width: 100%;
  font-size: 16px;
  border: solid 1px ${props => props.theme.colors.lightGray};
  outline:none;
  background-color: transparent;
`;

