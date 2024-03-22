import styled from "styled-components";
import bike from "/bike.svg";
import yoga from "/yoga.svg";
import swim from "/swim.svg";
import muscles from "/muscles.svg";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background-color: black;
  width: 117px;
`;

const Div = styled.div`
  margin: 1em auto;
`;

export const SideBar = () => (
  <Nav>
    <Div>
      <img src={yoga} alt="yoga SportSee" />
    </Div>
    <Div>
      <img src={swim} alt="swim SportSee" />
    </Div>
    <Div>
      <img src={bike} alt="bike SportSee" />
    </Div>
    <Div>
      <img src={muscles} alt="muscles SportSee" />
    </Div>
  </Nav>
);
