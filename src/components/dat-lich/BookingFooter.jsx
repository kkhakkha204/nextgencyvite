import React from 'react';
import {Link} from 'react-router-dom';
import {HOTLINE} from './bookingData.js';

const BookingFooter = () => (
    <footer className="bg-[#060912] px-5 py-7 sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3.5">
            <Link to="/" className="block">
                <img
                    src="/assets/images/footer/footerlogo.png"
                    alt="Nextgency"
                    className="h-[18px] w-auto object-contain opacity-90"
                />
            </Link>
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/50">
                Nextgency · Hotline {HOTLINE.display}
            </span>
        </div>
    </footer>
);

export default BookingFooter;
