import React, { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';
import { userRows } from "../../datatablesource";
import { isSameDay, parseISO } from 'date-fns';

const PieType = () => {
    const [data, setData] = useState(userRows);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://34.234.66.51/api/v1/trip/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const apiData = await response.json();
                console.log('Full API Data:', apiData);

                const tripsArray = apiData.data ? apiData.data : [];
                console.log('Trips Array Length:', tripsArray.length);
                console.log('Trips Array:', tripsArray);

                const hoyISO = new Date().toISOString().split('T')[0];

                const hoyStrip = tripsArray.filter(item => {
                    const itemDate = parseISO(item.date);
                    return isSameDay(itemDate, new Date());
                });

                console.log('Today\'s Date (ISO):', hoyISO);
                console.log('Today\'s Trips:', hoyStrip);

                if (hoyStrip.length === 0) {
                    console.warn('No trips for today.');
                    return;
                }

                const tripCounts = hoyStrip.map(item => item.travel_type);
                const tripTypeCounts = tripCounts.reduce((counts, type) => {
                    counts[type] = (counts[type] || 0) + 1;
                    return counts;
                }, {});

                const dataArray = Object.entries(tripTypeCounts).map(([type, value]) => ({ type, value, name: type }));

                console.log('API response:', dataArray);
                setData(dataArray);
            } catch (error) {
                console.error('Error fetching data from API:', error.message || error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ width: 400, height: 450 }}>
            <ResponsiveContainer>
            <h2 style={{marginLeft:100}} >Viajes realizados hoy</h2>
                <PieChart width={400} height={400}>
                    <Pie dataKey="value" data={data} fill="#2791D6" label />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PieType;
