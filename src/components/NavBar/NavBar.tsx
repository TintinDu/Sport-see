import { Logo } from "../Logo/Logo";
import styled from "styled-components";
import { NavLink } from "../NavLink/NavLink";

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: white;
  background-color: black;
`;

export const NavBar = () => (
  <Nav>
    <Logo />
    <NavLink linkName="Accueil" />
    <NavLink linkName="Profil" />
    <NavLink linkName="Réglage" />
    <NavLink linkName="Communauté" />
  </Nav>
);
