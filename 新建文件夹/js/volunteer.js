// 数字动画效果
const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    const target = parseInt(number.textContent);
    let count = 0;
    const duration = 2000; // 动画持续2秒
    const increment = target / (duration / 16); // 每16ms更新一次

    function updateCount() {
        if (count < target) {
            count += increment;
            number.textContent = Math.min(Math.round(count), target);
            requestAnimationFrame(updateCount);
        }
    }

    // 使用 Intersection Observer 检测元素是否可见
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateCount();
            observer.disconnect();
        }
    });

    observer.observe(number);
});

// 志愿卡片动画效果
document.querySelectorAll('.volunteer-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.03) translateY(-5px)';
        card.style.boxShadow = 'var(--hover-shadow)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) translateY(0)';
        card.style.boxShadow = 'none';
    });
});

// 标签动画效果
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1)';
        tag.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    });
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
        tag.style.backgroundColor = 'var(--card-bg)';
    });
});

// 志愿服务统计动画
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-item .number');
    
    statNumbers.forEach(number => {
        const target = parseInt(number.textContent);
        let current = 0;
        const increment = target / 50;
        const duration = 1000;
        const step = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                number.textContent = target;
                clearInterval(timer);
            } else {
                number.textContent = Math.round(current);
            }
        }, step);
    });
}); 