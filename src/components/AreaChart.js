import React from "react";
import { AreaChart, Area, Tooltip, Customized, XAxis } from "recharts";

export default function AreaGraph({ data, dataKey, stroke, fill }) {
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
          fill={stroke}
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
    <div className="flex border-2 border-black border-solid rounded">
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
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow
              dx="3"
              dy="3"
              stdDeviation="3"
              floodColor="#000000"
              floodOpacity="0.3"
            />
          </filter>
        </defs>
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="percentage"
          stroke={stroke}
          strokeWidth={4}
          fill={fill}
          filter="url(#shadow)"
        ></Area>
        <XAxis dataKey={dataKey} />
        <Customized component={CustomizedComponent} />
      </AreaChart>
    </div>
  );
}
