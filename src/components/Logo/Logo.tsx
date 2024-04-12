import logo from "/logo.svg";
import styled from "styled-components";

const Header = styled.h1`
  margin: 0.4em 0.5em;
`;

export const Logo = () => (
  <Header>
    <img src={logo} alt="Logo SportSee" />
  </Header>
);
