import React from "react";
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
}

const CustomLabel: React.FC<CustomLabelProps> = ({ viewBox, value }) => {
  const { cx, cy } = viewBox;
  return (
    <text
      x={cx}
      y={cy}
      textAnchor="middle"
      alignmentBaseline="middle"
      style={{ fontSize: 22, fill: "black" }}
    >
      <tspan>{`${value}%`}</tspan>
      {"\n"}
      <tspan
        x={cx}
        dy={25}
        textAnchor="middle"
        style={{ fontSize: 18, fill: "#74798c" }}
      >
        de votre{"\n"}objectif
      </tspan>
    </text>
  );
};

export function UserScoreChart({ data }: { data: UserScoreFormattedData[] }) {
  return (
    <ResponsiveContainer width="99%" height={260}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="100%"
        outerRadius="100%"
        barSize={10}
        data={data}
        startAngle={0}
        endAngle={370}
      >
        <Legend
          wrapperStyle={{ padding: "1em" }}
          content={() => "Score"}
          verticalAlign="top"
        />

        <RadialBar
          data={[{ value: 100 }]}
          dataKey=""
          cornerRadius={10}
          startAngle={90}
          endAngle={(360 * data[0].value) / 100 + 90}
        >
          <Cell fill={"grey"} />
        </RadialBar>
        <RadialBar
          label={({ viewBox, value }) => (
            <CustomLabel viewBox={viewBox} value={value} />
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
