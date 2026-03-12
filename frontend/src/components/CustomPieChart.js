import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#7c4dff', '#ff5252'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const CustomPieChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={200}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={70}
                    innerRadius={35}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="none"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip 
                    contentStyle={{ background: '#1a1a2e', border: '1px solid rgba(124,77,255,0.2)', borderRadius: '8px', color: '#e8e8f0' }}
                />
                <Legend 
                    wrapperStyle={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default CustomPieChart;