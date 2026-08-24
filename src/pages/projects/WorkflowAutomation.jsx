import { useState, useMemo, useCallback } from 'react';
import { useI18n } from '../../i18n';
import { Search } from 'lucide-react';

// Dữ liệu template cố định
const templatesData = [
    {
        id: 1,
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        categoryKey: 'ai',
        nodes: ['ChatGPT', 'Google Sheets', 'Slack']
    },
    {
        id: 2,
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        categoryKey: 'sales',
        nodes: ['HubSpot', 'Airtable', 'Email']
    },
    {
        id: 3,
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        categoryKey: 'itOps',
        nodes: ['Webhook', 'Slack', 'PagerDuty']
    },
    {
        id: 4,
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        categoryKey: 'marketing',
        nodes: ['Twitter', 'Facebook', 'LinkedIn', 'Buffer']
    },
    {
        id: 5,
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        categoryKey: 'docs',
        nodes: ['Gmail', 'Google Drive', 'QuickBooks']
    },
    {
        id: 6,
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        categoryKey: 'support',
        nodes: ['Zendesk', 'Slack', 'Jira']
    },
    {
        id: 7,
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        categoryKey: 'ai',
        nodes: ['DALL-E', 'Midjourney', 'S3', 'Discord']
    },
    {
        id: 8,
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        categoryKey: 'sales',
        nodes: ['Salesforce', 'HubSpot', 'MySQL']
    },
    {
        id: 9,
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        categoryKey: 'itOps',
        nodes: ['PostgreSQL', 'AWS S3', 'Email']
    },
    {
        id: 10,
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        categoryKey: 'marketing',
        nodes: ['Mailchimp', 'Google Analytics', 'Sheets']
    },
    {
        id: 11,
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        categoryKey: 'docs',
        nodes: ['Google Docs', 'PDF', 'Email', 'Drive']
    },
    {
        id: 12,
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        categoryKey: 'other',
        nodes: ['HTTP Request', 'Function', 'IF']
    },
    {
        id: 13,
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        categoryKey: 'support',
        nodes: ['ChatGPT', 'Webhook', 'Database']
    },
    {
        id: 14,
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        categoryKey: 'ai',
        nodes: ['OpenAI', 'Twitter API', 'MongoDB']
    },
    {
        id: 15,
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        categoryKey: 'sales',
        nodes: ['Pipedrive', 'Slack', 'Google Sheets']
    }
];

const CATEGORY_KEYS = ['all', 'ai', 'sales', 'itOps', 'marketing', 'docs', 'other', 'support'];

