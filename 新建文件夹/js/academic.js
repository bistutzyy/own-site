// 技能雷达图
const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['电路分析', '电力系统', 'MATLAB建模', '智能算法', '电力电子'],
        datasets: [{
            label: '技能掌握度',
            data: [85, 75, 80, 70, 75],
            backgroundColor: 'rgba(255, 117, 140, 0.2)',
            borderColor: '#ff758c',
            pointBackgroundColor: '#ff758c',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#ff758c'
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: {
                    color: 'rgba(255, 255, 255, 0.2)'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)'
                },
                pointLabels: {
                    color: '#fff'
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.6)',
                    backdropColor: 'transparent'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#fff'
                }
            }
        }
    }
});
