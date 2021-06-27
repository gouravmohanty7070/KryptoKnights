import React from 'react';
import { Line, Bar, Radar } from 'react-chartjs-2';
import './styles.css';
import LineChart from './LineChart';
import BarChart from './Bar';
import RadarChart from './Radar';
import Typography from '@material-ui/core/Typography';



function Chart() {



    const data = {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'April',
            'May'
        ],
        datasets: [
            {
                label: 'Sales 2020 (M)',
                data: [3, 2, 2, 1, 5],
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
                pointBorderColor: 'rgba(255, 206, 86, 0.2)'
            },
            {
                label: 'Sales 2019 (M)',
                data: [1, 3, 2, 2, 3],
                borderColor: ['rgba(54, 162, 235, 0.2)'],
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
                pointBorderColor: 'rgba(54, 162, 235, 0.2)'
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
        <> 
            <Typography variant="h2" align = "center" className="chartHeader" gutterBottom>
                Chart List 
            </Typography>
            <LineChart />
            {/* <BarChart /> */}
            <Typography variant="h5" align = "center" color = "secondary" gutterBottom>
                Activities Chart
            </Typography>
            {/* <BarChart /> */}
            <RadarChart />
            <Typography variant="h5" align = "center" color = "secondary"  gutterBottom>
                Subject tracker
            </Typography>
        </>
    )
}

export default Chart