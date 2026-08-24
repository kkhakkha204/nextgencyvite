import React, {useEffect, useRef, useState} from 'react';
import {Check, ChevronDown, Globe} from 'lucide-react';
import {LOCALES, useI18n} from '../i18n';

/**
 * Nút đổi ngôn ngữ. Đổi ngôn ngữ = điều hướng sang cùng trang ở prefix khác
 * (/ , /en , /cn) nên URL luôn chia sẻ được và không cần lưu state ở đâu cả.
 *
 * variant="desktop" - nút thả xuống, dùng trong thanh header
 * variant="mobile"  - hàng nút nằm ngang, dùng trong menu mobile
 */
const LanguageSwitcher = ({variant = 'desktop'}) => {
    const {locale, localeConfig, switchLocale, t} = useI18n();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    // Bấm ra ngoài hoặc nhấn Esc thì đóng danh sách
    useEffect(() => {
        if (!isOpen) return;

        const handlePointerDown = (event) => {
            if (!containerRef.current?.contains(event.target)) setIsOpen(false);
        };
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setIsOpen(false);
        };

        document.addEventListener('mousedown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('mousedown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    if (variant === 'mobile') {
        return (
            <div className="flex items-center gap-2">
                {LOCALES.map((item) => (
                    <button
                        key={item.code}
                        type="button"
                        lang={item.htmlLang}
                        onClick={() => switchLocale(item.code)}
                        aria-current={item.code === locale ? 'true' : undefined}
                        className={`flex-1 rounded-3xl border border-[#111111] px-3 py-2 text-[13px] transition-colors duration-200 ${
                            item.code === locale ? 'bg-black text-white' : 'text-black hover:bg-gray-100'
                        }`}
                    >
                        {item.short}
                    </button>
                ))}
            </div>
        );
    }

    return (
        <div ref={containerRef} className="relative">
            <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-label={t('language.label')}
                className="flex items-center gap-1.5 rounded-full border-[1.5px] border-[#111111] px-4 py-2 text-[14px] font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white"
            >
                <Globe className="h-4 w-4" />
                <span>{localeConfig.short}</span>
                <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div
                    role="listbox"
                    className="absolute right-0 top-full z-50 mt-2 w-[180px] rounded-2xl border-[1.5px] border-[#111111] bg-white p-1.5 shadow-lg"
                >
                    {LOCALES.map((item) => (
                        <button
                            key={item.code}
                            type="button"
                            role="option"
                            lang={item.htmlLang}
                            aria-selected={item.code === locale}
                            onClick={() => {
                                switchLocale(item.code);
                                setIsOpen(false);
                            }}
                            className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-[14px] transition-colors duration-200 ${
                                item.code === locale
                                    ? 'bg-black text-white'
                                    : 'text-black hover:bg-[#111111] hover:text-white'
                            }`}
                        >
                            <span>{item.label}</span>
                            {item.code === locale && <Check className="h-4 w-4" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
