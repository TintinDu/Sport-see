import React, { ReactNode } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: #333333;
`;

const Div = styled.div`
  display: flex;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
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
        <ul>
          <Div>
            {payload.map((entry, index: number) => (
              <li style={{ margin: "0 1em" }} key={`item-${index}`}>
                {entry.value}
              </li>
            ))}
          </Div>
        </ul>
      </Box>
    </>
  );
};
