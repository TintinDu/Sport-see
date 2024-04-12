import styled from "styled-components";
import bike from "/bike.svg";
import yoga from "/yoga.svg";
import swim from "/swim.svg";
import muscles from "/muscles.svg";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  color: white;
  background-color: black;
  width: 117px;
`;

const LogosContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div = styled.div`
  margin: 1em auto;
`;

const Copiryght = styled.p`
  transform: rotate(270deg);
  white-space: nowrap;
  width: 1em;
`;

export const SideBar = () => (
  <Nav>
    <LogosContainer>
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
    </LogosContainer>
    <Div>
      <Copiryght>Copiryght, SportSee 2020</Copiryght>
    </Div>
  </Nav>
);
