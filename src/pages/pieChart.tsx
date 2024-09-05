import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PieChart = () => {
  const data = {
    labels: ['Completed', 'In Progress', 'Open'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <div className='w-100'>
    <Pie data={data} />
  </div>;
};

export default PieChart;