import React from 'react';
import { useI18n } from '../i18n';

export default function PrivacyPolicyPage() {
    const { t, tm } = useI18n();
    const sections = tm('privacy.sections');

    return (
        <div className="bg-white min-h-screen">
            <section className="py-16 lg:py-24">
                <div className="md:max-w-[700px] lg:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Title */}
                    <div className="text-center mb-12">
                        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-black mb-4">
                            {t('privacy.title')}
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="space-y-10">
                        {sections.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                                <h2 className="text-[20px] lg:text-[24px] font-bold text-black mb-4">
                                    {section.title}
                                </h2>

                                <div className="space-y-4 text-[15px] lg:text-[16px] text-gray-800 leading-relaxed">
                                    {section.items.map((item, itemIndex) => (
                                        <p key={itemIndex}>
                                            <strong>{itemIndex + 1}.</strong> <span dangerouslySetInnerHTML={{ __html: item }} />
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}