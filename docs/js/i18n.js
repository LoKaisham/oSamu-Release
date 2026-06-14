const translations = {
    'zh': {
        'nav.home': '首页',
        'nav.features': '功能',
        'nav.screenshots': '截图',
        'nav.download': '下载',
        'nav.feedback': '反馈',
        'nav.toggle-theme': '切换主题',
        'hero.subtitle': '现代化的EPUB阅读体验',
        'hero.description': '一款基于 Readium 的跨平台 EPUB 阅读器，为书籍爱好者提供优雅的阅读体验。',
        'hero.download': '立即下载',
        'features.title': '功能特性',
        'features.epub': 'EPUB 阅读',
        'features.epub-desc': '基于 Readium 3.2.0，完整支持 EPUB2 和 EPUB3 标准。',
        'features.ui': '简约现代',
        'features.ui-desc': '采用 Material Design 3 设计语言。',
        'features.theme': '多色主题',
        'features.theme-desc': '丰富的主题选择满足个性化需求。',
        'features.lang': '多语言支持',
        'features.lang-desc': '现已支持简体中文、英语、日语、西班牙语、德语、法语。',
        'features.platform': '贴心设计',
        'features.platform-desc': '支持模糊搜索、快速回退等。',
        'features.performance': '系统要求',
        'features.performance-desc': 'Android 6.0+，WebView 86+。桌面与 iOS 开发中。',
        'screenshots.title': '截图展示',
        'download.title': '下载应用',
        'download.subtitle': '选择适合您的平台',
        'download.apk-btn': '📥 下载 APK',
        'download.apk-sub': '从 GitHub Releases',
        'download.github-btn': '⭐ GitHub',
        'download.github-sub': '查看项目',
        'feedback.title': '反馈与建议',
        'feedback.issue-title': '🐛 报告问题',
        'feedback.issue-desc': '如果您发现任何问题或 BUG，欢迎在 GitHub 上提交 Issue。',
        'feedback.issue-btn': '提交 Issue',
        'feedback.suggest-title': '💡 功能建议',
        'feedback.suggest-desc': '分享你的想法，帮助我们改进应用！',
        'feedback.suggest-btn': '讨论区',
        'feedback.sponsor-title': '❤️ 赞助支持',
        'feedback.sponsor-desc': '如果您喜欢 oSamu，可以通过赞助来支持开发。',
        'feedback.sponsor-btn': '赞助我们',
        'footer.feedback': '问题反馈'
    },
    'en': {
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.screenshots': 'Screenshots',
        'nav.download': 'Download',
        'nav.feedback': 'Feedback',
        'nav.toggle-theme': 'Toggle Theme',
        'hero.subtitle': 'Modern EPUB Reading Experience',
        'hero.description': 'A cross-platform EPUB reader based on Readium, providing an elegant reading experience for book lovers.',
        'hero.download': 'Download Now',
        'features.title': 'Key Features',
        'features.epub': 'EPUB Reading',
        'features.epub-desc': 'Based on Readium 3.2.0, full support for EPUB2 and EPUB3 standards.',
        'features.ui': 'Minimalist & Modern',
        'features.ui-desc': 'Adopts Material Design 3 design language.',
        'features.theme': 'Multi-color Themes',
        'features.theme-desc': 'Rich theme choices to suit your personal style.',
        'features.lang': 'Multilingual',
        'features.lang-desc': 'Supports Simplified Chinese, English, Japanese, Spanish, German, and French.',
        'features.platform': 'Thoughtful Design',
        'features.platform-desc': 'Supports fuzzy search, fast rollback, and more.',
        'features.performance': 'System Requirements',
        'features.performance-desc': 'Android 6.0+, WebView 86+. Desktop & iOS in development.',
        'screenshots.title': 'Screenshots',
        'download.title': 'Download App',
        'download.subtitle': 'Choose your platform',
        'download.apk-btn': '📥 Download APK',
        'download.apk-sub': 'From GitHub Releases',
        'download.github-btn': '⭐ GitHub',
        'download.github-sub': 'View Project',
        'feedback.title': 'Feedback & Suggestions',
        'feedback.issue-title': '🐛 Report Issues',
        'feedback.issue-desc': 'Found a bug? Report it on GitHub Issues.',
        'feedback.issue-btn': 'Submit Issue',
        'feedback.suggest-title': '💡 Suggestions',
        'feedback.suggest-desc': 'Share your thoughts to help us improve the app!',
        'feedback.suggest-btn': 'Discussions',
        'feedback.sponsor-title': '❤️ Support Us',
        'feedback.sponsor-desc': 'If you like oSamu, support development by becoming a sponsor.',
        'feedback.sponsor-btn': 'Sponsor Us',
        'footer.feedback': 'Feedback'
    }
};

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (translations[lang][key]) {
            el.title = translations[lang][key];
        }
    });

    // Save language preference
    localStorage.setItem('preferred-language', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    const langMenu = document.getElementById('langMenu');
    const langOptions = document.querySelectorAll('.lang-option');

    // Load saved language
    const savedLang = localStorage.getItem('preferred-language') ||
                      (navigator.language.startsWith('zh') ? 'zh' : 'en');
    updateLanguage(savedLang);

    // Toggle menu
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('show');
    });

    // Language selection
    langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.getAttribute('data-lang');
            updateLanguage(lang);
            langMenu.classList.remove('show');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', () => {
        langMenu.classList.remove('show');
    });
});