export default function N8nTemplates() {
    const { t, tm } = useI18n();
    // Tiêu đề template lấy theo thứ tự trong từ điển, id bắt đầu từ 1
    const templateTitles = tm('projects.workflow.templates');
    const templateTitle = useCallback(
        (template) => templateTitles[template.id - 1] || '',
        [templateTitles]
    );
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Lọc templates dựa trên tìm kiếm và category
    const filteredTemplates = useMemo(() => {
        return templatesData.filter(template => {
            const matchesSearch = searchQuery === '' ||
                templateTitle(template).toLowerCase().includes(searchQuery.toLowerCase()) ||
                template.nodes.some(node => node.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesCategory = selectedCategory === 'all' || template.categoryKey === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory, templateTitle]);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Nền đen với Search & Filter */}
            <div className="bg-black">
                <div className="max-w-[1440px] mx-auto px-6 sm:px-6 lg:px-8 py-16 md:py-20">
                    {/* Title */}
                    <h1 className="text-[32px] md:text-[40px] lg:text-[60px] font-archivo font-bold text-white uppercase leading-none tracking-tight mb-4 text-center">
                        n8n Templates
                    </h1>
                    <p className="text-lg text-gray-400 font-light mb-6 md:mb-16 text-center">
                        {t('projects.workflow.title')}
                    </p>

                    {/* Search Bar */}
                    <div>
                        <div className="relative max-w-2xl mx-auto">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder={t('projects.workflow.searchPlaceholder')}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-5 py-4 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#c08dfe] transition-colors text-black placeholder-gray-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Templates Section - Chỉ hiển thị khi KHÔNG có search query */}
            {searchQuery === '' && (
                <div className="bg-gray-100 py-16 md:py-20">
                    <div className="max-w-[1440px] mx-auto px-6 sm:px-6 lg:px-8">

                        {/* Featured Banner - Max Height 300px */}
                        <div className="mb-6 md:mb-12">
                            <div className="relative w-full h-[192px] md:h-[300px] overflow-hidden rounded-md">
                                <img
                                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&h=1000&fit=crop"
                                    alt="Featured Banner"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            </div>
                        </div>

                        {/* 3 Featured Templates */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {templatesData.slice(0, 3).map((template) => (
                                <div
                                    key={template.id}
                                    className="group bg-white border border-gray-200 hover:border-[#2B144D] transition-all duration-300 cursor-pointer overflow-hidden rounded-md"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative h-48 overflow-hidden bg-gray-50 ">
                                        <img
                                            src={template.thumbnail}
                                            alt={templateTitle(template)}
                                            className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <span className="inline-block px-3 py-1 bg-[#c08dfe] text-black text-xs font-medium rounded-full">
                                                Featured
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Category Badge */}
                                        <div className="mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-light text-[#c08dfe] border border-[#c08dfe] rounded-full">
                                                {t(`projects.workflow.categories.${template.categoryKey}`)}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-light text-black mb-4 line-clamp-2 group-hover:text-[#2B144D] transition-colors">
                                            {templateTitle(template)}
                                        </h3>

                                        {/* Nodes */}
                                        <div className="space-y-2">
                                            <p className="text-xs font-light text-gray-400 uppercase tracking-wider">Nodes</p>
                                            <div className="flex flex-wrap gap-2">
                                                {template.nodes.map((node, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-block px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-light border border-gray-100"
                                                    >
                                                        {node}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Line */}
                                    <div className="h-1 bg-gradient-to-r from-[#2B144D] to-[#c08dfe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Templates Grid */}
            <div className="max-w-[1440px] mx-auto px-6 sm:px-6 lg:px-8 py-16">
                {/* Category Filter */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {CATEGORY_KEYS.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`
                                    px-5 py-2 text-sm font-light transition-all duration-200 border rounded-full
                                    ${selectedCategory === category
                                    ? 'bg-[#c08dfe] text-white border-[#c08dfe]'
                                    : 'bg-black text-gray-200 border-gray-600 hover:border-gray-300'
                                }
                                `}
                            >
                                {t(`projects.workflow.categories.${category}`)}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredTemplates.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTemplates.map((template) => (
                            <div
                                key={template.id}
                                className="group bg-white border border-gray-100 hover:border-[#2B144D] transition-all duration-300 cursor-pointer overflow-hidden rounded-md"
                            >
                                {/* Thumbnail */}
                                <div className="relative h-56 overflow-hidden bg-gray-50">
                                    <img
                                        src={template.thumbnail}
                                        alt={templateTitle(template)}
                                        className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Category Badge */}
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 text-xs font-light text-[#c08dfe] border border-[#c08dfe] rounded-full">
                                            {t(`projects.workflow.categories.${template.categoryKey}`)}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-light text-black mb-5 line-clamp-2 group-hover:text-[#2B144D] transition-colors">
                                        {templateTitle(template)}
                                    </h3>

                                    {/* Nodes */}
                                    <div className="space-y-3">
                                        <p className="text-xs font-light text-gray-400 uppercase tracking-wider">Nodes</p>
                                        <div className="flex flex-wrap gap-2">
                                            {template.nodes.map((node, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block px-3 py-1 bg-gray-50 text-gray-600 text-xs font-light border border-gray-100"
                                                >
                                                    {node}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Line */}
                                <div className="h-1 bg-gradient-to-r from-[#2B144D] to-[#c08dfe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24">
                        <Search className="w-12 h-12 text-gray-300 mx-auto mb-6" />
                        <h3 className="text-2xl font-light text-black mb-2">{t('projects.workflow.emptyTitle')}</h3>
                        <p className="text-gray-500 font-light">{t('projects.workflow.emptyDescription')}</p>
                    </div>
                )}
            </div>
        </div>
    );
}