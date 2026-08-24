import React from 'react';
import { useI18n } from '../../i18n';
import {CalendarX, History, PhoneOff} from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import {DEPOSIT_FULL, DEPOSIT_SHORT, buildRefundMoments} from './bookingData.js';

const ICONS = {
    'calendar-x': CalendarX,
    'phone-off': PhoneOff,
    'history': History
};

const Strong = ({children}) => <strong className="font-semibold text-[#0b0e18]">{children}</strong>;

const DepositPolicySection = () => {
    const { t, tm } = useI18n();
    const REFUND_MOMENTS = buildRefundMoments(tm);

    return (
    <section className="border-t border-[#eef2f8] bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-[110px]">
        <div className="mx-auto max-w-[1180px]">
            <SectionHeading
                eyebrow={t('booking.deposit.badge')}
                title={t('booking.deposit.title', {depositShort: DEPOSIT_SHORT})}
                className="max-w-[900px]"
            />

            <div className="mt-6 flex max-w-[900px] flex-col gap-5 text-[15px] leading-[1.75] text-[#3a4256] lg:text-[16.5px]">
                <p>
                    {t('booking.deposit.paragraph1', {deposit: DEPOSIT_FULL})}
                </p>
                <p>
                    {t('booking.deposit.paragraph2Prefix')}
                    <Strong>{t('booking.deposit.notAFee', {deposit: DEPOSIT_FULL})}</Strong> {t('booking.deposit.description')}
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {REFUND_MOMENTS.map((moment) => {
                    const Icon = ICONS[moment.icon];
                    return (
                        <div key={moment.title} className="rounded-[20px] border border-[#e6ebf3] bg-[#f9fafd] p-7">
                            <div className="flex items-center gap-2.5">
                                <span className="text-[#2e7bdf]">{Icon && <Icon className="h-5 w-5" />}</span>
                                <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0b0e18]">
                                    {moment.title}
                                </span>
                            </div>
                            <p className="mt-4 text-[14px] leading-[1.7] text-[#515d75]">{moment.body}</p>
                        </div>
                    );
                })}
            </div>

            <p className="mt-8 max-w-[900px] text-[15px] leading-[1.75] text-[#3a4256] lg:text-[16.5px]">
                {t('booking.deposit.lastPrefix', {deposit: DEPOSIT_FULL})}<Strong>{t('booking.deposit.oneWord')}</Strong>{t('booking.deposit.lastMiddle')}
                <Strong>{t('booking.deposit.trulyFree')}</Strong>{t('booking.deposit.trulyFreeSuffix')}
            </p>
        </div>
    </section>
    );
};

export default DepositPolicySection;
