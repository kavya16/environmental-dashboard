import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';



function App() {
  const [environmentalData, setEnvironmentalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/environmentalData');
        setEnvironmentalData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Environmental Monitoring Dashboard</h1>
      <ChartComponent data={environmentalData} />
    </div>
  );  
}

export default App;








const [environmentalData, setEnvironmentalData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/environmental-data'); // Replace with your actual API endpoint
      setEnvironmentalData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, []);




type ChartComponentProps = {
  data: any[]; // Update this with the appropriate data type
};

const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  // Prepare data for the chart
  const chartData = {
    labels: data.map((item) => item.label), // Update this based on your data structure
    datasets: [
      {
        label: 'Environmental Data', // Update with your desired label
        data: data.map((item) => item.value), // Update this based on your data structure
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Set desired background color
        borderColor: 'rgba(75, 192, 192, 1)', // Set desired border color
        borderWidth: 1, // Set desired border width
      },
    ],
  };

  // Configure chart options
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};
