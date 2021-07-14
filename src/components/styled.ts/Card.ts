import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface CardProps {
  theme: DefaultTheme;
}

export const Card = styled.div<CardProps>`
  display: flex;
  min-height: 250px;
  min-width: 400px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};
`;

