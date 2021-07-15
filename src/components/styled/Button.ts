import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface ButtonProps {
    theme: DefaultTheme;
}

export const Button = styled.button<ButtonProps>`
  background-color:${props => props.theme.colors.secondary};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;
`;

export const SecondButton = styled.button<ButtonProps>`
  background-color:${props => props.theme.colors.main};
  border: none;
  color: ${props => props.theme.colors.dark};
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;
`
