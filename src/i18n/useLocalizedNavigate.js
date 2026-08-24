// src/i18n/useLocalizedNavigate.js
import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {useI18n} from './context.js';

/**
 * useNavigate nhưng tự gắn prefix ngôn ngữ khi truyền đường dẫn dạng chuỗi.
 * navigate(-1) và các dạng khác giữ nguyên hành vi gốc.
 */
export const useLocalizedNavigate = () => {
    const navigate = useNavigate();
    const {localePath} = useI18n();

    return useCallback(
        (to, options) => {
            if (typeof to === 'string') return navigate(localePath(to), options);
            return navigate(to, options);
        },
        [navigate, localePath]
    );
};
