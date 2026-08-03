import React from 'react';
import {CalendarX, History, PhoneOff} from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import {DEPOSIT_FULL, DEPOSIT_SHORT, REFUND_MOMENTS} from './bookingData.js';

const ICONS = {
    'calendar-x': CalendarX,
    'phone-off': PhoneOff,
    'history': History
};

const Strong = ({children}) => <strong className="font-semibold text-[#0b0e18]">{children}</strong>;

const DepositPolicySection = () => (
    <section className="border-t border-[#eef2f8] bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-[110px]">
        <div className="mx-auto max-w-[1180px]">
            <SectionHeading
                eyebrow="Phần 04 · Vì sao có cọc"
                title={`Miễn phí thật — vì cọc ${DEPOSIT_SHORT} hoàn được cả sau khi buổi gọi đã xong`}
                className="max-w-[900px]"
            />

            <div className="mt-6 flex max-w-[900px] flex-col gap-5 text-[15px] leading-[1.75] text-[#3a4256] lg:text-[16.5px]">
                <p>
                    Nghe hơi ngược: buổi tư vấn miễn phí, sao lại có cọc? Lý do rất thẳng. Lịch của Sơn mỗi tuần chỉ có
                    vài buổi 1-1 như thế này. Khi thứ gì đó dán nhãn "miễn phí" và "đăng ký một cú click", một nửa người
                    đăng ký sẽ quên, sẽ bận, sẽ không bắt máy — và khung giờ đó chết, trong khi một anh/chị thật sự cần
                    thì không đặt được. Khoản cọc {DEPOSIT_FULL} lọc ra đúng những người nghiêm túc, để buổi nào diễn ra
                    cũng là buổi đáng.
                </p>
                <p>
                    Nhưng đây là chỗ nhiều anh/chị hiểu nhầm, nên nói cho thật rõ:{' '}
                    <Strong>{DEPOSIT_FULL} không phải là tiền mua buổi tư vấn</Strong> — buổi tư vấn vốn đã miễn phí. Nó
                    chỉ là tiền đặt chỗ giữ đúng khung giờ. Việc anh/chị có tham gia cuộc gọi hay không, có ngồi hết 30
                    phút hay không, đều KHÔNG "tiêu" mất khoản cọc. Nó vẫn nguyên là của anh/chị — và anh/chị có toàn
                    quyền đòi lại, ở bất kỳ mốc nào dưới đây:
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
                Nextgency chỉ giữ lại {DEPOSIT_FULL} trong đúng <Strong>một</Strong> trường hợp: hai bên đi tiếp và ký
                hợp đồng triển khai — mà khi đó khoản này được trừ thẳng vào giá trị hợp đồng, nên anh/chị vẫn không mất
                thêm một đồng nào. Mọi trường hợp còn lại, tiền là của anh/chị. Đó là lý do đây là{' '}
                <Strong>miễn phí thật</Strong>, chứ không phải miễn phí kèm điều kiện giấu ở dòng chữ nhỏ.
            </p>
        </div>
    </section>
);

export default DepositPolicySection;
