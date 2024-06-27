import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Customized,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function AreaGraph() {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#333",
            padding: "10px",
            borderRadius: "5px",
            color: "#fff",
          }}
        >
          <p className="label">{`${label} : ${payload[0].value}%`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomLabel = ({ x, y, value }) => {
    console.log("x, y, value", x, y, value);
    return (
      <text
        x={x}
        y={y}
        dy={-10}
        fill="#FF0000"
        fontSize={20}
        fontWeight="bold"
        textAnchor="middle"
      >
        {`${value}%`}
      </text>
    );
  };

  return (
    <AreaChart
      width={600}
      height={100}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      {/* <CartesianGrid /> */}
      {/* <XAxis dataKey="name" /> */}
      {/* <YAxis /> */}
      <Tooltip cursor={false} content={<CustomTooltip />} />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#4DA853"
        strokeWidth={4}
        fill="#4DA853"
      >
        <Customized
          component={({ xAxisMap, yAxisMap, dataKey, points }) => {
            console.log("points", points);
            const point = points.find((p) => p.payload.name === "24-05-2024");
            if (point) {
              return (
                <CustomLabel x={point.x} y={point.y} value={point.value} />
              );
            }
            return null;
          }}
        />
      </Area>
      <Label value="Pages of my website" offset={0} position="insideBottom" />
    </AreaChart>
  );
}
