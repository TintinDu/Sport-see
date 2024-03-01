import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { UserPerformanceFormattedData } from "./TestChart";

export function UserPerformanceChart({
  data,
}: {
  data: UserPerformanceFormattedData[];
}) {
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height="100%" minWidth="258px">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
