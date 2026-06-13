// i18n 翻译数据
const translations = {
    zh: {
        // 导航栏
        'nav.features': '功能',
        'nav.screenshots': '截图',
        'nav.download': '下载',
        'nav.feedback': '反馈',
        'nav.toggle-theme': '切换主题',
        'nav.language': '语言',

        // 英雄区
        'hero.subtitle': '现代化的EPUB阅读体验',
        'hero.description': '基于Readium的跨平台EPUB阅读器，优雅的界面设计，强大的阅读功能',
        'hero.download': '立即下载',

        // 功能特性
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

        // 截图
        'screenshots.title': '应用截图',

        // 下载
        'download.title': '下载应用',
        'download.subtitle': '选择适合您的平台',
        'download.apk': '📥 下载APK',
        'download.apk-sub': '从GitHub Releases',
        'download.github': '⭐ GitHub',
        'download.github-sub': '查看项目',

        // 反馈
        'feedback.title': '反馈与建议',
        'feedback.bug': '🐛 报告问题',
        'feedback.bug-desc': '如果您发现任何问题或BUG，欢迎在GitHub上提交Issue',
        'feedback.bug-btn': '提交Issue',
        'feedback.feature': '💡 功能建议',
        'feedback.feature-desc': '您有什么想法或建议？我们非常期待听到您的意见',
        'feedback.feature-btn': '讨论区',
        'feedback.sponsor': '❤️ 赞助支持',
        'feedback.sponsor-desc': '如果您喜欢这个应用，可以通过赞助来支持开发',
        'feedback.sponsor-btn': '赞助我们',

        // 页脚
        'footer.copyright': '© 2026 oSamu. 保留所有权利。',
        'footer.feedback': '问题反馈',
    },
    en: {
        // Navigation
        'nav.features': 'Features',
        'nav.screenshots': 'Screenshots',
        'nav.download': 'Download',
        'nav.feedback': 'Feedback',
        'nav.toggle-theme': 'Toggle Theme',
        'nav.language': 'Language',

        // Hero Section
        'hero.subtitle': 'A Modern EPUB Reading Experience',
        'hero.description': 'A cross-platform EPUB reader based on Readium with elegant interface design and powerful reading features',
        'hero.download': 'Download Now',

        // Features
        'features.title': 'Features',
        'features.epub': 'EPUB Reading',
        'features.epub-desc': 'Full support for EPUB2 and EPUB3 standards with smooth reading experience',
        'features.ui': 'Material Design 3 UI',
        'features.ui-desc': 'Modern and clean interface using Material Design 3 principles',
        'features.theme': 'Multiple Themes',
        'features.theme-desc': 'Rich theme options to meet personalized needs',
        'features.lang': 'Multi-language Support',
        'features.lang-desc': 'Friendly interface supporting multiple languages',
        'features.platform': 'Cross-platform',
        'features.platform-desc': 'Support for multiple operating systems',
        'features.performance': 'High Performance',
        'features.performance-desc': 'Fast loading and smooth page turning experience',

        // Screenshots
        'screenshots.title': 'Screenshots',

        // Download
        'download.title': 'Download',
        'download.subtitle': 'Choose the platform that suits you',
        'download.apk': '📥 Download APK',
        'download.apk-sub': 'From GitHub Releases',
        'download.github': '⭐ GitHub',
        'download.github-sub': 'View Project',

        // Feedback
        'feedback.title': 'Feedback & Suggestions',
        'feedback.bug': '🐛 Report Issues',
        'feedback.bug-desc': 'If you find any issues or bugs, please submit an Issue on GitHub',
        'feedback.bug-btn': 'Submit Issue',
        'feedback.feature': '💡 Feature Suggestions',
        'feedback.feature-desc': 'What ideas or suggestions do you have? We look forward to hearing from you',
        'feedback.feature-btn': 'Discussions',
        'feedback.sponsor': '❤️ Sponsor Support',
        'feedback.sponsor-desc': 'If you like this app, you can sponsor us to support development',
        'feedback.sponsor-btn': 'Sponsor Us',

        // Footer
        'footer.copyright': '© 2026 oSamu. All rights reserved.',
        'footer.feedback': 'Feedback',
    }
};

// i18n 管理器
const i18n = {
    currentLang: localStorage.getItem('language') || (navigator.language.startsWith('zh') ? 'zh' : 'en'),

    init() {
        this.setLanguage(this.currentLang);
    },

    setLanguage(lang) {
        if (!translations[lang]) {
            lang = 'en';
        }
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        this.updatePage();
    },

    t(key) {
        const keys = key.split('.');
        let value = translations[this.currentLang];

        for (let k of keys) {
            value = value[k];
            if (value === undefined) {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        return value;
    },

    updatePage() {
        // 更新所有带 data-i18n 属性的元素
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });

        // 更新所有带 data-i18n-title 属性的元素
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            el.title = this.t(key);
        });

        // 更新所有带 data-i18n-placeholder 属性的元素
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });
    },

    getLanguages() {
        return Object.keys(translations);
    }
};

// 导出给外部使用
window.i18n = i18n;
