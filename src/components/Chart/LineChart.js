import React from 'react'
import { Line, Bar, Radar } from 'react-chartjs-2';
import './styles.css'

function LineChart() {
    const data = {
        labels: [
            'Week 1',
            'Week 2',
            'Week 3',
            'Week 4',
            'Week 5'
        ],
        datasets: [
            {
                label: 'Academics',
                data: [3, 2, 2, 1, 5],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            },
            {
                label: 'Outdoor Activities',
                data: [1, 3, 2, 2, 3],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Line Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1.5
                    }
                }
            ]
        }
    }




    return (
        <div className="chartapp">
            <div className="chart">
                <Line data={data} options={options} />



            </div>
        </div>
    )
}

export default LineChart