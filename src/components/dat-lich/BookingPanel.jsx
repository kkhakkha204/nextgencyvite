import React, {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {ArrowLeft, Check, TriangleAlert} from 'lucide-react';
import WeekCalendar from './WeekCalendar.jsx';
import TimeSlotPicker from './TimeSlotPicker.jsx';
import DepositTransfer from './DepositTransfer.jsx';
import {CONSULTANT, DEPOSIT_FULL, HOTLINE} from './bookingData.js';
import {submitGrowthCall} from '../../utils/submitGrowthCall.js';
import {resolveContextService} from '../../data/growthCallContexts.js';

const StepLabel = ({index, children}) => (
    <div className="mt-5 flex items-center gap-2.5 first:mt-6">
        <span className="flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-[#e1f1fc] text-[12px] font-semibold text-[#2563c7]">
            {index}
        </span>
        <span className="text-[14.5px] font-bold text-[#0b0e18]">{children}</span>
    </div>
);

const inputClass =
    'w-full rounded-[10px] border bg-[#f9fafd] px-3.5 py-3 text-[14px] text-[#0b0e18] outline-none transition-all duration-200 placeholder:text-[#9aa5b8] focus:border-[#2e7bdf] focus:ring-[3px] focus:ring-[#2e7bdf]/20';

const BookingPanel = () => {
    const [searchParams] = useSearchParams();
    const ctx = searchParams.get('ctx') || '';
    const contextService = resolveContextService(ctx);

    const [view, setView] = useState('form');
    const [weekOffset, setWeekOffset] = useState(0);
    const [selectedKey, setSelectedKey] = useState(null);
    const [selectedLabel, setSelectedLabel] = useState('');
    const [slot, setSlot] = useState(null);
    const [form, setForm] = useState({name: '', phone: '', web: '', note: ''});
    const [showError, setShowError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [sendFailed, setSendFailed] = useState(false);

    const updateField = (field) => (event) => {
        setForm((prev) => ({...prev, [field]: event.target.value}));
        if (field === 'phone') setShowError(false);
    };

    const handleSelectDate = (key, label) => {
        setSelectedKey(key);
        setSelectedLabel(label);
        setSlot(null);
    };

    const handleSubmit = async () => {
        if (isSubmitting) return;
        if (!selectedKey || !slot || !form.phone.trim()) {
            setShowError(true);
            return;
        }

        setShowError(false);
        setIsSubmitting(true);

        // Gửi lead đi trước, không chờ khách chuyển cọc.
        try {
            const response = await submitGrowthCall({form, dateLabel: selectedLabel, slot, ctx});
            setSendFailed(!response.ok);
        } catch (error) {
            console.error('Không gửi được thông tin đặt lịch:', error);
            setSendFailed(true);
        } finally {
            setIsSubmitting(false);
            // Gửi hỏng vẫn cho khách sang bước cọc - đã có cảnh báo kèm hotline ở màn hình sau.
            setView('pay');
        }
    };

    const errorMessage = !selectedKey || !slot
        ? 'Anh/chị chọn ngày và khung giờ trước nhé.'
        : 'Anh/chị để lại số điện thoại để Sơn gọi xác nhận nhé.';

    const pickedLabel = `${selectedLabel}${slot ? ` · ${slot}` : ''}`;

    return (
        <div className="rounded-[24px] bg-white p-6 shadow-[0_24px_64px_rgba(6,9,18,0.5)] sm:p-8 lg:sticky lg:top-6">
            {view === 'form' ? (
                <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a8499]">
                        Phiên 1-1 · 30 phút
                    </div>
                    <h2 className="mt-2.5 font-archivo text-[22px] font-extrabold leading-[1.25] tracking-[-0.015em] text-[#0b0e18]">
                        Đặt buổi Growth Call với {CONSULTANT.name}
                    </h2>

                    {ctx && (
                        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#e1f1fc] px-3.5 py-1.5 text-[12px] font-semibold text-[#2563c7]">
                            <span className="h-1.5 w-1.5 rounded-full bg-current" />
                            Dịch vụ quan tâm: {contextService}
                        </div>
                    )}

                    <StepLabel index={1}>Chọn ngày anh/chị rảnh</StepLabel>
                    <WeekCalendar
                        weekOffset={weekOffset}
                        onPrevWeek={() => setWeekOffset((offset) => Math.max(0, offset - 1))}
                        onNextWeek={() => setWeekOffset((offset) => offset + 1)}
                        selectedKey={selectedKey}
                        onSelectDate={handleSelectDate}
                    />

                    <StepLabel index={2}>Chọn khung giờ 30 phút</StepLabel>
                    <TimeSlotPicker hasDate={!!selectedKey} selectedSlot={slot} onSelectSlot={setSlot} />

                    <StepLabel index={3}>Thông tin để Sơn gọi đúng người</StepLabel>
                    <div className="mt-3.5 flex flex-col gap-2.5">
                        <input
                            type="text"
                            value={form.name}
                            onChange={updateField('name')}
                            placeholder="Họ tên"
                            className={`${inputClass} border-[#dde4ef]`}
                        />
                        <input
                            type="tel"
                            value={form.phone}
                            onChange={updateField('phone')}
                            placeholder="Số điện thoại *"
                            className={`${inputClass} ${
                                showError && !form.phone.trim() ? 'border-[#d64545]' : 'border-[#dde4ef]'
                            }`}
                        />
                        <input
                            type="text"
                            value={form.web}
                            onChange={updateField('web')}
                            placeholder="Website (nếu có)"
                            className={`${inputClass} border-[#dde4ef]`}
                        />
                        <textarea
                            value={form.note}
                            onChange={updateField('note')}
                            placeholder="Anh/chị đang muốn đẩy tăng trưởng ở đâu?"
                            rows={3}
                            className={`${inputClass} resize-y border-[#dde4ef]`}
                        />
                    </div>

                    {showError && <p className="mt-2.5 text-[13px] font-medium text-[#d64545]">{errorMessage}</p>}

                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="mt-[18px] flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2e7bdf] to-[#41c8e6] px-5 py-[15px] text-[15px] font-semibold text-white shadow-[0_10px_26px_rgba(46,123,223,0.4)] transition-all duration-200 hover:brightness-105 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:brightness-100"
                    >
                        {isSubmitting ? (
                            <>
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                Đang gửi thông tin...
                            </>
                        ) : (
                            `Giữ chỗ buổi Growth Call — cọc ${DEPOSIT_FULL}`
                        )}
                    </button>
                    <p className="mt-3 text-center text-[12.5px] text-[#7a8499]">
                        Hoàn 100% bất kỳ lúc nào, không cần lý do — kể cả trong cuộc gọi.
                    </p>
                </div>
            ) : (
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#e7f5ec] px-3.5 py-[7px] text-[12px] font-semibold text-[#2f7d4f]">
                        <Check className="h-3.5 w-3.5" />
                        Đã ghi nhận khung giờ: {pickedLabel}
                    </div>

                    {sendFailed && (
                        <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-[#f0d9a8] bg-[#fdf6e6] px-4 py-3 text-[13px] leading-[1.6] text-[#8a6a1e]">
                            <TriangleAlert className="mt-0.5 h-4 w-4 flex-none" />
                            <span>
                                Hệ thống chưa gửi được thông tin của anh/chị. Khung giờ vẫn giữ nguyên — anh/chị cứ chuyển
                                cọc theo nội dung bên dưới, hoặc gọi thẳng{' '}
                                <a href={`tel:${HOTLINE.tel}`} className="font-bold text-[#8a6a1e] underline">
                                    {HOTLINE.display}
                                </a>{' '}
                                để Sơn xác nhận ngay.
                            </span>
                        </div>
                    )}
                    <h2 className="mt-4 font-archivo text-[22px] font-extrabold leading-[1.25] tracking-[-0.015em] text-[#0b0e18]">
                        Buổi Growth Call 30 phút
                    </h2>
                    <p className="mt-3 text-[14px] leading-[1.65] text-[#515d75]">
                        Còn một bước để <strong className="font-bold text-[#0b0e18]">khoá đúng khung giờ này</strong>: cọc
                        giữ chỗ {DEPOSIT_FULL}. Chuyển đúng nội dung bên dưới — hệ thống báo thẳng Sơn, và Sơn sẽ gọi xác
                        nhận lịch trong hôm nay.
                    </p>

                    <div className="mt-5">
                        <DepositTransfer phone={form.phone} />
                    </div>

                    <p className="mt-[18px] rounded-xl bg-[#f2f6fd] px-4 py-3.5 text-[13px] leading-[1.65] text-[#515d75]">
                        <strong className="font-bold text-[#0b0e18]">Hoàn bất kỳ lúc nào, không cần lý do.</strong> Trước
                        buổi gọi, giữa buổi gọi, hay kể cả sau khi gọi xong mà anh/chị thấy chưa xứng đáng — nhắn một câu,
                        Nextgency hoàn đủ {DEPOSIT_FULL}. Ký hợp đồng thì khoản này trừ thẳng vào hợp đồng.
                    </p>

                    <button
                        type="button"
                        onClick={() => {
                            setSendFailed(false);
                            setView('form');
                        }}
                        className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#2563c7] transition-colors duration-200 hover:text-[#1b4f9c]"
                    >
                        <ArrowLeft className="h-[15px] w-[15px] " />
                        Quay lại đặt lịch
                    </button>
                </div>
            )}

            <div className="mt-5 flex justify-center border-t border-[#eef2f8] pt-4">
                <a
                    href={`tel:${HOTLINE.tel}`}
                    className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#7a8499] no-underline hover:no-underline"
                >
                    Hoặc gọi thẳng <span className="text-[#2563c7]">{HOTLINE.display}</span>
                </a>
            </div>
        </div>
    );
};

export default BookingPanel;
