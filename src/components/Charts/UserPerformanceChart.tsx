import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { UserPerformanceFormattedData } from "./UserCharts";

export function UserPerformanceChart({
  data,
}: {
  data: UserPerformanceFormattedData[];
}) {
  return (
    <ResponsiveContainer
      width="99%"
      height={260}
      style={{ backgroundColor: "#282D30" }}
    >
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data}
        margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="subject" tick={{ fill: "white" }} />
        <Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
