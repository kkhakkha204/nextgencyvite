import React from 'react';
import { useI18n } from '../../i18n';
import SectionHeading from './SectionHeading.jsx';

const Strong = ({children}) => <strong className="font-semibold text-[#0b0e18]">{children}</strong>;

const ProblemSection = () => {
    const { t } = useI18n();

    return (
    <section className="bg-[#f6f8fc] px-5 py-16 sm:px-8 lg:px-14 lg:py-[110px]">
        <div className="mx-auto max-w-[900px]">
            <SectionHeading
                eyebrow={t('booking.problem.badge')}
                title={t('booking.problem.title')}
            />

            <div className="mt-7 flex flex-col gap-5 text-[15px] leading-[1.75] text-[#3a4256] lg:text-[16.5px]">
                <p>
                    {t('booking.problem.intro1')}
                    <Strong>{t('booking.problem.highlight1')}</Strong>{t('booking.problem.paragraph1')}
                </p>
                <p>
                    {t('booking.problem.intro2')}
                    <Strong>{t('booking.problem.highlight2')}</Strong>{t('booking.problem.paragraph2')}
                </p>
                <p>
                    {t('booking.problem.paragraph3')}
                </p>
            </div>

            <div className="mt-8 border-l-[3px] border-[#2e7bdf] py-1.5 pl-6">
                <p className="font-archivo text-[18px] font-medium leading-[1.45] text-[#0b0e18] lg:text-[23px]">
                    {t('booking.problem.paragraph4')}
                </p>
            </div>
        </div>
    </section>
    );
};

export default ProblemSection;
