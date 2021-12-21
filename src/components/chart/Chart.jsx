import React from 'react';
import './Chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, datakey, grid}) {
    return (
        <>
            <div className="Chart">
                <h3 className="chartTitle">{title}</h3>
                {/* chart */}
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <LineChart
                        data={data}
                        width={500}
                        height={300}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        { grid && <CartesianGrid strokeDasharray={grid} /> }
                        <XAxis dataKey="name" stroke="#5550bd" />
                        <Tooltip />
                        <Line type="monotone" dataKey={datakey} stroke="#5550bd" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
