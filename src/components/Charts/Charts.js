import React, { useContext } from "react";
import { PieChart, Pie, Cell,LabelList} from "recharts";
import {MyContext} from "../../Utils/ExpenceCategoryContex.jsx"


function filterAndSum(arr) {
  const result = {};
  
  arr.forEach(item => {
      if (result[item.category]) {
          result[item.category] += Number(item.price);
      } else {
          result[item.category] = Number(item.price);
      }
  });
  
  return Object.keys(result).map(category => ({ category: category, price: result[category] }));
}
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize={'10px'}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Charts() {
  const {expenceCategory}=useContext(MyContext);
  let data=filterAndSum(expenceCategory)
  console.log(data);
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="price"
      >
        {data.map((entry, index) => (
          (
            <>
          <Cell key={`cell-${entry.category}`} />
          <LabelList dataKey="category" position="top" />

            </>
          )
        ))}
      </Pie>
    </PieChart>
  );
}
