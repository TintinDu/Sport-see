import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import { UserScoreFormattedData } from "./UserCharts";

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export function UserScoreChart({ data }: { data: UserScoreFormattedData[] }) {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="100%"
        outerRadius="100%"
        barSize={10}
        data={data}
      >
        <RadialBar
          label={{ position: "insideStart", fill: "#fff" }}
          background
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
