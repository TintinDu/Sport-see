import logo from "/public/logo.svg";
import styled from "styled-components";

const Header = styled.h1`
  margin: 1em;
`;

export const Logo = () => (
  <Header>
    <img src={logo} alt="Logo SportSee" />
  </Header>
);
