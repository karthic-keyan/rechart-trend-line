import React from "react";
import { AreaChart, Area, Tooltip, Customized, XAxis } from "recharts";
import { data } from "./mockdata";

export default function AreaGraph2() {
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
        stroke="#4DA853"
        strokeWidth={4}
        fill="#90ee98"
        filter="url(#shadow)"
      ></Area>
      {/* <XAxis dataKey="month" /> */}
    </AreaChart>
  );
}
