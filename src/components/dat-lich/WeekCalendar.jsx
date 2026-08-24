import React, {useMemo} from 'react';
import { useI18n } from '../../i18n';
import {ChevronLeft, ChevronRight} from 'lucide-react';

const DOW_LABELS = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

const pad2 = (value) => String(value).padStart(2, '0');
const dayMonth = (date) => `${pad2(date.getDate())}/${pad2(date.getMonth() + 1)}`;
const dateKey = (date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

/**
 * Lịch một tuần bắt đầu từ thứ Hai. Tuần gốc (weekOffset = 0) là tuần chứa ngày
 * đặt được sớm nhất, tức từ ngày mai trở đi - hôm nay và quá khứ luôn bị khoá.
 */
const buildWeek = (weekOffset) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const probe = new Date(today);
    probe.setDate(probe.getDate() + 1);

    const monday = new Date(probe);
    monday.setDate(probe.getDate() - ((probe.getDay() + 6) % 7) + weekOffset * 7);

    const days = Array.from({length: 7}, (unused, index) => {
        const date = new Date(monday);
        date.setDate(monday.getDate() + index);
        return {
            key: dateKey(date),
            dayNumber: date.getDate(),
            dow: DOW_LABELS[date.getDay()],
            label: `${DOW_LABELS[date.getDay()]} ${dayMonth(date)}`,
            disabled: date <= today
        };
    });

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    return {days, weekLabel: `${dayMonth(monday)} – ${dayMonth(sunday)}`};
};

const WeekCalendar = ({weekOffset, onPrevWeek, onNextWeek, selectedKey, onSelectDate}) => {
    const { t } = useI18n();
    const {days, weekLabel} = useMemo(() => buildWeek(weekOffset), [weekOffset]);
    const canGoBack = weekOffset > 0;

    return (
        <div className="mt-3.5 rounded-[14px] border border-[#e6ebf3] bg-white p-3.5 pb-3">
            <div className="flex items-center justify-between">
                <button
                    type="button"
                    onClick={onPrevWeek}
                    disabled={!canGoBack}
                    aria-label={t('booking.panel.prevWeek')}
                    className={`flex h-[30px] w-[30px] items-center justify-center rounded-[9px] border border-[#dde4ef] bg-[#f9fafd] transition-colors duration-200 ${
                        canGoBack ? 'cursor-pointer text-[#3a4256] hover:bg-[#eef2f8]' : 'cursor-default text-[#c3ccdb]'
                    }`}
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>

                <span className="text-[14px] font-extrabold tracking-[-0.01em] text-[#0b0e18]">{weekLabel}</span>

                <button
                    type="button"
                    onClick={onNextWeek}
                    aria-label={t('booking.panel.nextWeek')}
                    className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[9px] border border-[#dde4ef] bg-[#f9fafd] text-[#3a4256] transition-colors duration-200 hover:bg-[#eef2f8]"
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>

            <div className="mt-3 grid grid-cols-7 gap-1.5">
                {days.map((day) => {
                    const isSelected = day.key === selectedKey;
                    return (
                        <button
                            key={day.key}
                            type="button"
                            disabled={day.disabled}
                            onClick={() => onSelectDate(day.key, day.label)}
                            aria-pressed={isSelected}
                            className={`rounded-[11px] border px-0.5 py-2 text-center transition-all duration-200 ${
                                isSelected
                                    ? 'cursor-pointer border-[#2e7bdf] bg-gradient-to-r from-[#2e7bdf] to-[#41c8e6] text-white'
                                    : day.disabled
                                        ? 'cursor-default border-transparent bg-transparent text-[#c3ccdb]'
                                        : 'cursor-pointer border-[#e6ebf3] bg-[#f9fafd] text-[#3a4256] hover:border-[#2e7bdf]/50 hover:bg-[#e1f1fc]'
                            }`}
                        >
                            <span className="block text-[10px] font-semibold tracking-[0.06em]">{day.dow}</span>
                            <span className="mt-0.5 block text-[15px] font-extrabold">{day.dayNumber}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default WeekCalendar;
