import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface LayoutProps {
  theme: DefaultTheme;
}

export const Layout = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${props => props.theme.colors.main};
`;

