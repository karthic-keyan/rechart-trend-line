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
