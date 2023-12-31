import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const PieChart = () => {
  const data = {
    labels: ['Draft Course', 'Approved Course'],
    datasets: [
      {
        label: 'Number Of Courses',
        data: [2, 3],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
      },
    ],
  };

  return (
    <div className="col-span-12 border border-black rounded-xl bg-gray-100/50 shadow-2xl px-5 pt-7.5 pb-5 sm:px-7.5 xl:col-span-4">
      <h5 className="text-xl font-semibold text-black mt-6 mb-5">Courses Analytics</h5>

      <div className="mb-2">
        <div className="mx-auto flex justify-center">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
