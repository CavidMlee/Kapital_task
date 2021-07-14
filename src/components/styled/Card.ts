import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface CardProps {
  theme: DefaultTheme;
}

export const Card = styled.div<CardProps>`
  margin:15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  height: 200px;
  width: 250px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};
`;

