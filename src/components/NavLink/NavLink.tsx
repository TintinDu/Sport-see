import styled from "styled-components";

const NavLinkDiv = styled.div`
  margin: 1.5em 4em;
  font-size: 1.4em;
`;

export const NavLink = ({ linkName }: { linkName: string }) => (
  <NavLinkDiv>
    <a href="">{linkName}</a>
  </NavLinkDiv>
);
