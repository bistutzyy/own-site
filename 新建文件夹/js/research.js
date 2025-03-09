// 研究成果统计图表
const researchCtx = document.getElementById('researchChart').getContext('2d');
new Chart(researchCtx, {
    type: 'radar',
    data: {
        labels: ['实验研究', '数据分析', '论文撰写', '专利申请', '项目报告'],
        datasets: [{
            label: '研究进展',
            data: [85, 90, 70, 60, 80],
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
                    color: '#fff',
                    font: {
                        size: 12
                    }
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

// 实验数据可视化
const experimentCtx = document.getElementById('experimentData').getContext('2d');
new Chart(experimentCtx, {
    type: 'line',
    data: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
        datasets: [{
            label: '实验数据采集量',
            data: [30, 45, 60, 70, 85, 90],
            borderColor: '#88d3ce',
            backgroundColor: 'rgba(136, 211, 206, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#fff'
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#fff'
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

// 研究成果展示动画
document.addEventListener('DOMContentLoaded', function() {
    const researchItems = document.querySelectorAll('.research-item');
    
    researchItems.forEach(item => {
        const progressBar = item.querySelector('.progress-bar');
        const width = progressBar.style.width;
        progressBar.style.width = '0';
        setTimeout(() => {
            progressBar.style.width = width;
        }, 300);
    });
}); 