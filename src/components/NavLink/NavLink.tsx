import styled from "styled-components";

const Div = styled.div`
  margin: 3em;
`;

export const NavLink = ({ linkName }: { linkName: string }) => (
  <Div>
    <a href="">{linkName}</a>
  </Div>
);
