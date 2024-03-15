import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
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
      width="100%"
      height={150}
      style={{ backgroundColor: "#282D30" }}
    >
      <RadarChart
        cx="50%"
        cy="60%"
        outerRadius="80%"
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#FF0101"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
