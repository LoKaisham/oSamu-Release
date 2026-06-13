// ============================================
// 深色模式切换
// ============================================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// 从localStorage读取保存的主题设置
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(theme);
}

// 设置主题
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

// 更新主题按钮图标
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeToggle.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="5"></circle>
                <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m2.54 2.54l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m2.54-2.54l4.24-4.24M19.78 19.78l-4.24-4.24m-2.54-2.54l-4.24-4.24"></path>
            </svg>
        `;
    } else {
        themeToggle.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        `;
    }
}

// 主题切换事件
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// 系统主题变化时自动切换
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newTheme = e.matches ? 'dark' : 'light';
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
        setTheme(newTheme);
    }
});

// ============================================
// 页面加载时初始化
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    addSmoothScrolling();
    initScreenshotGallery();
});

// ============================================
// 平滑滚动增强（针对不支持scroll-behavior的浏览器）
// ============================================
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ============================================
// 截图库交互
// ============================================
function initScreenshotGallery() {
    const screenshots = document.querySelectorAll('.screenshot');

    screenshots.forEach(screenshot => {
        screenshot.addEventListener('click', () => {
            openLightbox(screenshot.src);
        });
    });
}

// 简单的灯箱效果
function openLightbox(src) {
    // 创建灯箱容器
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <img src="${src}" alt="Full size screenshot">
        </div>
    `;

    // 添加样式
    if (!document.querySelector('style[data-lightbox]')) {
        const style = document.createElement('style');
        style.setAttribute('data-lightbox', 'true');
        style.textContent = `
            .lightbox {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                opacity: 0;
                animation: fadeIn 0.3s ease forwards;
            }

            @keyframes fadeIn {
                to {
                    opacity: 1;
                }
            }

            .lightbox-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
            }

            .lightbox-content img {
                width: 100%;
                height: auto;
                border-radius: 8px;
            }

            .lightbox-close {
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 2rem;
                cursor: pointer;
                line-height: 1;
                transition: opacity 0.3s ease;
            }

            .lightbox-close:hover {
                opacity: 0.7;
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(lightbox);

    // 关闭灯箱
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => {
        lightbox.style.opacity = '0';
        setTimeout(() => lightbox.remove(), 300);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.opacity = '0';
            setTimeout(() => lightbox.remove(), 300);
        }
    });
}

// ============================================
// 性能优化：图片延迟加载
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// 导航栏在滚动时的视觉反馈
// ============================================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }

    lastScrollTop = scrollTop;
});

// ============================================
// 菜单链接活跃状态
// ============================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

updateActiveNavLink();

// 添加活跃链接样式
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-menu a.active {
        color: var(--primary);
        border-bottom: 3px solid var(--primary);
        padding-bottom: 2px;
    }
`;
document.head.appendChild(activeStyle);
