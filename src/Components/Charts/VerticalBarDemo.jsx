import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function VerticalBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color') || '#333';
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary') || '#666';
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border') || '#ddd';

        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                {
                    label: 'Ventes 2025',
                    backgroundColor: '#2BC0E4',
                    borderColor: '#2BC0E4',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Ventes 2024',
                    backgroundColor: '#EAECC6',
                    borderColor: '#EAECC6',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} style={{ height: '400px' }} />
        </div>
    );
}
