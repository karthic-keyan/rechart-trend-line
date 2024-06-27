import React from "react";
import { AreaChart, Area, Tooltip, Customized, XAxis } from "recharts";

const data = [
  {
    month: "Jan",
    percentage: 40,
  },
  {
    month: "Feb",
    percentage: 50,
  },
  {
    month: "Mar",
    percentage: 60,
  },
  {
    month: "Apr",
    percentage: 70,
  },
  {
    month: "May",
    percentage: 20,
  },
  {
    month: "June",
    percentage: 35,
  },
  {
    month: "July",
    percentage: 40,
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
    return <CustomLabel x={props.width} y={props.height} value="59" />;
  };

  return (
    <AreaChart
      width={600}
      height={200}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 0,
      }}
    >
      <Tooltip cursor={false} content={<CustomTooltip />} />
      <Area
        type="monotone"
        dataKey="percentage"
        stroke="#4DA853"
        strokeWidth={4}
        fill="#4DA853"
      ></Area>
      <XAxis dataKey="month" />
      <Customized component={CustomizedComponent} />
    </AreaChart>
  );
}
