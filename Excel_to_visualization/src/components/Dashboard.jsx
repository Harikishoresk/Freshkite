import React, { useState } from "react";
import * as XLSX from "xlsx";
import FileUpload from "./FileUpload";
import TableData from "./TableData";
import WinLossChart from "./charts/WinLossChart";
import GameDistributionChart from "./charts/GameDistributionCharts";
import AmountByGameChart from "./charts/AmountByGameChart";

import { Card, CardContent } from "./ui/card";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [chartsData, setChartsData] = useState({});

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
      const raw_data = evt.target.result;
      const workbook = XLSX.read(raw_data, { type: "binary" });
      const worksheet = workbook.SheetNames[0];
      const sheet = workbook.Sheets[worksheet];
      const json_Data = XLSX.utils.sheet_to_json(sheet);
      setData(json_Data);
      generateCharts(json_Data);
    };
    reader.readAsBinaryString(file);
  };

  const generateCharts = (records) => {
    const winLossData = [
      {
        name: "Win",
        value: records.filter((r) => r["Result (Win/Loss)"] === "Win").length,
      },
      {
        name: "Loss",
        value: records.filter((r) => r["Result (Win/Loss)"] === "Loss").length,
      },
    ];

    const gameDistribution = Object.entries(
      records.reduce((acc, curr) => {
        const game = curr["Game Type"];
        acc[game] = (acc[game] || 0) + 1;
        return acc;
      }, {})
    ).map(([name, value]) => ({ name, value }));

    const amountByGame = Object.entries(
      records.reduce((acc, curr) => {
        const game = curr["Game Type"];
        acc[game] = (acc[game] || 0) + parseInt(curr["Amount ($)"]);
        return acc;
      }, {})
    ).map(([name, value]) => ({ name, value }));

    setChartsData({ winLossData, gameDistribution, amountByGame });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🎰 Casino Dashboard
      </h1>
      <FileUpload onUpload={handleFileUpload} />

      {data.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardContent>
              <WinLossChart data={chartsData.winLossData} />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <GameDistributionChart data={chartsData.gameDistribution} />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <AmountByGameChart data={chartsData.amountByGame} />
            </CardContent>
          </Card>
          <TableData data={data} />
        </div>
      )}
    </div>
  );
}
