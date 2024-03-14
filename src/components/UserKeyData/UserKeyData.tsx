import styled from "styled-components";
import { KeyDataType } from "../../models/UserMainData/UserMainDataType";

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserKeyData = ({
  userKeyData,
}: {
  userKeyData: KeyDataType | null | undefined;
}) => {
  return <Div>{userKeyData?.calorieCount}</Div>;
};
