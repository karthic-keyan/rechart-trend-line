import * as React from "react";
import AreaGraph from "./components/AreaChart";
import AreaGraph2 from "./components/AreaChart2";
import { monthData, quaterData, yearData } from "./components/mockdata";

export default function App() {
  return (
    <div>
      <div className="flex gap-2 m-2">
        <AreaGraph
          data={monthData}
          dataKey="month"
          stroke="#4DA853"
          fill="#b0ee90"
        />
        <AreaGraph
          data={quaterData}
          dataKey="quater"
          stroke="#4DA853"
          fill="#b0ee90"
        />
        <AreaGraph
          data={yearData}
          dataKey="year"
          stroke="#4DA853"
          fill="#b0ee90"
        />
      </div>
      <div className="flex gap-2 m-2">
        <AreaGraph
          data={monthData}
          dataKey="month"
          stroke="#ff0000"
          fill="#ff6262"
        />
        <AreaGraph
          data={quaterData}
          dataKey="quater"
          stroke="#ff0000"
          fill="#ff6262"
        />
        <AreaGraph
          data={yearData}
          dataKey="year"
          stroke="#ff0000"
          fill="#ff6262"
        />
      </div>

      <div className="flex m-2 border-2 border-black border-solid rounded">
        <AreaGraph2 />
      </div>
    </div>
  );
}
