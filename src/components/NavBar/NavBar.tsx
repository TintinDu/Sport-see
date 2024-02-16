import { Logo } from "../Logo/Logo";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  background-color: black;
`;

export const NavBar = () => (
  <Nav>
    <Logo />
    <a href="">Accueil</a>
    <a href="">Profil</a>
    <a href="">Réglage</a>
    <a href="">Communauté</a>
  </Nav>
);
