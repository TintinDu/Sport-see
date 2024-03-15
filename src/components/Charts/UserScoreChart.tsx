import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import { UserScoreFormattedData } from "./UserCharts";

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
          fill="#FF0000"
          label={{
            position: "center",
            fill: "black",
          }}
          dataKey="uv"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
