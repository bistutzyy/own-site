// 学习时间分配图表
const ctx1 = document.getElementById('studyChart').getContext('2d');
const studyChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['电路基础', '电力系统', 'MATLAB', '高数物理', '英语', '编程基础'],
        datasets: [{
            label: '每周学习时间（小时）',
            data: [12, 10, 8, 15, 6, 8],
            backgroundColor: [
                '#FF6B6B',
                '#4ECDC4',
                '#45B7D1',
                '#96CEB4',
                '#FFEEAD',
                '#D4A5A5'
            ],
            borderColor: [
                '#FF6B6B',
                '#4ECDC4',
                '#45B7D1',
                '#96CEB4',
                '#FFEEAD',
                '#D4A5A5'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// 技能雷达图
const ctx2 = document.getElementById('skillChart').getContext('2d');
const skillChart = new Chart(ctx2, {
    type: 'radar',
    data: {
        labels: ['电路分析', '电力系统基础', 'MATLAB建模', '物理基础', '数学能力', '编程技能'],
        datasets: [{
            label: '能力评估',
            data: [80, 75, 70, 85, 90, 65],
            backgroundColor: 'rgba(78, 205, 196, 0.2)',
            borderColor: '#4ECDC4',
            pointBackgroundColor: '#FF6B6B',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#FF6B6B'
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// 添加平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
