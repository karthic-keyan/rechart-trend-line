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
  Text,
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
    const textWidth = `${value}%`.length * 10; // approximate width based on character length
    const textHeight = 20; // approximate height of the text
    const padding = 5; // padding around the text
    return (
      <g>
        <rect
          x={x / 2 - 55}
          y={y / 2 - 50}
          width={70}
          height={40}
          fill="white"
          opacity={0.5}
          stroke="none"
          rx={5}
          ry={5}
        />
        <text
          className="w-5 h-5 bg-black"
          x={x / 2}
          y={y / 2}
          dy={-20}
          dx={-20}
          fill="#4DA853"
          fontSize={20}
          fontWeight="bold"
          textAnchor="middle"
        >
          {`${value}%`}
        </text>
      </g>
    );
  };

  const CustomizedComponent = (props) => {
    console.log("props", props);
    return <CustomLabel x={props.width} y={props.height} value="59" />;
  };

  const CustomText = ({ x, y, value }) => (
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
  return (
    <AreaChart
      width={600}
      height={200}
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
      ></Area>
      <Customized component={CustomizedComponent} />
    </AreaChart>
  );
}
