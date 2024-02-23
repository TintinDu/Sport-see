import { UserMainDataType } from "../../models/UserMainData/UserMainDataType";

interface WelcomeMessageProps {
  userMainData: UserMainDataType;
}

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({
  userMainData,
}) => {
  return (
    <>
      <h2>Bonjour {userMainData.userInfos.firstName}</h2>
      <h3>Félicitations ! Vous avez explosé vos objectifs hier :clap:</h3>
    </>
  );
};
