import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { UserAverageSessionsFormattedData } from "./UserCharts";
import styled from "styled-components";
import { useEffect, useState } from "react";

export function UserAverageSessionsChart({
  data,
}: {
  data: UserAverageSessionsFormattedData[];
}) {
  const AverageSessionsChartHeader = styled.h3`
    color: #ffffff;
    opacity: 0.5;
    font-size: 12px;
    font-weight: 400;
    padding: 1em 2em;
    width: 80%;
  `;

  const WhiteTooltip = styled.div`
    background-color: #ffffff;
  `;

  const ToolTipContent = styled.p`
    color: #000;
    padding: 0.5em;
    font-size: 10px;
  `;

  const [containerHeight, setContainerHeight] = useState(260);

  const [fontSize, setFontSize] = useState(10);

  useEffect(() => {
    function updateDimensions() {
      const newHeight = window.innerWidth <= 1024 ? 180 : 260;
      const newFontSize = window.innerWidth <= 1024 ? 8 : 10;
      setFontSize(newFontSize);
      setContainerHeight(newHeight);
    }

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <ResponsiveContainer
      width="99%"
      height={containerHeight}
      style={{ backgroundColor: "red", borderRadius: "5px" }}
    >
      <LineChart
        data={data}
        margin={{
          top: 10,
          bottom: 10,
        }}
      >
        <Legend
          wrapperStyle={{ width: "75%" }}
          content={() => {
            return (
              <AverageSessionsChartHeader>
                Durée moyenne des sessions
              </AverageSessionsChartHeader>
            );
          }}
          verticalAlign="top"
        />
        <XAxis
          dataKey="name"
          tick={{ fill: "#FFF", opacity: 0.5 }}
          axisLine={false}
          tickLine={false}
          tickMargin={15}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            textAlign: "center",
            fontSize: `${fontSize}px`,
          }}
          content={({ payload }) => {
            if (payload) {
              return (
                <WhiteTooltip>
                  <ToolTipContent>{payload[0]?.value} min</ToolTipContent>
                </WhiteTooltip>
              );
            }
            return "Données corrompues";
          }}
          cursor={{
            stroke: "black",
            strokeOpacity: 0.2,
            strokeWidth: 120,
          }}
        />
        <Line
          dot={false}
          type="natural"
          dataKey="pv"
          stroke="white"
          strokeWidth={2}
          opacity={0.5}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
