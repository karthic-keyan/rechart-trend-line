import * as React from "react";
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  Text,
} from "recharts";
import TrendLine from "./components/TrendLine";
import AreaGraph from "./components/AreaChart";
import AreaGraph2 from "./components/AreaChart2";

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

export default function App() {
  return (
    <div>
      {/* <div className="flex m-2 border-2 border-black border-solid rounded">
        <TrendLine />
      </div> */}
      <div className="flex m-2 border-2 border-black border-solid rounded">
        {/* <AreaGraph /> */}
        <AreaGraph />
      </div>
    </div>
  );
}
