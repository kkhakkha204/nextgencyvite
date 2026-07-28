// src/components/SEO/schemas.js
// Structured data (JSON-LD). Giữ đồng bộ với src/scripts/generate-static.js -
// script prerender sinh lại các schema tương đương cho bản HTML tĩnh.

import {DEFAULT_OG_IMAGE, SITE, toAbsoluteUrl} from '../../pages/seo-configs.js';

const ORGANIZATION_ID = `${SITE.baseUrl}/#organization`;

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE.name,
    url: SITE.baseUrl,
    logo: toAbsoluteUrl('/assets/images/header/navbarlogoblack.png'),
    image: toAbsoluteUrl(DEFAULT_OG_IMAGE.url),
    description: 'Agency digital marketing: thiết kế website, quảng cáo online, AI và chuyển đổi số.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hồ Chí Minh',
        addressCountry: 'VN'
    }
};

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.baseUrl}/#website`,
    url: SITE.baseUrl,
    name: SITE.siteName,
    inLanguage: SITE.lang,
    publisher: {'@id': ORGANIZATION_ID}
};

export const generateServiceSchema = ({
                                          serviceName,
                                          serviceType,
                                          description,
                                          areaServed = 'Việt Nam',
                                          url,
                                          image
                                      }) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    serviceType: serviceType || serviceName,
    description,
    url: toAbsoluteUrl(url),
    image: toAbsoluteUrl(image || DEFAULT_OG_IMAGE.url),
    areaServed: {'@type': 'Country', name: areaServed},
    provider: {'@id': ORGANIZATION_ID}
});

export const generateBreadcrumbSchema = (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: toAbsoluteUrl(item.url)
    }))
});

export const generateArticleSchema = ({title, description, image, url, publishedTime, modifiedTime}) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: toAbsoluteUrl(image || DEFAULT_OG_IMAGE.url),
    mainEntityOfPage: {'@type': 'WebPage', '@id': toAbsoluteUrl(url)},
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {'@id': ORGANIZATION_ID},
    publisher: {'@id': ORGANIZATION_ID}
});
