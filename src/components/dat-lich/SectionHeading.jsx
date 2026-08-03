import React from 'react';

/** Cụm eyebrow + tiêu đề dùng chung cho các section nội dung của trang đặt lịch. */
const SectionHeading = ({eyebrow, title, className = ''}) => (
    <div className={className}>
        <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7a8499]">{eyebrow}</div>
        <h2 className="mt-4 font-archivo text-[26px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#0b0e18] md:text-[32px] lg:text-[40px]">
            {title}
        </h2>
    </div>
);

export default SectionHeading;
