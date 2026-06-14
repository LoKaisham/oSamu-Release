// ============================================
// 深色模式切换 (MD3 兼容版)
// ============================================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(theme);
}

function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    if (!themeToggle) return;
    if (theme === 'dark') {
        themeToggle.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
        `;
    } else {
        themeToggle.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        `;
    }
}

// ============================================
// 导航栏动态变色
// ============================================
const navbar = document.querySelector('.navbar');

function updateNavbarAppearance() {
    if (!navbar) return;
    const allSections = document.querySelectorAll('section[id], .hero');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    let currentSection = null;

    // 在普通文档流中，从前往后找最后一个其顶部已经过线的
    allSections.forEach(section => {
        if (scrollTop >= section.offsetTop - 100) {
            currentSection = section;
        }
    });

    if (currentSection) {
        // 根据栏目类型决定导航栏背景（Deep/Shallow）
        const isDeep = currentSection.classList.contains('hero') ||
                       currentSection.classList.contains('screenshots') ||
                       currentSection.classList.contains('feedback');
        navbar.style.backgroundColor = isDeep ? 'var(--section-deep)' : 'var(--section-shallow)';

        // 滚动时增加细微阴影
        navbar.style.boxShadow = scrollTop > 20 ? '0 4px 12px rgba(0,0,0,0.1)' : 'none';
    }
}

// ============================================
// 菜单链接活跃状态
// ============================================
function updateActiveNavLink() {
    const allSections = document.querySelectorAll('section[id], .hero');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    let currentId = '';

    allSections.forEach(section => {
        if (scrollTop >= section.offsetTop - 100) {
            currentId = section.getAttribute('id') || '';
        }
    });

    document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// 初始化
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();

    // 绑定主题切换
    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    // 统一处理滚动监听
    window.addEventListener('scroll', () => {
        updateNavbarAppearance();
        updateActiveNavLink();
    }, { passive: true });

    // 锚点跳转拦截
    document.addEventListener('click', (e) => {
        // 查找最近的 a 标签
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;

        const targetId = anchor.getAttribute('href');
        if (targetId === '#' || !targetId) return;

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            // 使用标准的 scrollIntoView，它会尊重 CSS 的 scroll-margin-top
            target.scrollIntoView({
                behavior: 'smooth'
            });

            // 更新 URL hash
            history.pushState(null, null, targetId);
        }
    });

    // Logo 点击回顶
    const brand = document.querySelector('.nav-brand');
    if (brand) {
        brand.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            history.pushState(null, null, '#hero');
        });
    }

    // 初次运行同步状态
    updateNavbarAppearance();
    updateActiveNavLink();
});
