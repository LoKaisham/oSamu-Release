const translations = {
    'zh': {
        'nav.features': '功能',
        'nav.screenshots': '截图',
        'nav.download': '下载',
        'nav.feedback': '反馈',
        'nav.toggle-theme': '切换主题',
        'hero.subtitle': '现代化的EPUB阅读体验',
        'hero.description': '基于Readium的跨平台EPUB阅读器，优雅的界面设计，强大的阅读功能',
        'hero.download': '立即下载',
        'features.title': '功能特性',
        'features.epub': 'EPUB阅读',
        'features.epub-desc': '完整支持EPUB2和EPUB3标准，流畅的阅读体验',
        'features.ui': 'MD3风格UI',
        'features.ui-desc': '采用Material Design 3设计语言，现代简洁的界面',
        'features.theme': '多色主题',
        'features.theme-desc': '丰富的主题选择，满足个性化需求',
        'features.lang': '多语言支持',
        'features.lang-desc': '支持多种语言界面，全球用户友好',
        'features.platform': '跨平台',
        'features.platform-desc': '支持多个操作系统平台',
        'features.performance': '高性能',
        'features.performance-desc': '快速加载，流畅的翻页体验',
        'screenshots.title': '应用截图',
        'download.title': '下载应用',
        'download.subtitle': '选择适合您的平台',
        'download.apk-btn': '📥 下载APK',
        'download.apk-sub': '从GitHub Releases',
        'download.github-btn': '⭐ GitHub',
        'download.github-sub': '查看项目',
        'feedback.title': '反馈与建议',
        'feedback.issue-title': '🐛 报告问题',
        'feedback.issue-desc': '如果您发现任何问题或BUG，欢迎在GitHub上提交Issue',
        'feedback.issue-btn': '提交Issue',
        'feedback.suggest-title': '💡 功能建议',
        'feedback.suggest-desc': '您有什么想法或建议？我们非常期待听到您的意见',
        'feedback.suggest-btn': '讨论区',
        'feedback.sponsor-title': '❤️ 赞助支持',
        'feedback.sponsor-desc': '如果您喜欢这个应用，可以通过赞助来支持开发',
        'feedback.sponsor-btn': '赞助我们',
        'footer.feedback': '问题反馈'
    },
    'en': {
        'nav.features': 'Features',
        'nav.screenshots': 'Screenshots',
        'nav.download': 'Download',
        'nav.feedback': 'Feedback',
        'nav.toggle-theme': 'Toggle Theme',
        'hero.subtitle': 'Modern EPUB Reading Experience',
        'hero.description': 'A cross-platform EPUB reader based on Readium, with elegant design and powerful features',
        'hero.download': 'Download Now',
        'features.title': 'Key Features',
        'features.epub': 'EPUB Reading',
        'features.epub-desc': 'Full support for EPUB2 and EPUB3 standards with a smooth experience',
        'features.ui': 'MD3 Style UI',
        'features.ui-desc': 'Modern interface using Material Design 3 design language',
        'features.theme': 'Multi-color Themes',
        'features.theme-desc': 'Rich theme options to meet your personal preferences',
        'features.lang': 'Multilingual',
        'features.lang-desc': 'Global user-friendly interface with multi-language support',
        'features.platform': 'Cross-platform',
        'features.platform-desc': 'Supports multiple operating system platforms',
        'features.performance': 'High Performance',
        'features.performance-desc': 'Fast loading and smooth page-turning experience',
        'screenshots.title': 'Screenshots',
        'download.title': 'Download App',
        'download.subtitle': 'Choose your platform',
        'download.apk-btn': '📥 Download APK',
        'download.apk-sub': 'From GitHub Releases',
        'download.github-btn': '⭐ GitHub',
        'download.github-sub': 'View Project',
        'feedback.title': 'Feedback & Suggestions',
        'feedback.issue-title': '🐛 Report Issues',
        'feedback.issue-desc': 'Found a bug? Report it on GitHub Issues',
        'feedback.issue-btn': 'Submit Issue',
        'feedback.suggest-title': '💡 Suggestions',
        'feedback.suggest-desc': 'Have an idea? Let us know in the Discussions',
        'feedback.suggest-btn': 'Discussions',
        'feedback.sponsor-title': '❤️ Support Us',
        'feedback.sponsor-desc': 'Support development by becoming a sponsor',
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
