import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Statistics = () => {
  const [totalDonations, setTotalDonations] = useState(0);

  /* Pie chart params */
  const [parameters, setParameters] = useState({});

  /* window current size */
  const [theWindowsWidthState, setTheWindowsWidthState] = useState(0);

  /* load the total donations */
  useEffect(() => {
    fetch("/donationJSON.json")
      .then((res) => res.json())
      .then((data) => setTotalDonations(data?.length));
  }, []);

  /* update size after resize */
  window.addEventListener("resize", () => {
    setTheWindowsWidthState(screen.width);
  });

  /* Get Your Donations */
  const LSDonationsString = localStorage.getItem("donations") || "[]";
  const myDonation = JSON.parse(LSDonationsString).length;

  /* Set the Getting values */
  const data = [
    { name: "Your Donations", value: myDonation },
    { name: "Total Donations", value: totalDonations },
  ];

  /* set colors */
  const COLORS = ["#00C49F", "#FF444A"];

  const RADIAN = Math.PI / 180;

  /* to responsive the pie chart with page */
  useEffect(() => {
    if (totalDonations !== 0) {
      if (theWindowsWidthState < 768) {
        const newParameters = {
          outerRadiusOfPie: 200,
          PieHeight: 650,
          PieWidth: 410,
          cxInPieChart: 200,
          cyInPieChart: 400,
        };
        setParameters(newParameters);
      } else if (theWindowsWidthState > 1556) {
        const newParameters = {
          outerRadiusOfPie: 300,
          PieHeight: 1000,
          PieWidth: 410,
          cxInPieChart: 200,
          cyInPieChart: 500,
        };
        setParameters(newParameters);
      }
    }
  }, [theWindowsWidthState, totalDonations]);

  /* label for each area */
  const myLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="font-bold flex flex-col items-center">
      <div className="grid grid-cols-1">
        <PieChart
          id="pieChartId"
          className="mx-auto"
          width={parameters.PieWidth}
          height={parameters.PieHeight}>
          <Pie
            className="text-xl md:text-2xl lg:text-4xl"
            data={data}
            cx={parameters.cxInPieChart}
            cy={parameters.cyInPieChart}
            labelLine={false}
            label={myLabel}
            outerRadius={parameters.outerRadiusOfPie}
            dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip></Tooltip>
        </PieChart>
      </div>

      <div className="flex max-sm:flex-col whitespace-nowrap gap-5 md:gap-10 mb-10 text-xs md:text-base xl:text-xl 2xl:text-5xl">
        <p className="flex items-center gap-5">
          Your Donation{" "}
          <span className="w-32 xl:w-40 h-2 xl:h-3 bg-[#00C49F]"></span>
        </p>
        <p className="flex items-center gap-5">
          Total Donation{" "}
          <span className="w-32 xl:w-40 h-2 xl:h-3 bg-[#FF444A]"></span>
        </p>
      </div>
    </div>
  );
};

export default Statistics;
