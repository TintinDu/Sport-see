import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { UserAverageSessionsFormattedData } from "./UserCharts";
import styled from "styled-components";

export function UserAverageSessionsChart({
  data,
}: {
  data: UserAverageSessionsFormattedData[];
}) {
  const AverageSessionsChartHeader = styled.h3`
    color: #ffffff;
    opacity: 0.5;
    font-size: 15px;
    font-weight: 400;
    padding: 1em 2em;
  `;

  const WhiteTooltip = styled.div`
    background-color: #ffffff;
  `;

  const ToolTipContent = styled.p`
    color: #000;
    padding: 0.5em;
    font-size: 10px;
  `;

  console.log(data);
  return (
    <ResponsiveContainer
      width="99%"
      style={{ backgroundColor: "red", borderRadius: "5px" }}
    >
      <>
        <AverageSessionsChartHeader>
          Durée moyenne des sessions
        </AverageSessionsChartHeader>
        <LineChart
          width={450}
          height={200}
          data={data}
          margin={{
            right: 50,
            left: 10,
            bottom: 10,
          }}
        >
          <XAxis
            dataKey="name"
            tick={{ fill: "#FFF", opacity: 0.5 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              textAlign: "center",
              fontSize: "10px",
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
              strokeWidth: 30,
            }}
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="pv"
            stroke="white"
            strokeWidth={2}
            opacity={0.5}
          />
        </LineChart>
      </>
    </ResponsiveContainer>
  );
}
