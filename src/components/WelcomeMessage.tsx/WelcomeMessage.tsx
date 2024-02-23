import styled from "styled-components";
import { UserMainDataType } from "../../models/UserMainData/UserMainDataType";

interface WelcomeMessageProps {
  userMainData: UserMainDataType;
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({
  userMainData,
}) => {
  return (
    <Div>
      <h2>Bonjour {userMainData.userInfos.firstName}</h2>
      <h3>Félicitations ! Vous avez explosé vos objectifs hier :clap:</h3>
    </Div>
  );
};
