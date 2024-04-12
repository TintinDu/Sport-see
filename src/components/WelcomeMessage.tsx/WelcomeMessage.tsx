import styled from "styled-components";
import { UserMainDataType } from "../../models/UserMainData/UserMainDataType";

type WelcomeMessageProps = {
  userMainData: UserMainDataType | Promise<UserMainDataType>;
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 6em;
`;

const WelcomeHeader = styled.h2`
  font-size: 3em;
`;

const SpanHeader = styled.span`
  color: red;
`;

const CongratulationsHeader = styled.h3`
  margin: 1.8em 0;
  font-weight: 500;
  font-size: 1.1em;
  letter-spacing: 0.2px;
`;

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({
  userMainData,
}) => {
  if (userMainData instanceof Promise) {
    return <Div>Chargement...</Div>;
  }

  return (
    <Div>
      <WelcomeHeader>
        Bonjour <SpanHeader>{userMainData.userInfos.firstName}</SpanHeader>
      </WelcomeHeader>
      <CongratulationsHeader>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </CongratulationsHeader>
    </Div>
  );
};
