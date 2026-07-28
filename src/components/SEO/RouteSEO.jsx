// src/components/SEO/RouteSEO.jsx
import {useLocation} from 'react-router-dom';
import SEOManager from './SEOManager.jsx';
import {getSeoByPath, seoConfigs} from '../../pages/seo-configs.js';

/**
 * Áp cấu hình SEO theo pathname cho mọi route, kể cả những trang chưa tự gắn SEOManager.
 * Đặt ngay trước <Routes> - trang nào tự render SEOManager sẽ ghi đè lên (effect chạy sau).
 * Route động (/news/:slug, /projects/:slug) tự xử lý meta trong page component.
 */
const RouteSEO = () => {
    const {pathname} = useLocation();
    const seo = getSeoByPath(pathname);

    if (!seo) {
        // Route chưa khai báo (trang chi tiết động, 404...) - chỉ giữ meta mặc định của site
        return <SEOManager seo={seoConfigs.home} ogUrl={pathname} />;
    }

    return <SEOManager seo={seo} />;
};

export default RouteSEO;
