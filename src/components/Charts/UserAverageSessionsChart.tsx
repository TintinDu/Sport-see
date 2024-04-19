import {
  Customized,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import {} from "react";

import { UserAverageSessionsFormattedData } from "./UserCharts";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

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

export function UserAverageSessionsChart({
  data,
}: {
  data: UserAverageSessionsFormattedData[];
}) {
  const [containerHeight, setContainerHeight] = useState(260);

  const [fontSize, setFontSize] = useState(10);
  const [rectSize, setRectSize] = useState(130);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(
    null,
  );
  const chartRef = useRef(null);

  useEffect(() => {
    function updateDimensions() {
      const newHeight = window.innerWidth <= 1024 ? 180 : 260;
      const newFontSize = window.innerWidth <= 1024 ? 8 : 10;
      const newRectSize = window.innerWidth <= 1024 ? 100 : 130;
      setFontSize(newFontSize);
      setContainerHeight(newHeight);
      setRectSize(newRectSize);
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
      style={{
        backgroundColor: "red",
        borderRadius: "5px",
        position: "relative",
      }}
      ref={chartRef}
    >
      <LineChart
        data={data}
        margin={{
          top: 10,
          bottom: 10,
        }}
      >
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
          content={({ active, payload, coordinate }) => {
            if (active && payload && coordinate) {
              setCursorPos({ x: coordinate?.x || 0, y: coordinate?.y || 0 });
              return (
                <WhiteTooltip>
                  <ToolTipContent>{payload[0]?.value} min</ToolTipContent>
                </WhiteTooltip>
              );
            }
            return null;
          }}
          cursor={false}
        />
        <Line
          dot={false}
          type="natural"
          dataKey="pv"
          stroke="white"
          strokeWidth={2}
          opacity={0.5}
        />
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
        {cursorPos &&
        chartRef.current &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (chartRef.current as any)?.clientHeight ? (
          <Customized
            component={() => (
              <rect
                x={cursorPos.x}
                y={0}
                width={rectSize}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                height={(chartRef.current as any)?.clientHeight}
                fill="black"
                fillOpacity={0.2}
              />
            )}
          />
        ) : null}
      </LineChart>
    </ResponsiveContainer>
  );
}
