import styled from "styled-components";
import { UserMainDataType } from "../../models/UserMainData/UserMainDataType";

type WelcomeMessageProps = {
  userMainData: UserMainDataType | Promise<UserMainDataType>;
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({
  userMainData,
}) => {
  if (userMainData instanceof Promise) {
    return <Div>Chargement...</Div>;
  }

  return (
    <Div>
      <h2>Bonjour {userMainData.userInfos.firstName}</h2>
      <h3>Félicitations ! Vous avez explosé vos objectifs hier 👏</h3>
    </Div>
  );
};
