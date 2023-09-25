import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  /* load the total donations */
  useEffect(() => {
    fetch("/donation.json")
      .then((res) => res.json())
      .then((data) => setTotalDonations(data?.length));
  }, []);

  const [totalDonations, setTotalDonations] = useState(0);

  const LSDonationsString = localStorage.getItem("donations") || [];
  const myDonation = JSON.parse(LSDonationsString).length;

  const data = [
    { name: "Your Donations", value: (myDonation * 100) / 12 },
    { name: "Total Donations", value: (totalDonations * 100) / 12 },
  ];

  const COLORS = ["#FF0000", "#00FF00"];

  const RADIAN = Math.PI / 180;
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
    <div>
      <PieChart width={800} height={800}>
        <Pie
          data={data}
          cx={600}
          cy={500}
          labelLine={false}
          label={myLabel}
          outerRadius={150}
          dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Statistics;
