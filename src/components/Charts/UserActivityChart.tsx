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
import { ActivityChartHeader } from "../Headers/ActivityChartHeader";

export function UserActivityChart({
  data,
}: {
  data: UserActivityFormattedData[];
}) {
  return (
    <ResponsiveContainer width="99%" height={320}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          bottom: 5,
          right: 0,
          left: 0,
        }}
      >
        <Legend
          content={({ payload }) => {
            if (payload) {
              return <ActivityChartHeader payload={payload} />;
            }
            return "Données corrompues";
          }}
          wrapperStyle={{ top: "-15px" }}
          verticalAlign="top"
          align="right"
        />
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis
          dataKey="kilograms"
          orientation="right"
          yAxisId="right"
          domain={[60, 70]}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          dataKey="calories"
          orientation="left"
          tick={false}
          axisLine={false}
          yAxisId="left"
        />
        <Tooltip
          wrapperStyle={{ color: "#E60000" }}
          contentStyle={{ backgroundColor: "#E60000" }}
          itemStyle={{ color: "white" }}
        />

        <Bar
          yAxisId="right"
          name={"Poids (kg)"}
          legendType="circle"
          dataKey="kilograms"
          fill="#282D30"
          activeBar={<Rectangle />}
          barSize={10}
          radius={[5, 5, 0, 0]}
        />
        <Bar
          yAxisId="left"
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
