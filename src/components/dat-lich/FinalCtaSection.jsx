import React from 'react';
import { useI18n } from '../../i18n';
import {ArrowUp} from 'lucide-react';
import DepositTransfer from './DepositTransfer.jsx';
import {CONSULTANT, DEPOSIT_FULL, HOTLINE} from './bookingData.js';

const FinalCtaSection = () => {
    const { t } = useI18n();
    const scrollToBooking = (event) => {
        event.preventDefault();
        document.getElementById('dat-lich')?.scrollIntoView({behavior: 'smooth', block: 'start'});
    };

    return (
        <section className="bg-[#f6f8fc] px-5 pb-[72px] pt-14 sm:px-8 lg:px-14 lg:pb-[110px] lg:pt-24">
            <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[28px] bg-[#0a1326] p-8 sm:p-10 lg:p-16">
                <div className="absolute inset-0 bg-[linear-gradient(110deg,#0a1326_0%,#1b4f9c_46%,#2e7bdf_72%,#41c8e6_100%)] opacity-95" />
                <div className="absolute -top-[40%] -right-[6%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(138,108,240,0.45),transparent_62%)]" />

                <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_minmax(300px,0.9fr)] lg:gap-14">
                    <div>
                        <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#9ee6f5]">
                            {t('booking.finalCta.firstStep')}
                        </div>
                        <h2 className="mt-3.5 font-archivo text-[26px] font-bold leading-[1.08] tracking-[-0.025em] text-white md:text-[34px] lg:text-[42px]">
                            {t('booking.finalCta.heading', {name: CONSULTANT.name})}
                        </h2>
                        <p className="mt-4.5 text-[14.5px] leading-[1.7] text-white/[.82] lg:text-[16.5px]">
                            {t('booking.finalCta.notePrefix')}
                            <strong className="font-semibold text-white">{t('booking.finalCta.depositNotFee', {deposit: DEPOSIT_FULL})}</strong>{t('booking.finalCta.refundSuffix')}
                        </p>
                        <div className="mt-7 flex flex-wrap items-center gap-3.5">
                            <a
                                href="#dat-lich"
                                onClick={scrollToBooking}
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0b0e18] no-underline transition-all duration-200 hover:brightness-95 hover:no-underline"
                            >
                                {t('booking.finalCta.pickSlot')}
                                <ArrowUp className="h-4 w-4" />
                            </a>
                            <a
                                href={`tel:${HOTLINE.tel}`}
                                className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/85 no-underline hover:text-white hover:no-underline"
                            >
                                {t('booking.finalCta.orCall')}{HOTLINE.display}
                            </a>
                        </div>
                    </div>

                    <div className="rounded-[20px] border border-white/[.18] bg-white/[.08] p-6 backdrop-blur-md">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9ee6f5]">
                            {t('booking.finalCta.depositNow')}
                        </div>
                        <div className="mt-4">
                            <DepositTransfer variant="dark" qrSize="w-[110px] h-[110px]" />
                        </div>
                        <p className="mt-3.5 text-[12px] leading-[1.6] text-white/70">
                            {t('booking.finalCta.refundNote')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCtaSection;
