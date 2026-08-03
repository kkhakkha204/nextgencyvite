import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import {CALL_AGENDA} from './bookingData.js';

const CallAgendaSection = () => (
    <section className="bg-[#f6f8fc] px-5 py-16 sm:px-8 lg:px-14 lg:py-[110px]">
        <div className="mx-auto max-w-[900px]">
            <SectionHeading
                eyebrow="Phần 03 · 30 phút làm được gì"
                title="Một buổi 30 phút đủ để đổi hướng cả năm tới"
            />

            <p className="mt-6 text-[15px] leading-[1.75] text-[#3a4256] lg:text-[16.5px]">
                30 phút không dài, nên buổi Growth Call này không lan man. Sơn không kể lý thuyết tăng trưởng — mà soi
                thẳng vào bài toán của riêng anh/chị và làm đúng ba việc:
            </p>

            <div className="mt-7 flex flex-col">
                {CALL_AGENDA.map((item) => (
                    <div key={item.n} className="grid grid-cols-[42px_1fr] gap-4 border-t border-[#e2e8f1] py-6 sm:grid-cols-[52px_1fr] sm:gap-[18px]">
                        <span className="bg-gradient-to-br from-[#2e7bdf] to-[#8a6cf0] bg-clip-text font-archivo text-[26px] font-bold text-transparent">
                            {item.n}
                        </span>
                        <div>
                            <div className="font-archivo text-[17px] font-extrabold tracking-[-0.01em] text-[#0b0e18]">
                                {item.title}
                            </div>
                            <p className="mt-2 text-[14.5px] leading-[1.7] text-[#515d75]">{item.body}</p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="border-t border-[#e2e8f1] pt-6 text-[15px] leading-[1.75] text-[#3a4256] lg:text-[16.5px]">
                Anh/chị rời cuộc gọi với một thứ rõ ràng trong đầu: mình đang nghẽn ở đâu, và bước kế tiếp là gì. Dù sau
                đó có làm cùng Nextgency hay không, cái nhìn đó là của anh/chị giữ. Đó là lý do Sơn dám để khoản cọc{' '}
                <strong className="font-semibold text-[#0b0e18]">hoàn lại bất kỳ lúc nào</strong> — nếu 30 phút không cho
                anh/chị được điều đó, anh/chị không nợ Nextgency một đồng nào.
            </p>
        </div>
    </section>
);

export default CallAgendaSection;
