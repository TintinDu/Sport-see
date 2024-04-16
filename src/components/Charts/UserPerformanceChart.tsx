import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { UserPerformanceFormattedData } from "./UserCharts";
import { useEffect, useState } from "react";

export function UserPerformanceChart({
  data,
}: {
  data: UserPerformanceFormattedData[];
}) {
  const [containerHeight, setContainerHeight] = useState(260);
  const [outerRadius, setOuterRadius] = useState(70);
  const [fontSize, setFontSize] = useState(10);

  useEffect(() => {
    function updateDimensions() {
      const newHeight = window.innerWidth <= 1024 ? 180 : 260;
      const newOuterRadius = window.innerWidth <= 1024 ? 50 : 70;
      const newFontSize = window.innerWidth <= 1024 ? 6 : 10;
      setContainerHeight(newHeight);
      setOuterRadius(newOuterRadius);
      setFontSize(newFontSize);
    }

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  return (
    <ResponsiveContainer
      width="99%"
      height={containerHeight}
      style={{ backgroundColor: "#282D30" }}
    >
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius={`${outerRadius}%`}
        data={data}
        margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: "white", fontSize: `${fontSize}px` }}
        />
        <Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
