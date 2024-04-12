import React, { ReactNode } from "react";
import styled from "styled-components";
import blackOval from "/Oval.svg";
import redOval from "/RedOval.svg";

const Title = styled.h1`
  font-weight: 400;
  color: #333333;
  padding-left: 2em;
  font-size: 1em;
`;

const Div = styled.div`
  display: flex;
  color: #74798c;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 0;
`;

const LegendItem = styled.p`
  margin: 0 1em;
`;

interface ActivityChartHeaderProps {
  children?: ReactNode;
  payload: { value: string }[];
}

export const ActivityChartHeader: React.FC<ActivityChartHeaderProps> = (
  props,
) => {
  const { payload } = props;
  return (
    <>
      <Box>
        <Title>Activité quotidienne</Title>
        <Div>
          <img src={blackOval} alt="oval noir" />
          <LegendItem>{payload[0].value}</LegendItem>
          <img src={redOval} alt="oval rouge" />
          <LegendItem>{payload[1].value}</LegendItem>
        </Div>
      </Box>
    </>
  );
};
