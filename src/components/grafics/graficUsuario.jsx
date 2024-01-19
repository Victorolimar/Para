import React, { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';
import { userRows } from "../../datatablesource";

const GraficUsuario = () => {
    const [data, setData] = useState(userRows);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const [clientResponse, driverResponse] = await Promise.all([
              fetch('http://34.234.66.51/api/v1/client/'),
              fetch('http://34.234.66.51/api/v1/driver'),
            ]);
      
            if (!clientResponse.ok || !driverResponse.ok) {
              throw new Error(`HTTP error! Client Status: ${clientResponse.status}, Driver Status: ${driverResponse.status}`);
            }
      
            const [clientData, driverData] = await Promise.all([
              clientResponse.json(),
              driverResponse.json(),
            ]);

            const users = clientData.data ? clientData.data : [];
            const drivers = driverData.data ? driverData.data : [];
            const totalUsers = users.length || 0;
            const totalDrivers = drivers.length || 0;

            const totalCounts = [
                { type: "Clientes", value: totalUsers },
                { type: "Conductores", value: totalDrivers },
            ];

            console.log('Total Users:', totalUsers);
            console.log('Total Drivers:', totalDrivers);

            setData(totalCounts);
          } catch (error) {
            console.error('Error fetching data from API:', error);
          }
        };

      
        fetchData();
    }, []);

    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
          return (
              <div className="custom-tooltip">
                  <p>{payload[0].payload.type}: {payload[0].value}</p>
              </div>
          );
      }

      return null;
  };
  
    return (
        <div style={{ width: 400, height: 450 }}>
            <ResponsiveContainer>
            <h2 style={{marginLeft:100}} >Total de clientes y conductores hoy</h2>
                <PieChart width={400} height={400}>
                    <Pie dataKey="value" data={data} fill="#8884d8" label />
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GraficUsuario;
