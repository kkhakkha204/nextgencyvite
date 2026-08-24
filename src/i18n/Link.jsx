// src/i18n/Link.jsx
import React, {forwardRef} from 'react';
import {Link as RouterLink, NavLink as RouterNavLink} from 'react-router-dom';
import {useI18n} from './context.js';

// Dùng thay cho Link của react-router-dom: `to` được tự gắn prefix ngôn ngữ,
// nên không component nào phải tự nhớ mình đang ở /en hay /cn.
// Link ngoài (https://, mailto:, tel:) và anchor (#...) giữ nguyên.
export const Link = forwardRef(({to, ...props}, ref) => {
    const {localePath} = useI18n();
    return <RouterLink ref={ref} to={typeof to === 'string' ? localePath(to) : to} {...props} />;
});
Link.displayName = 'LocalizedLink';

export const NavLink = forwardRef(({to, ...props}, ref) => {
    const {localePath} = useI18n();
    return <RouterNavLink ref={ref} to={typeof to === 'string' ? localePath(to) : to} {...props} />;
});
NavLink.displayName = 'LocalizedNavLink';
