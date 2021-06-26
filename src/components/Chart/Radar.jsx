import React from 'react';
import { Radar } from 'react-chartjs-2';

function RadarChart() {
    const data = {
        labels: [
            'Maths',
            'Chemistry',
            'Physics',
            'Social Studies',
            'Computer Science'
        ],
        datasets: [
            {
                label: 'Saturday, 26th',
                data: [3, 2, 2, 1, 5],
                fill: true,
                borderColor: ['rgb(255, 99, 132)'],
                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: 'rgb(255, 99, 132)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'

            },
            {
                label: 'Sunday, 27th`',
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
                <Radar data={data} options={options} />



            </div>
        </div>
    )
}

export default RadarChart