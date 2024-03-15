import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
`;

export const ActivityChartHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Activité quotidienne</Title>
    </HeaderContainer>
  );
};
