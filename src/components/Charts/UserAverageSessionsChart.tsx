import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { UserAverageSessionsFormattedData } from "./UserCharts";

export function UserAverageSessionsChart({
  data,
}: {
  data: UserAverageSessionsFormattedData[];
}) {
  return (
    <ResponsiveContainer
      width="100%"
      height={150}
      style={{ backgroundColor: "red" }}
    >
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 50,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
        <XAxis
          dataKey="name"
          label={{ value: "", fill: "white" }}
          stroke="white"
        />
        <YAxis
          label={{ value: "Durée moyenne des sessions", fill: "white" }}
          stroke="white"
        />
        <Tooltip />
        <ReferenceLine x="3" stroke="white" />
        <ReferenceLine y={9800} label="Max" stroke="white" />
        <Line type="monotone" dataKey="pv" stroke="white" />
      </LineChart>
    </ResponsiveContainer>
  );
}
