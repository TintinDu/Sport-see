import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { UserActivityFormattedData } from "./UserCharts";

export function UserActivityChart({
  data,
}: {
  data: UserActivityFormattedData[];
}) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={10}
        height={10}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          wrapperStyle={{ color: "#E60000" }}
          contentStyle={{ backgroundColor: "#E60000" }}
          itemStyle={{ color: "white" }}
        />
        <Legend />
        <Bar
          name={"Poids (kg)"}
          legendType="circle"
          dataKey="kilograms"
          fill="#282D30"
          activeBar={<Rectangle />}
          barSize={10}
          radius={[5, 5, 0, 0]}
        />
        <Bar
          name={"Calories brûlées (kCal)"}
          legendType="circle"
          dataKey="calories"
          fill="#E60000"
          activeBar={<Rectangle />}
          barSize={10}
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
