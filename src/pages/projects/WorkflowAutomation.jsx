import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

// Dữ liệu template cố định
const templatesData = [
    {
        id: 1,
        title: 'Tạo nội dung AI với ChatGPT',
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        category: 'AI',
        nodes: ['ChatGPT', 'Google Sheets', 'Slack']
    },
    {
        id: 2,
        title: 'Tự động chấm điểm lead',
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        category: 'Bán hàng',
        nodes: ['HubSpot', 'Airtable', 'Email']
    },
    {
        id: 3,
        title: 'Hệ thống cảnh báo server',
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        category: 'IT Ops',
        nodes: ['Webhook', 'Slack', 'PagerDuty']
    },
    {
        id: 4,
        title: 'Lên lịch đăng social media',
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        category: 'Marketing',
        nodes: ['Twitter', 'Facebook', 'LinkedIn', 'Buffer']
    },
    {
        id: 5,
        title: 'Tự động xử lý hóa đơn',
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        category: 'Tài liệu',
        nodes: ['Gmail', 'Google Drive', 'QuickBooks']
    },
    {
        id: 6,
        title: 'Phân phối ticket hỗ trợ',
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        category: 'Hỗ trợ',
        nodes: ['Zendesk', 'Slack', 'Jira']
    },
    {
        id: 7,
        title: 'Tạo ảnh AI tự động',
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        category: 'AI',
        nodes: ['DALL-E', 'Midjourney', 'S3', 'Discord']
    },
    {
        id: 8,
        title: 'Đồng bộ dữ liệu CRM',
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        category: 'Bán hàng',
        nodes: ['Salesforce', 'HubSpot', 'MySQL']
    },
    {
        id: 9,
        title: 'Sao lưu database định kỳ',
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        category: 'IT Ops',
        nodes: ['PostgreSQL', 'AWS S3', 'Email']
    },
    {
        id: 10,
        title: 'Phân tích email campaign',
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        category: 'Marketing',
        nodes: ['Mailchimp', 'Google Analytics', 'Sheets']
    },
    {
        id: 11,
        title: 'Tạo báo cáo PDF tự động',
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        category: 'Tài liệu',
        nodes: ['Google Docs', 'PDF', 'Email', 'Drive']
    },
    {
        id: 12,
        title: 'Công cụ kiểm tra dữ liệu',
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        category: 'Khác',
        nodes: ['HTTP Request', 'Function', 'IF']
    },
    {
        id: 13,
        title: 'Xử lý chatbot AI',
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        category: 'Hỗ trợ',
        nodes: ['ChatGPT', 'Webhook', 'Database']
    },
    {
        id: 14,
        title: 'Phân tích cảm xúc khách hàng',
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        category: 'AI',
        nodes: ['OpenAI', 'Twitter API', 'MongoDB']
    },
    {
        id: 15,
        title: 'Báo cáo sales pipeline',
        thumbnail: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp',
        category: 'Bán hàng',
        nodes: ['Pipedrive', 'Slack', 'Google Sheets']
    }
];

const categories = ['Tất Cả', 'AI', 'Bán Hàng', 'IT Ops', 'Marketing', 'Tài Liệu', 'Khác', 'Hỗ Trợ'];

export default function N8nTemplates() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tất Cả');

    // Lọc templates dựa trên tìm kiếm và category
    const filteredTemplates = useMemo(() => {
        return templatesData.filter(template => {
            const matchesSearch = searchQuery === '' ||
                template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                template.nodes.some(node => node.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesCategory = selectedCategory === 'Tất Cả' || template.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

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
                        Bộ sưu tập workflow tự động hóa
                    </p>

                    {/* Search Bar */}
                    <div>
                        <div className="relative max-w-2xl mx-auto">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm theo tên hoặc node..."
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
                                            alt={template.title}
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
                                                {template.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-light text-black mb-4 line-clamp-2 group-hover:text-[#2B144D] transition-colors">
                                            {template.title}
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
                        {categories.map((category) => (
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
                                {category}
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
                                        alt={template.title}
                                        className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Category Badge */}
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 text-xs font-light text-[#c08dfe] border border-[#c08dfe] rounded-full">
                                            {template.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-light text-black mb-5 line-clamp-2 group-hover:text-[#2B144D] transition-colors">
                                        {template.title}
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
                        <h3 className="text-2xl font-light text-black mb-2">Không tìm thấy template</h3>
                        <p className="text-gray-500 font-light">Thử điều chỉnh từ khóa hoặc bộ lọc</p>
                    </div>
                )}
            </div>
        </div>
    );
}