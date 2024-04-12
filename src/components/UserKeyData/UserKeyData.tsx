import styled from "styled-components";
import caloriesIcon from "/calories-icon.svg";
import carbsIcon from "/carbs-icon.svg";
import fatIcon from "/fat-icon.svg";
import proteinIcon from "/protein-icon.svg";
import { KeyDataType } from "../../models/UserMainData/UserMainDataType";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 2.5em;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em 1em;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fbfbfb;
  margin: 0.5em;
  padding: 1.5em 2em;
`;

export const UserKeyData = ({
  userKeyData,
}: {
  userKeyData: KeyDataType | null | undefined;
}) => {
  return (
    <Div>
      <Box>
        <img src={caloriesIcon} alt="icône calories" />
        <Card>
          <p>{userKeyData?.calorieCount}kCal</p>
          <p>Calories</p>
        </Card>
      </Box>
      <Box>
        <img src={proteinIcon} alt="icône protéine" />
        <Card>
          <p>{userKeyData?.proteinCount}g</p>
          <p>Proteines</p>
        </Card>
      </Box>
      <Box>
        <img src={carbsIcon} alt="icône carbs" />
        <Card>
          <p>{userKeyData?.carbohydrateCount}g</p>
          <p>Glucides</p>
        </Card>
      </Box>
      <Box>
        <img src={fatIcon} alt="icône gras" />
        <Card>
          <p>{userKeyData?.lipidCount}g</p>
          <p>Lipides</p>
        </Card>
      </Box>
    </Div>
  );
};
