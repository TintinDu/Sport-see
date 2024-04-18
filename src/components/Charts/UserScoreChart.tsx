import React, { useEffect, useState } from "react";
import {
  Cell,
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import { UserScoreFormattedData } from "./UserCharts";

interface CustomLabelProps {
  viewBox: {
    cx: number;
    cy: number;
  };
  value: number;
  fontSizeStatic: number;
  fontSizeScore: number;
  radius: number;
}

const CustomLabel: React.FC<CustomLabelProps> = ({
  viewBox,
  value,
  fontSizeStatic,
  fontSizeScore,
  radius,
}) => {
  const { cx, cy } = viewBox;
  return (
    <g>
      <circle cx={cx} cy={cy} r={radius} fill="white" />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        alignmentBaseline="middle"
        style={{ fontSize: fontSizeScore }}
      >
        <tspan>{`${value}%`}</tspan>
        {"\n"}
        <tspan
          x={cx}
          dy={25}
          textAnchor="middle"
          style={{ fontSize: fontSizeStatic, fill: "#74798c" }}
        >
          de votre{"\n"}objectif
        </tspan>
      </text>
    </g>
  );
};

export function UserScoreChart({ data }: { data: UserScoreFormattedData[] }) {
  const [containerHeight, setContainerHeight] = useState(260);
  const [radius, setRadius] = useState(85);
  const [fontSizeStatic, setFontSizeStatic] = useState(10);
  const [fontSizeScore, setFontSizeScore] = useState(10);

  useEffect(() => {
    function updateDimensions() {
      const newHeight = window.innerWidth <= 1024 ? 180 : 260;
      const newRadius = window.innerWidth <= 1024 ? 45 : 85;
      const newFontSizeScore = window.innerWidth <= 1024 ? 18 : 22;
      const newFontSizeStatic = window.innerWidth <= 1024 ? 11 : 18;
      setFontSizeScore(newFontSizeScore);
      setRadius(newRadius);
      setFontSizeStatic(newFontSizeStatic);
      setContainerHeight(newHeight);
    }

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <ResponsiveContainer width="99%" height={containerHeight}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="80%"
        outerRadius="100%"
        barSize={10}
        data={data}
        startAngle={0}
        endAngle={370}
      >
        <Legend
          wrapperStyle={{ padding: "0.5em", fontWeight: 500 }}
          content={() => "Score"}
          verticalAlign="top"
        />
        <RadialBar
          data={[{ value: 100 }]}
          dataKey=""
          cornerRadius={10}
          startAngle={90}
          endAngle={(360 * data[0].value) / 100 + 90}
        />
        <RadialBar
          label={({ viewBox, value }) => (
            <CustomLabel
              viewBox={viewBox}
              value={value}
              fontSizeStatic={fontSizeStatic}
              fontSizeScore={fontSizeScore}
              radius={radius}
            />
          )}
          dataKey="value"
          startAngle={90}
          endAngle={(360 * data[0].value) / 100 + 90}
          cornerRadius={10}
        >
          <Cell fill={"#FF0000"} />
        </RadialBar>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
