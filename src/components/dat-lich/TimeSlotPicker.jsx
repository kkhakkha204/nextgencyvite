import React from 'react';
import {SLOT_TIMES} from './bookingData.js';

const TimeSlotPicker = ({hasDate, selectedSlot, onSelectSlot}) => {
    if (!hasDate) {
        return <p className="mt-3 text-[13.5px] text-[#7a8499]">Chọn ngày trước để hiện khung giờ.</p>;
    }

    return (
        <div className="mt-3.5 grid grid-cols-4 gap-2">
            {SLOT_TIMES.map((time) => {
                const isSelected = time === selectedSlot;
                return (
                    <button
                        key={time}
                        type="button"
                        onClick={() => onSelectSlot(time)}
                        aria-pressed={isSelected}
                        className={`rounded-[10px] border px-1 py-2.5 text-[13px] transition-all duration-200 ${
                            isSelected
                                ? 'border-[#2e7bdf] bg-[#e1f1fc] font-bold text-[#2563c7]'
                                : 'border-[#dde4ef] bg-white font-semibold text-[#3a4256] hover:border-[#2e7bdf]/50 hover:bg-[#f9fafd]'
                        }`}
                    >
                        {time}
                    </button>
                );
            })}
        </div>
    );
};

export default TimeSlotPicker;
