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
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: #f3f3f3;
  margin: 0.5em;
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
        <p>{userKeyData?.calorieCount}</p>
      </Box>
      <Box>
        <img src={carbsIcon} alt="icône carbs" />
        <p>{userKeyData?.carbohydrateCount}</p>
      </Box>
      <Box>
        <img src={fatIcon} alt="icône gras" />
        <p>{userKeyData?.proteinCount}</p>
      </Box>
      <Box>
        <img src={proteinIcon} alt="icône protéine" />
        <p>{userKeyData?.lipidCount}</p>
      </Box>
    </Div>
  );
};
