export const projectsData = [
    {
        id: 'wordplus',
        name: 'Website WoodPlus',
        summary: 'Tăng trưởng doanh thu website WoodPlus thông qua tối ưu funnel và remarketing hành vi.',
       description:
            'Dự án Website WoodPlus tập trung tối ưu toàn bộ hành trình mua hàng trên website, từ tiếp cận sản phẩm, trải nghiệm duyệt trang đến quyết định thanh toán và tái mua. Đội ngũ triển khai tập trung xử lý các điểm nghẽn gây rớt đơn, đồng bộ dữ liệu hành vi người dùng và xây dựng nền tảng đo lường giúp WoodPlus tăng trưởng doanh thu bền vững thông qua kênh website.',
        details: [
            'Dự án bắt đầu bằng việc phân tích hành vi người dùng trên website WoodPlus nhằm xác định các điểm rơi khiến khách hàng thoát trang hoặc không hoàn tất mua hàng. Từ đó, nhóm triển khai tái cấu trúc các trang sản phẩm, danh mục và luồng thanh toán để giảm ma sát trong quá trình mua.',
            'Song song, hệ thống dữ liệu được đồng bộ để phục vụ remarketing theo hành vi như: xem sản phẩm, thêm giỏ nhưng chưa mua và khách hàng đã mua trước đó. Các kịch bản nuôi dưỡng và re-engagement được thiết kế phù hợp với đặc thù sản phẩm nội thất và đồ gia dụng của WordPlus.',
            'Ngoài ra, website được tối ưu tốc độ tải trang và giao diện người dùng theo nguyên tắc “less click – more clarity”. Các điểm chốt đơn được A/B testing liên tục trong 8 tuần, giúp cải thiện tỷ lệ chuyển đổi và tối ưu chi phí trên mỗi đơn hàng.'
        ],
        date: '01/2025',
        category: ['Website & Landing Page', 'Graphic Design & Branding'],
        partner: 'woodplus.vn',
        technologies: ['React', 'Tailwind', 'Figma', 'GA4'],
        metrics: [
            { label: 'Tăng trưởng doanh thu', value: '+38%' },
            { label: 'Tỷ lệ chuyển đổi', value: '+21%' },
            { label: 'CPA', value: '-18%' }
        ],
        cta: {
            label: 'Xem chi tiết',
            url: 'https://www.nhadepwoodplus.com/'
        },
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/website&landingpage/woodplus.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
        ]
    },
    {
        id: 'beauty-summit-2025',
        name: 'Beauty Summit 2025',
        summary: 'Hệ sinh thái số toàn diện cho sự kiện ngành làm đẹp.',
        description:
            'Dự án xây dựng hệ sinh thái website và dữ liệu xoay quanh sự kiện Beauty Summit 2025, bao gồm website giới thiệu sự kiện, landing page tạo thiệp mời cá nhân hóa, cổng thanh toán & check-in, nền tảng bình chọn Beauty Awards và hệ thống dataset phục vụ quảng cáo chuyển đổi. Mục tiêu là số hóa toàn bộ hành trình người tham gia từ đăng ký → thanh toán → check-in → bình chọn → remarketing sau sự kiện.',
        details: [
            'Hệ thống website sự kiện đóng vai trò trung tâm, cung cấp thông tin chương trình, diễn giả, gian hàng và vé. Landing page tạo thiệp mời được cá nhân hóa theo từng nhóm khách mời, hỗ trợ chia sẻ nhanh qua Zalo, Facebook và email để lan tỏa sự kiện.',
            'Cổng thanh toán & check-in được triển khai đồng bộ, cho phép người dùng thanh toán online, sinh mã QR riêng cho từng vé và check-in nhanh tại sự kiện. Dữ liệu check-in được cập nhật theo thời gian thực để phục vụ vận hành và báo cáo.',
            'Website bình chọn Beauty Awards được xây dựng nhằm tăng tương tác và thu thập dữ liệu người quan tâm. Toàn bộ hành vi (xem trang, đăng ký, thanh toán, check-in, bình chọn) được gom về dataset trung tâm để chạy quảng cáo chuyển đổi, remarketing và phân tích hiệu quả chiến dịch.'
        ],
        date: '02/2025',
        category: ['Website & Landing Page', 'Automations & Data', 'Facebook Ads'],
        partner: 'Hana HP Group',
        technologies: ['Wordpress', 'GA4', 'Meta Pixel', 'Automations', 'Data', 'n8n', "Email Marketing", "ZBS Zalo"],
        metrics: [
            { label: 'Tăng trưởng doanh thu', value: '+38%' },
            { label: 'Tỷ lệ chuyển đổi', value: '+21%' },
            { label: 'CPA', value: '-18%' }
        ],
        cta: {
            label: 'Xem chi tiết',
            url: 'https://beautysummit.vn/'
        },
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'kat-skin',
        name: 'Website Kat Skin',
        summary: 'Website e-commerce & giới thiệu thương hiệu mỹ phẩm Kat Skin.',
        description:
            'Dự án tập trung xây dựng website e-commerce kết hợp website giới thiệu thương hiệu Kat Skin, nhằm thể hiện hình ảnh chuyên nghiệp, tăng độ tin cậy và thúc đẩy chuyển đổi bán hàng online. Hệ thống được thiết kế xoay quanh trải nghiệm người dùng, giúp khách hàng dễ dàng tìm hiểu sản phẩm, liệu trình và thực hiện mua sắm chỉ với vài thao tác.',
        details: [
            'Website được xây dựng theo hướng e-commerce, tích hợp đầy đủ các tính năng bán hàng: danh mục sản phẩm, biến thể, giỏ hàng, thanh toán và quản lý đơn hàng. Nội dung và bố cục được tối ưu để vừa giới thiệu câu chuyện thương hiệu, vừa dẫn dắt hành vi mua sắm tự nhiên.',
            'Chúng tôi tái cấu trúc UI/UX theo tiêu chí “rõ ràng – dễ dùng – thuyết phục”, tối ưu luồng truy cập từ trang giới thiệu sản phẩm đến trang đặt hàng, đồng thời cải thiện tốc độ tải trang trên cả desktop và mobile.',
            'Hệ thống đo lường được triển khai ngay từ đầu với GA4, theo dõi các hành vi quan trọng như xem sản phẩm, thêm vào giỏ và hoàn tất mua hàng, tạo nền tảng dữ liệu cho các chiến dịch quảng cáo và tối ưu chuyển đổi trong các giai đoạn tiếp theo.'
        ],
        date: '06/2025',
        category: 'Website & Landing Page',
        partner: 'Thủy Kat Skin',
        technologies: ['Wordpress', 'GA4', 'Figma'],
        metrics: [
            { label: 'Tăng trưởng doanh thu', value: '+38%' },
            { label: 'Tỷ lệ chuyển đổi', value: '+21%' },
            { label: 'CPA', value: '-18%' }
        ],
        cta: {
            label: 'Xem chi tiết',
            url: 'https://katskin.vn/'
        },
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'doan-bac-ninh',
        name: 'Website trung tâm Thanh thiếu nhi tỉnh Bắc Ninh',
        summary: 'Website thông tin, blog và tuyển dụng cho Trung tâm Thanh thiếu nhi tỉnh Bắc Ninh.',
        description:
            'Dự án xây dựng website chính thức cho Trung tâm Thanh thiếu nhi tỉnh Bắc Ninh với vai trò là kênh thông tin tập trung, phục vụ truyền thông hoạt động, chia sẻ tin tức – bài viết chuyên đề và đăng tải thông tin tuyển dụng. Website được thiết kế theo định hướng rõ ràng, dễ truy cập, phù hợp với nhóm đối tượng thanh thiếu nhi, phụ huynh và cán bộ đoàn thể.',
        details: [
            'Website được triển khai với cấu trúc nội dung dạng blog, cho phép cập nhật tin tức, sự kiện, hoạt động phong trào và các bài viết tuyên truyền một cách linh hoạt, dễ quản trị. Hệ thống phân loại chuyên mục rõ ràng giúp người đọc nhanh chóng tiếp cận thông tin cần thiết.',
            'Chúng tôi xây dựng chuyên trang tuyển dụng riêng, hỗ trợ đăng tải thông báo tuyển dụng, mô tả vị trí công việc và tiếp nhận hồ sơ online, giúp đơn vị tiết kiệm thời gian và chuẩn hóa quy trình tuyển dụng.',
            'Giao diện được thiết kế hiện đại, thân thiện, tối ưu trải nghiệm trên cả desktop và thiết bị di động. Đồng thời, hệ thống đo lường cơ bản được tích hợp để theo dõi lượt truy cập, mức độ quan tâm tới các nội dung và phục vụ cho việc cải thiện truyền thông lâu dài.'
        ],
        date: '02/2025',
        category: 'Website & Landing Page',
        partner: 'Tỉnh Bắc Ninh',
        technologies: ['Wordpress', 'GA4', 'Figma'],
        metrics: [
            { label: 'Lượt truy cập hàng tháng', value: '+45%' },
            { label: 'Thời gian truy cập trung bình', value: '+32%' },
            { label: 'Tỷ lệ thoát trang', value: '-20%' }
        ],
        cta: {
            label: 'Xem chi tiết',
            url: 'https://thanhthieunhibacninh.vn/'
        },
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'aloha-villa',
        name: 'Website Aloha Villa',
        summary: 'Website giới thiệu, blog và đặt phòng cho khu nghỉ dưỡng Aloha Villa.',
        description:
            'Dự án tập trung xây dựng website giới thiệu Aloha Villa với mục tiêu nâng cao hình ảnh thương hiệu, truyền tải trải nghiệm nghỉ dưỡng và thúc đẩy nhu cầu đặt phòng trực tuyến. Website đóng vai trò là kênh thông tin chính thức, nơi khách hàng có thể khám phá không gian villa, tiện ích, dịch vụ và dễ dàng đưa ra quyết định đặt phòng.',
        details: [
            'Website được thiết kế theo phong cách nghỉ dưỡng cao cấp, tập trung vào hình ảnh và trải nghiệm thị giác, giúp khách hàng cảm nhận được không gian, tiện ích và giá trị khác biệt của Aloha Villa ngay từ lần truy cập đầu tiên.',
            'Chúng tôi xây dựng hệ thống blog chia sẻ kinh nghiệm du lịch, gợi ý lịch trình và thông tin điểm đến, góp phần tăng giá trị nội dung, cải thiện SEO và thu hút lượng truy cập tự nhiên ổn định.',
            'Chức năng đặt phòng được tích hợp trực tiếp trên website, cho phép khách hàng kiểm tra thông tin phòng, thời gian lưu trú và gửi yêu cầu đặt phòng nhanh chóng. Đồng thời, hệ thống đo lường hành vi được triển khai để theo dõi lượt xem phòng, tương tác và nhu cầu đặt phòng, tạo nền tảng cho các hoạt động marketing và tối ưu chuyển đổi về sau.'
        ],
        date: '05/2025',
        category: 'Website & Landing Page',
        partner: 'aloha villa',
        technologies: ['Wordpress', 'GA4', 'Meta Pixel', 'Automations', 'Data'],
        metrics: [
            { label: 'Lượt truy cập website', value: '+42%' },
            { label: 'Tỷ lệ gửi yêu cầu đặt phòng', value: '+27%' },
            { label: 'Tỷ lệ thoát trang', value: '-19%' }
        ],
        cta: {
            label: 'Xem chi tiết',
            url: 'https://aloha.vn/'
        },
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'rino-authentic',
        name: 'Website E-commerce Rino Authentic',
        summary: 'Website e-commerce bán thời trang nam với định hướng thương hiệu rõ ràng và tối ưu chuyển đổi.',
        description:
            'Dự án tập trung xây dựng website e-commerce cho thương hiệu thời trang nam Rino Authentic, đóng vai trò là kênh bán hàng trung tâm và nền tảng phát triển thương hiệu dài hạn. Website được thiết kế nhằm thể hiện phong cách nam tính, hiện đại, đồng thời tối ưu trải nghiệm mua sắm để gia tăng tỷ lệ chuyển đổi và giá trị đơn hàng.',
        details: [
            'Website được triển khai theo mô hình e-commerce hoàn chỉnh, bao gồm danh mục sản phẩm, bộ lọc theo size – màu – kiểu dáng, giỏ hàng và thanh toán. Nội dung sản phẩm được chuẩn hóa để vừa truyền tải giá trị thương hiệu, vừa hỗ trợ quyết định mua nhanh chóng.',
            'Chúng tôi tối ưu UI/UX theo hành vi mua sắm của khách hàng thời trang nam, rút ngắn luồng từ xem sản phẩm đến đặt hàng, đồng thời đảm bảo hiển thị tốt trên thiết bị di động – nơi chiếm phần lớn lưu lượng truy cập.',
            'Hệ thống đo lường và dữ liệu được tích hợp ngay từ đầu với GA4 và Meta Pixel, theo dõi đầy đủ các hành vi như xem sản phẩm, thêm vào giỏ và hoàn tất thanh toán. Đây là nền tảng để triển khai các chiến dịch quảng cáo chuyển đổi, remarketing và tối ưu hiệu quả kinh doanh trong các giai đoạn tiếp theo.'
        ],
        date: '04/2025',
        category: ['Website & Landing Page', 'Automations & Data', 'Facebook Ads'],
        partner: 'Nextgen',
        technologies: ['Wordpress', 'GA4', 'Meta Pixel', 'Automations', 'Data'],
        metrics: [
            { label: 'Tăng trưởng doanh thu', value: '+38%' },
            { label: 'Tỷ lệ chuyển đổi', value: '+21%' },
            { label: 'CPA', value: '-18%' }
        ],
        cta: {
            label: 'Xem chi tiết',
            url: 'https://rino.com.vn/'
        },
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'nghe-content',
        name: 'Website E-learning Nghề Content',
        summary: 'Website e-learning đào tạo Content viral và cung cấp các dịch vụ hỗ trợ sáng tạo nội dung.',
        description:
            'Dự án tập trung xây dựng nền tảng e-learning cho Nghề Content, vừa là nơi đào tạo chuyên sâu về Content Marketing, vừa là kênh giới thiệu các dịch vụ liên quan như tư vấn, đào tạo và hỗ trợ triển khai nội dung cho doanh nghiệp. Website được thiết kế để dẫn dắt người học từ tìm hiểu → đăng ký khóa học → học tập → sử dụng các dịch vụ mở rộng.',
        details: [
            'Hệ thống e-learning (LMS) được xây dựng đầy đủ các chức năng: bán khóa học, quản lý học viên, phân quyền truy cập bài giảng, theo dõi tiến độ học tập và cấp quyền học tự động sau khi thanh toán.',
            'Website đồng thời đóng vai trò như một kênh giới thiệu dịch vụ, trình bày rõ các gói đào tạo, mentoring và dịch vụ content cho cá nhân và doanh nghiệp, giúp mở rộng nguồn doanh thu ngoài bán khóa học.',
            'Toàn bộ hành trình người dùng được đo lường và tự động hóa với GA4, Meta Pixel, email marketing và hệ thống automation, hỗ trợ nuôi dưỡng học viên tiềm năng, nhắc học, upsell khóa học và giới thiệu dịch vụ phù hợp theo từng nhóm người dùng.'
        ],
        date: '06/2025',
        category: ['Website & Landing Page', 'Automations & Data', 'Facebook Ads'],
        partner: 'Nghề content',
        technologies: ['Wordpress', 'GA4', 'Meta Pixel', 'Automations', 'Data', 'LMS', 'Email Marketing'],
        metrics: [
            { label: 'Tăng trưởng doanh thu', value: '+38%' },
            { label: 'Tỷ lệ chuyển đổi', value: '+21%' },
            { label: 'CPA', value: '-18%' }
        ],
        cta: {
            label: 'Xem chi tiết',
            url: 'https://khoahoc.nghecontent.com/'
        },
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'talentmate',
        name: 'Website tìm việc Talentmate',
        summary: 'Thiết kế website nền tảng tìm việc và tuyển dụng cho Talentmate.',
        description:
            'Dự án tập trung thiết kế giao diện website cho Talentmate – nền tảng kết nối nhà tuyển dụng và ứng viên. Website được xây dựng với mục tiêu thể hiện rõ giá trị sản phẩm, tạo trải nghiệm trực quan, dễ sử dụng và truyền tải hình ảnh thương hiệu chuyên nghiệp trong lĩnh vực nhân sự – tuyển dụng.',
        details: [
            'Chúng tôi thiết kế giao diện tổng thể cho website tìm việc, bao gồm trang chủ, trang danh sách việc làm, chi tiết việc làm, giới thiệu doanh nghiệp và các trang thông tin hỗ trợ, đảm bảo luồng trải nghiệm rõ ràng cho cả ứng viên và nhà tuyển dụng.',
            'UI/UX được xây dựng theo hướng hiện đại, tối giản, tập trung vào khả năng tìm kiếm – lọc công việc nhanh chóng, giúp người dùng dễ tiếp cận vị trí phù hợp chỉ sau vài thao tác.',
            'Toàn bộ hệ thống giao diện được thiết kế trên Figma với đầy đủ component và guideline, giúp đội ngũ phát triển dễ dàng triển khai website và mở rộng tính năng trong tương lai.'
        ],
        date: '11/2025',
        category: 'Graphic Design & Branding',
        partner: 'Talentmate',
        technologies: ['Figma'],
        metrics: [
            { label: 'Hoàn thiện bộ giao diện', value: '100%' },
            { label: 'Tỷ lệ hài lòng khách hàng', value: 'Cao' },
            { label: 'Khả năng mở rộng thiết kế', value: 'Tốt' }
        ],
        cta: 'https://www.talentmate.vn/',
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'dataset-teahui',
        name: 'Ứng dụng dataset chạy chuyển đổi với Teahui',
        summary: 'Triển khai dataset và tự động hóa để tối ưu quảng cáo chuyển đổi cho Teahui.',
        description:
            'Dự án tập trung ứng dụng dataset kết hợp nền tảng Smax.ai nhằm cải thiện hiệu quả quảng cáo chuyển đổi cho thương hiệu Teahui. Hệ thống được xây dựng để thu thập, chuẩn hóa và khai thác dữ liệu hành vi khách hàng, từ đó hỗ trợ thuật toán quảng cáo học nhanh hơn và phân phối tới đúng nhóm khách hàng tiềm năng.',
        details: [
            'Chúng tôi triển khai giải pháp dataset để thu thập dữ liệu từ landing page và các điểm chạm marketing, bao gồm hành vi điền form, tương tác và chuyển đổi, giúp tạo nguồn dữ liệu sạch và nhất quán cho các chiến dịch quảng cáo.',
            'Dataset được kết nối với Smax.ai để tự động phân loại và xử lý dữ liệu khách hàng, đồng thời hỗ trợ phản hồi nhanh cho khách hàng tiềm năng thông qua chatbot, tăng khả năng chốt đơn ngay trong quá trình tư vấn.',
            'Toàn bộ dữ liệu chuyển đổi được đồng bộ và theo dõi liên tục, tạo nền tảng cho việc tối ưu chiến dịch quảng cáo Facebook theo hướng tập trung vào chất lượng data, giảm chi phí trên mỗi chuyển đổi và nâng cao hiệu quả kinh doanh.'
        ],
        date: '10/2025',
        category: 'Facebook Ads',
        partner: 'Ăn vặt họ Chu',
        technologies: ['Dataset', 'Ladipage', 'Automations', 'Data'],
        metrics: [
            { label: 'Tăng trưởng doanh thu', value: '+38%' },
            { label: 'Tỷ lệ chuyển đổi', value: '+21%' },
            { label: 'CPA', value: '-18%' }
        ],
        cta: null,
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/projects/dataset.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'an-vat-ho-chu',
        name: 'Ứng dụng dataset chạy chuyển đổi với Ăn vặt họ Chu',
        summary: 'Triển khai dataset và tích hợp POS để tối ưu quảng cáo chuyển đổi cho Ăn vặt họ Chu.',
        description:
            'Dự án tập trung ứng dụng dataset kết hợp tích hợp hệ thống POS nhằm đồng bộ dữ liệu bán hàng online – offline cho thương hiệu Ăn vặt họ Chu. Mục tiêu chính là tạo nguồn dữ liệu chuyển đổi chính xác, giúp các chiến dịch quảng cáo Facebook hoạt động hiệu quả hơn và phản ánh đúng doanh thu thực tế.',
        details: [
            'Chúng tôi xây dựng hệ thống dataset thu thập dữ liệu từ landing page và các điểm chạm marketing, bao gồm hành vi điền form, đặt hàng và tương tác, tạo nền tảng dữ liệu sạch cho các chiến dịch quảng cáo chuyển đổi.',
            'Hệ thống POS được tích hợp để đồng bộ trạng thái đơn hàng và doanh thu thực, đảm bảo dữ liệu chuyển đổi được ghi nhận chính xác, hạn chế sai lệch giữa số liệu quảng cáo và bán hàng thực tế.',
            'Toàn bộ dữ liệu online – offline được hợp nhất và theo dõi tập trung, giúp đội ngũ marketing tối ưu quảng cáo dựa trên doanh thu thật, đồng thời giảm chi phí trên mỗi chuyển đổi và nâng cao hiệu quả vận hành.'
        ],
        date: '12/2025',
        category: 'Facebook Ads',
        partner: 'Ăn vặt họ Chu',
        technologies: ['Dataset', 'Ladipage', 'Automations', 'Data'],
        metrics: [
            { label: 'Tăng trưởng doanh thu', value: '+38%' },
            { label: 'Tỷ lệ ghi nhận chuyển đổi chính xác', value: '+95%' },
            { label: 'CPA', value: '-10%' }
        ],
        cta: null,
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/projects/dataset.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'payment-checkin-tuki-group',
        name: 'Hệ thống thanh toán & check-in sự kiện Tuki Group',
        summary: 'Hệ thống thanh toán, check-in và tự động hóa truyền thông cho sự kiện của Tuki Group.',
        description:
            'Dự án xây dựng hệ thống phục vụ sự kiện cho Tuki Group, bao gồm thanh toán, quản lý danh sách khách mời và check-in tại sự kiện. Hệ thống được thiết kế nhằm giảm tải vận hành thủ công, đảm bảo quy trình check-in nhanh gọn, chính xác và tạo trải nghiệm chuyên nghiệp cho người tham dự.',
        details: [
            'Chúng tôi triển khai hệ thống check-in tự động sử dụng mã QR cho từng khách tham dự, cho phép kiểm soát danh sách khách, trạng thái thanh toán và lượt check-in theo thời gian thực ngay tại sự kiện.',
            'Hệ thống email marketing và ZBS Zalo được tích hợp để tự động gửi thông tin xác nhận đăng ký, vé điện tử, thông báo trước – trong – sau sự kiện, giúp duy trì tương tác với khách hàng mà không cần thao tác thủ công.',
            'Toàn bộ dữ liệu đăng ký, thanh toán và check-in được đồng bộ và quản lý tập trung, tạo nền tảng cho việc thống kê, báo cáo nhanh sau sự kiện và phục vụ các hoạt động chăm sóc, remarketing về sau.'
        ],
        date: '08/2025',
        category: 'Automations & Data',
        partner: 'Tuki Group',
        technologies: ['Ladipage', 'Automations', 'Data', "Email Marketing", "ZBS Zalo"],
        metrics: [
            { label: 'Thời gian check-in', value: '-50%' },
            { label: 'Tỷ lệ gửi thông báo tự động', value: '100%' },
            { label: 'Sai sót vận hành', value: '-90%' }
        ],
        cta: null,
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'payment-checkin-jimto',
        name: 'Hệ thống check-in sự kiện Jimto',
        summary: 'Hệ thống landing page, check-in và tự động hóa truyền thông cho sự kiện Jimto.',
        description:
            'Dự án xây dựng hệ thống phục vụ sự kiện cho Jimto, bao gồm landing page giới thiệu sự kiện, quản lý đăng ký và giải pháp check-in tại điểm diễn ra. Hệ thống được thiết kế nhằm tối ưu trải nghiệm người tham dự, đồng thời giảm tối đa các thao tác thủ công trong khâu vận hành sự kiện.',
        details: [
            'Chúng tôi triển khai landing page sự kiện trên nền tảng Ladipage, trình bày rõ thông tin chương trình, diễn giả và quyền lợi tham dự, đồng thời tối ưu luồng đăng ký để gia tăng tỷ lệ hoàn tất form.',
            'Giải pháp check-in tự động bằng mã QR được tích hợp, giúp ban tổ chức kiểm soát danh sách người tham dự, trạng thái đăng ký và check-in nhanh chóng, chính xác ngay tại sự kiện.',
            'Hệ thống email marketing và ZBS Zalo được thiết lập tự động để gửi thông tin xác nhận, vé điện tử và các thông báo trước – trong – sau sự kiện, giúp duy trì tương tác với khách tham dự mà không cần xử lý thủ công.'
        ],
        date: '09/2025',
        category: 'Automations & Data',
        partner: 'Jim Tồ',
        technologies: ['Ladipage', 'Automations', 'Data', "Email Marketing", "ZBS Zalo"],
        metrics: [
            { label: 'Thời gian check-in', value: '-50%' },
            { label: 'Tỷ lệ gửi thông báo tự động', value: '100%' },
            { label: 'Giảm tải vận hành thủ công', value: 'Đáng kể' }
        ],
        cta: null,
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'crm-1900',
        name: 'Hệ thống CRM & xác nhận đánh giá tại quầy với 1900 Hair Salon',
        summary: 'Chuẩn hóa dữ liệu khách hàng và tăng hiệu quả chốt sale tại điểm bán.',
        description:
            'Dự án tập trung xây dựng hệ thống Dataset và CRM nhằm chuẩn hóa toàn bộ dữ liệu khách hàng, lịch sử mua hàng và hành vi tương tác, giúp đội ngũ Sales khai thác dữ liệu hiệu quả hơn trong quá trình tư vấn và chăm sóc khách hàng. Giải pháp giúp Sales nắm rõ thông tin khách hàng ngay tại quầy, rút ngắn thời gian tư vấn, tăng tỷ lệ chốt đơn và nâng cao trải nghiệm dịch vụ.',
        details: [
            'Mục tiêu chính của dự án là tạo ra một kho dữ liệu khách hàng tập trung (Dataset), đồng bộ dữ liệu từ nhiều nguồn như website, landing page, form đăng ký, và tương tác tại cửa hàng. Từ đó giúp đội ngũ Sales có cái nhìn đầy đủ về chân dung và giá trị vòng đời của từng khách hàng.',
            'Hệ thống CRM được thiết kế xoay quanh hành trình làm việc thực tế của Sales tại quầy, bao gồm: xác nhận thông tin khách hàng, ghi nhận đánh giá dịch vụ, theo dõi lịch sử mua hàng và gợi ý chăm sóc lại. Mọi thao tác đều được tối giản để phù hợp với môi trường bán lẻ tốc độ cao.',
            'Ngoài ra, dữ liệu từ CRM được sử dụng để phân nhóm khách hàng theo tần suất mua, giá trị đơn hàng và mức độ trung thành, giúp Sales và quản lý chủ động triển khai các chương trình upsell, cross-sell và tái kích hoạt khách hàng hiệu quả.'
        ],
        date: '09/2025',
        category: ['Automations & Data', 'Facebook Ads', 'CRM'],
        partner: 'Jim Tồ',
        technologies: ['Ladipage', 'Automations', 'Data', "CRM"],
        metrics: [
            { label: 'Tỷ lệ chốt sale tại quầy', value: '+25%' },
            { label: 'Khách hàng quay lại', value: '+32%' },
            { label: 'Thời gian xử lý thông tin', value: '-40%' }
        ],
        cta: null,
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'home-english',
        name: 'Tối ưu & nâng cấp website Home English',
        summary: 'Cải thiện trải nghiệm người dùng và hiệu quả chuyển đổi trên nền website cũ.',
        description:
            'Dự án tập trung vào việc chỉnh sửa và nâng cấp website hiện tại của Home English nhằm khắc phục các hạn chế về giao diện, trải nghiệm người dùng và khả năng chuyển đổi. Thay vì xây mới hoàn toàn, chúng tôi tối ưu lại cấu trúc nội dung, luồng điều hướng và các điểm kêu gọi hành động để website vận hành hiệu quả hơn, hỗ trợ tốt cho hoạt động kinh doanh và tư vấn khóa học.',
        details: [
            'Mục tiêu chính của dự án là cải thiện hiệu suất website cũ bằng cách rà soát lại toàn bộ cấu trúc trang, nội dung và hành vi người dùng. Các trang quan trọng được sắp xếp lại theo hành trình tìm hiểu – đăng ký – liên hệ, giúp người dùng dễ dàng tiếp cận thông tin khóa học.',
            'Website được chỉnh sửa giao diện theo hướng rõ ràng, hiện đại và dễ đọc hơn, đồng thời tối ưu hiển thị trên thiết bị di động. Các yếu tố gây nhiễu hoặc dư thừa trong phiên bản cũ được loại bỏ để giảm số bước thao tác của người dùng.',
            'Ngoài ra, dự án còn tích hợp và chuẩn hóa hệ thống đo lường bằng GA4 và Meta Pixel, giúp đội ngũ Home English theo dõi chính xác nguồn traffic, hành vi người dùng và hiệu quả các chiến dịch quảng cáo.'
        ],
        date: '10/2025',
        category: 'Website & Landing Page',
        partner: 'Home English',
        technologies: ['Wordpress', 'GA4', 'Meta Pixel'],
        metrics: [
            { label: 'Thời gian onsite', value: '+27%' },
            { label: 'Tỷ lệ chuyển đổi', value: '+19%' },
            { label: 'Tỷ lệ thoát trang', value: '-22%' }
        ],
        cta: {
            label: 'Xem chi tiết',
            url: 'https://homeenglish.vn/'
        },
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'coahio-elearning',
        name: 'Website E-learning Coahio',
        summary: 'Xây dựng nền tảng E-learning và chuẩn hóa dữ liệu phục vụ tăng trưởng dài hạn.',
        description:
            'Dự án tập trung xây dựng website E-learning cho Coahio, kết hợp triển khai hệ thống dataset nhằm quản lý học viên, khóa học và hành vi học tập một cách tập trung. Giải pháp giúp Coahio không chỉ vận hành nền tảng đào tạo trực tuyến ổn định mà còn có dữ liệu rõ ràng để tối ưu marketing, bán khóa học và chăm sóc học viên sau đào tạo.',
        details: [
            'Mục tiêu chính của dự án là xây dựng nền tảng E-learning dễ sử dụng cho cả học viên và đội ngũ vận hành, đồng thời chuẩn hóa dữ liệu người dùng, khóa học và tiến trình học tập để phục vụ phân tích và mở rộng quy mô.',
            'Website được phát triển trên nền tảng WordPress tích hợp hệ thống LMS, cho phép quản lý khóa học, bài giảng, học viên và trạng thái học tập. Dataset được thiết kế để thu thập và lưu trữ thông tin đăng ký, lịch sử học, hành vi truy cập và kết quả học tập.',
            'Ngoài ra, dự án còn tích hợp GA4 và Meta Pixel để theo dõi hiệu quả marketing, đồng thời kết nối các luồng automation nhằm hỗ trợ email thông báo, nhắc học và remarketing dựa trên dữ liệu học viên.'
        ],
        date: '10/2025',
        category: ['Website & Landing Page', 'Automations & Data', 'Facebook Ads'],
        partner: 'Coahio',
        technologies: ['Wordpress', 'GA4', 'Meta Pixel', 'Automations', 'Data', 'LMS'],
        metrics: [
            { label: 'Tỷ lệ hoàn thành khóa học', value: '+24%' },
            { label: 'Tỷ lệ đăng ký khóa học', value: '+19%' },
            { label: 'Chi phí/đăng ký', value: '-17%' }
        ],
        cta: {
            label: 'Xem chi tiết',
            url: 'https://khoahoc.coahio.vn/'
        },
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'meart-makeup',
        name: 'Website E-learning Meart Makeup',
        summary: 'Xây dựng nền tảng đào tạo trực tuyến và hệ thống dữ liệu phục vụ tăng trưởng học viên.',
        description:
            'Dự án tập trung xây dựng website E-learning cho Meart Makeup, đồng thời triển khai hệ thống dataset nhằm quản lý học viên, khóa học và hành vi học tập một cách tập trung. Giải pháp giúp thương hiệu vận hành đào tạo online hiệu quả, chuẩn hóa dữ liệu và có nền tảng mở rộng các hoạt động marketing – bán khóa học trong dài hạn.',
        details: [
            'Mục tiêu chính của dự án là xây dựng nền tảng E-learning chuyên nghiệp, dễ sử dụng cho học viên và đội ngũ vận hành, đồng thời chuẩn hóa dữ liệu học viên và khóa học để phục vụ quản lý và phân tích.',
            'Website được phát triển trên nền tảng WordPress tích hợp hệ thống E-learning, cho phép quản lý khóa học, bài giảng, học viên, tiến trình học và kết quả học tập. Dataset được thiết kế để lưu trữ thông tin đăng ký, lịch sử học và hành vi truy cập.',
            'Hệ thống được tích hợp GA4 và Meta Pixel nhằm theo dõi hiệu quả marketing, đồng thời hỗ trợ các luồng automation để phục vụ email thông báo, chăm sóc học viên và remarketing dựa trên dữ liệu.'
        ],
        date: '12/2025',
        category: ['Website & Landing Page', 'Automations & Data', 'Facebook Ads'],
        partner: 'Hiền Mew',
        technologies: ['Wordpress', 'GA4', 'Meta Pixel', 'Automations', 'Data', 'E-learning'],
        metrics: [
            { label: 'Tỷ lệ đăng ký khóa học', value: '+26%' },
            { label: 'Tỷ lệ hoàn thành khóa học', value: '+22%' },
            { label: 'Chi phí/đăng ký', value: '-15%' }
        ],
        cta: {
            label: 'Xem chi tiết',
            url: 'https://khoahoc.mewartmakeup.vn/'
        },
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/projects/Web_elearning.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'eac-group',
        name: 'Hệ thống automation & CRM Dashboard EAC Group',
        summary: 'Xây dựng hệ thống CRM dashboard và tập trung dữ liệu phục vụ quản lý & ra quyết định.',
        description:
            'Dự án tập trung xây dựng hệ thống automation và CRM dashboard cho EAC Group, giúp tổng hợp toàn bộ dữ liệu kinh doanh, marketing và vận hành về một mối. Giải pháp dựa trên dataset nhằm hỗ trợ đội ngũ quản lý theo dõi hiệu suất, kiểm soát pipeline và đưa ra quyết định dựa trên dữ liệu thời gian thực.',
        details: [
            'Mục tiêu chính của dự án là chuẩn hóa và tập trung dữ liệu từ nhiều nguồn (website, marketing, bán hàng) về một hệ thống CRM dashboard thống nhất, giúp ban lãnh đạo dễ dàng theo dõi và quản lý.',
            'Hệ thống dataset được xây dựng để lưu trữ và đồng bộ dữ liệu khách hàng, lead, hoạt động bán hàng và hiệu quả marketing. Dữ liệu được cập nhật tự động và hiển thị trực quan trên dashboard.',
            'Giải pháp automation giúp giảm thao tác thủ công, tự động hóa quy trình cập nhật dữ liệu, báo cáo và theo dõi hiệu suất theo ngày, tuần và tháng.'
        ],
        date: '12/2025',
        category: ['Website & Landing Page', 'Automations & Data', 'Facebook Ads', 'CRM'],
        partner: 'EAC Group',
        technologies: ['Wordpress', 'GA4', 'Meta Pixel', 'Automations', 'Data', 'E-learning'],
        metrics: [
             { label: 'Thời gian tổng hợp báo cáo', value: '-40%' },
            { label: 'Độ chính xác dữ liệu', value: '+30%' },
            { label: 'Hiệu suất xử lý dữ liệu', value: '+25%' }
        ],
        cta: null,
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/projects/CRM_dashboard.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'the-thao-pharma',
        name: 'Hệ thống Lark base quản lý CV & nhân viên',
        summary: 'Chuẩn hóa quy trình tuyển dụng và quản lý nhân sự trên Lark Base.',
        description:
            'Dự án tập trung xây dựng hệ thống Lark Base phục vụ quản lý nhân sự và tuyển dụng cho Thế Thảo Pharma. Giải pháp giúp tập trung toàn bộ dữ liệu CV, ứng viên và nhân sự hiện tại vào một nền tảng duy nhất, đồng thời tự động hóa các khâu sàng lọc, đặt lịch và gửi email phỏng vấn.',
        details: [
            'Cung cấp template Lark Base quản lý CV và hồ sơ ứng viên, cho phép phân loại theo vị trí, trạng thái tuyển dụng và nguồn ứng viên.',
            'Thiết kế bảng quản lý lịch hẹn phỏng vấn, liên kết trực tiếp với từng ứng viên và nhân sự phụ trách, giúp theo dõi tiến trình tuyển dụng rõ ràng.',
            'Xây dựng template email phỏng vấn tự động, hỗ trợ gửi thư mời phỏng vấn, xác nhận lịch và cập nhật trạng thái cho ứng viên nhanh chóng.'
        ],
        date: '01/2025',
        category: 'Automations & Data',
        partner: 'Thế Thảo Pharma',
        technologies: ['Larkbasse', 'Automations', 'Data'],
        metrics: [
            { label: 'Thời gian xử lý hồ sơ', value: '-35%' },
            { label: 'Tỷ lệ phản hồi ứng viên', value: '+28%' },
            { label: 'Độ minh bạch quy trình', value: '+40%' }
        ],
        cta: null,
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/projects/HRM.avif',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 's-men-femme',
        name: 'Bộ Ladipage S-men & S-femme',
         summary: 'Thiết kế bộ Ladipage tối ưu chuyển đổi cho sản phẩm chăm sóc cá nhân.',
        description:
            'Dự án tập trung thiết kế và triển khai bộ Ladipage bán hàng cho hai dòng sản phẩm S-men và S-femme. Mục tiêu chính là tối ưu trải nghiệm người dùng, truyền tải rõ lợi ích sản phẩm và tăng tỷ lệ chuyển đổi từ traffic quảng cáo.',
        details: [
            'Cung cấp bộ Ladipage bán hàng chuẩn cấu trúc chuyển đổi, tối ưu cho các chiến dịch Facebook Ads và social commerce.',
            'Thiết kế giao diện trực quan, phân tách rõ từng dòng sản phẩm S-men và S-femme, đảm bảo thông điệp nhất quán với định vị thương hiệu.',
            'Thiết lập đo lường GA4 và tối ưu bố cục nội dung theo nguyên tắc “xem nhanh – hiểu rõ – hành động ngay”.'
        ],
        date: '07/2025',
        category: 'Website & Landing Page',
        partner: 'S-femme x S-men',
        technologies: ['Ladipage', 'GA4', 'Figma'],
        metrics: [
            { label: 'Tỷ lệ chuyển đổi', value: '+21%' },
            { label: 'Chi phí/lead', value: '-18%' },
            { label: 'Tốc độ triển khai', value: 'Nhanh gọn' }
        ],
        cta: null,
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {
        id: 'qc-house',
        name: 'Website QC House',
        summary: 'Tối ưu phễu chuyển đổi và tăng trưởng doanh thu đa kênh.',
        description:
            'Dự án tập trung tối ưu trải nghiệm mua sắm, đồng bộ dữ liệu bán hàng và tự động hóa chiến dịch remarketing để tăng trưởng doanh thu bền vững. Chúng tôi tái cấu trúc lại toàn bộ hành trình khách hàng từ nhận biết → cân nhắc → mua hàng → tái mua, đảm bảo từng điểm chạm đều đo lường được và có chiến lược cải thiện rõ ràng. Đồng thời, dự án triển khai bộ chỉ số vận hành hàng tuần để đội ngũ kinh doanh và marketing cùng theo dõi và đưa ra quyết định theo dữ liệu thực.',
        details: [
            'Mục tiêu chính của dự án là tăng trưởng doanh thu trên các kênh website, social commerce và nền tảng sàn, đồng thời giảm chi phí cho mỗi đơn hàng. Đội ngũ triển khai bắt đầu bằng việc phân tích hành vi người dùng, đo lường điểm rơi đơn hàng và xây dựng lại các nhóm sản phẩm trọng tâm theo biên lợi nhuận.',
            'Chúng tôi xây dựng hệ thống tự động hóa gồm: nuôi dưỡng khách hàng tiềm năng qua email/SMS, kịch bản remarketing động dựa trên hành vi xem sản phẩm, và re-engagement cho nhóm khách hàng ngưng mua. Toàn bộ dữ liệu được đồng bộ về kho dữ liệu trung tâm để tạo báo cáo theo thời gian thực.',
            'Ngoài ra, dự án còn cải thiện tốc độ tải trang, tối ưu UI/UX theo nguyên tắc “less click – more clarity”, và triển khai A/B testing cho các điểm chốt đơn. Nhờ vậy, tỷ lệ chuyển đổi tăng ổn định trong 8 tuần liên tục.'
        ],
        date: '01/2026',
        category: 'Website & Landing Page',
        partner: 'QC House',
        technologies: ['Wordpress', 'GA4', 'Figma'],
        metrics: [
            { label: 'Tăng trưởng doanh thu', value: '+38%' },
            { label: 'Tỷ lệ chuyển đổi', value: '+21%' },
            { label: 'CPA', value: '-18%' }
        ],
        cta: {
            label: 'Xem chi tiết',
            url: 'https://qchouse.vn/'
        },
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {   
        id: 'timo',
        name: 'Website giới thiệu vải may Timo',
        summary: 'Thiết kế website giới thiệu thương hiệu và danh mục vải may Timo.',
        description:
            'Dự án tập trung xây dựng website giới thiệu thương hiệu vải may Timo, nhằm thể hiện rõ năng lực sản xuất, danh mục sản phẩm và định vị thương hiệu trong ngành dệt may. Website đóng vai trò kênh giới thiệu chính thức cho đối tác, xưởng may và khách hàng doanh nghiệp.',
        details: [
            'Thiết kế website giới thiệu thương hiệu, tập trung vào hình ảnh sản phẩm vải, thông tin chất liệu, ứng dụng và năng lực cung ứng.',
            'Xây dựng cấu trúc nội dung rõ ràng: giới thiệu thương hiệu, danh mục vải may, ứng dụng thực tế và thông tin liên hệ.',
            'Thiết kế giao diện trực quan, dễ xem trên cả desktop và mobile, hỗ trợ tốt cho hoạt động giới thiệu và tư vấn bán hàng.'
        ],
        date: '01/2025',
        category: 'Website & Landing Page',
        partner: 'timo',
        technologies: ['Ladipage', 'GA4', 'Figma'],
        metrics: [
            { label: 'Hình ảnh thương hiệu', value: 'Chuyên nghiệp hơn' },
            { label: 'Trải nghiệm người dùng', value: 'Tối ưu' },
            { label: 'Thời gian triển khai', value: 'Nhanh gọn' }
        ],
        cta: 'https://vaithethaotimo.com/',
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {   
        id: 'usobebe',
        name: 'Website E-commerce Usobebe',
        summary: 'Thiết kế và triển khai website thương mại điện tử cho thương hiệu Usobebe.',
        description:
            'Dự án tập trung xây dựng website e-commerce cho Usobebe nhằm phục vụ hoạt động bán hàng trực tuyến, giới thiệu sản phẩm và tối ưu trải nghiệm mua sắm trên đa thiết bị. Website được thiết kế hướng đến khả năng mở rộng, dễ quản trị và hỗ trợ tốt cho các chiến dịch marketing.',
        details: [
            'Thiết kế website thương mại điện tử với cấu trúc rõ ràng: trang sản phẩm, danh mục, chi tiết sản phẩm và luồng đặt hàng.',
            'Tối ưu giao diện mua sắm trên mobile và desktop, giúp người dùng dễ tìm sản phẩm và hoàn tất đơn hàng nhanh chóng.',
            'Thiết lập đo lường GA4 để theo dõi hành vi mua hàng, phục vụ tối ưu chuyển đổi và các chiến dịch marketing sau này.'
        ],
        date: '02/2025',
        category: 'Website & Landing Page',
        partner: 'usobebe',
        technologies: ['Ladipage', 'GA4', 'Figma'],
        metrics: [
            { label: 'Trải nghiệm mua sắm', value: 'Tối ưu' },
            { label: 'Khả năng quản trị', value: 'Dễ vận hành' },
            { label: 'Tốc độ triển khai', value: 'Nhanh gọn' }
        ],
        cta: 'https://usobebe.com/',
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {   
        id: 'nocti',
        name: 'Website E-commerce Nocti',
        summary: 'Thiết kế và triển khai website thương mại điện tử cho thương hiệu Nocti.',
        description:
            'Dự án tập trung xây dựng website e-commerce cho Nocti nhằm phục vụ hoạt động bán hàng trực tuyến, giới thiệu sản phẩm và phát triển kênh online bền vững. Website được thiết kế tối ưu trải nghiệm người dùng, hỗ trợ đầy đủ hành trình mua hàng từ xem sản phẩm đến đặt đơn.',
        details: [
            'Thiết kế website thương mại điện tử với cấu trúc đầy đủ: danh mục sản phẩm, trang chi tiết sản phẩm và luồng đặt hàng.',
            'Tối ưu giao diện mua sắm trên mobile và desktop, giúp khách hàng dễ dàng lựa chọn sản phẩm và hoàn tất thanh toán.',
            'Thiết lập đo lường GA4 để theo dõi hành vi người dùng, hỗ trợ tối ưu chuyển đổi và các chiến dịch marketing.'
        ],
        date: '03/2025',
        category: 'Website & Landing Page',
        partner: 'Nocti',
        technologies: ['Ladipage', 'GA4', 'Figma'],
        metrics: [
            { label: 'Trải nghiệm mua sắm', value: 'Tối ưu' },
            { label: 'Khả năng quản trị', value: 'Dễ vận hành' },
            { label: 'Tốc độ triển khai', value: 'Nhanh gọn' }
        ],
        cta: 'https://nocti.vn/',
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    {   
        id: 'emis',
        name: 'Website E-learning Emis English',
        summary: 'Thiết kế và triển khai website học tập tiếng Anh cho trẻ em.',
        description:
            'Dự án tập trung xây dựng website e-learning cho Emis English nhằm phục vụ nhu cầu học tiếng Anh của trẻ em. Hệ thống được thiết kế thân thiện với trẻ nhỏ, dễ sử dụng cho phụ huynh và hỗ trợ tốt cho hoạt động giảng dạy, học tập trực tuyến.',
        details: [
            'Thiết kế website học tập tiếng Anh cho bé với giao diện trực quan, màu sắc thân thiện và dễ thao tác.',
            'Xây dựng cấu trúc bài học, khóa học và nội dung học tập phù hợp với từng độ tuổi.',
            'Thiết lập đo lường GA4 để theo dõi hành vi học tập, hỗ trợ tối ưu trải nghiệm và cải thiện hiệu quả đào tạo.'
        ],
        date: '04/2025',
        category: 'Website & Landing Page',
        partner: 'Emis',
        technologies: ['Ladipage', 'GA4', 'Figma'],
        metrics: [
            { label: 'Trải nghiệm học tập', value: 'Thân thiện cho trẻ em' },
            { label: 'Khả năng quản trị', value: 'Dễ vận hành' },
            { label: 'Tốc độ triển khai', value: 'Nhanh gọn' }
        ],
        cta: null,
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
     {   
        id: 'safiman',
        name: 'Website E-learning Safiman',
         summary: 'Thiết kế và triển khai website thương mại điện tử cho thương hiệu Safiman.',
        description:
            'Dự án tập trung xây dựng website thương mại điện tử cho Safiman nhằm giới thiệu sản phẩm, hỗ trợ bán hàng trực tuyến và tối ưu trải nghiệm mua sắm trên đa thiết bị. Website được thiết kế hiện đại, dễ sử dụng và tối ưu cho các chiến dịch quảng cáo online.',
        details: [
            'Thiết kế website thương mại điện tử với giao diện trực quan, cấu trúc rõ ràng, tối ưu trải nghiệm mua sắm trên mobile và desktop.',
            'Xây dựng hệ thống trang sản phẩm, giỏ hàng và luồng đặt hàng đơn giản nhằm tăng tỷ lệ chuyển đổi.',
            'Thiết lập đo lường GA4 để theo dõi hành vi người dùng, phục vụ tối ưu nội dung và hiệu quả kinh doanh.'
        ],
        date: '10/2025',
        category: 'Website & Landing Page',
        partner: 'Safiman',
        technologies: ['Ladipage', 'GA4', 'Figma'],
        metrics: [
            { label: 'Trải nghiệm mua sắm', value: 'Mượt mà' },
            { label: 'Tỷ lệ chuyển đổi', value: '+21%' },
            { label: 'Tốc độ triển khai', value: 'Nhanh gọn' }
        ],
        cta: 'https://safiman.vercel.app/',
        videoUrl: '/assets/images/website&landingpage/video.mp4',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
     {   
        id: 'evenhub',
        name: 'Website giới thiệu doanh nghiệp EvenHub',
        summary: 'Thiết kế website giới thiệu doanh nghiệp với định vị rõ ràng, hiện đại và chuyên nghiệp.',
        description:
            'Dự án tập trung thiết kế và triển khai website giới thiệu doanh nghiệp EvenHub, nhằm truyền tải rõ năng lực, dịch vụ và giá trị cốt lõi của thương hiệu. Website được xây dựng theo hướng tối ưu trải nghiệm người dùng, tăng độ tin cậy và hỗ trợ hiệu quả cho các hoạt động marketing – bán hàng.',
        details: [
            'Xây dựng cấu trúc website giới thiệu doanh nghiệp rõ ràng: Giới thiệu – Dịch vụ – Dự án – Đối tác – Liên hệ.',
            'Thiết kế giao diện hiện đại, đồng bộ nhận diện thương hiệu, phù hợp với định vị doanh nghiệp.',
            'Tối ưu trải nghiệm người dùng và tốc độ tải trang, hỗ trợ tốt cho SEO và chiến dịch quảng bá thương hiệu.'
        ],
        date: '04/2025',
        category: 'Website & Landing Page',
        partner: 'EvenHub',
        technologies: ['Ladipage', 'GA4', 'Figma'],
        metrics: [
            { label: 'Độ tin cậy thương hiệu', value: 'Tăng mạnh' },
            { label: 'Trải nghiệm người dùng', value: 'Tối ưu' },
            { label: 'Tốc độ triển khai', value: 'Nhanh gọn' }
        ],
        cta: null,
        videoUrl: 'https://eventhub.vn/',
        slides: [
            '/assets/images/test.webp',
            '/assets/images/website&landingpage/beautysummit.webp',
            '/assets/images/website&landingpage/katskin.webp',
            '/assets/images/website&landingpage/woodplus.webp',
        ]
    },
    //{
    //     id: 'qc-house',
    //     name: 'Website QC House',
    //     summary: 'Tối ưu phễu chuyển đổi và tăng trưởng doanh thu đa kênh.',
    //     description:
    //         'Dự án tập trung tối ưu trải nghiệm mua sắm, đồng bộ dữ liệu bán hàng và tự động hóa chiến dịch remarketing để tăng trưởng doanh thu bền vững. Chúng tôi tái cấu trúc lại toàn bộ hành trình khách hàng từ nhận biết → cân nhắc → mua hàng → tái mua, đảm bảo từng điểm chạm đều đo lường được và có chiến lược cải thiện rõ ràng. Đồng thời, dự án triển khai bộ chỉ số vận hành hàng tuần để đội ngũ kinh doanh và marketing cùng theo dõi và đưa ra quyết định theo dữ liệu thực.',
    //     details: [
    //         'Mục tiêu chính của dự án là tăng trưởng doanh thu trên các kênh website, social commerce và nền tảng sàn, đồng thời giảm chi phí cho mỗi đơn hàng. Đội ngũ triển khai bắt đầu bằng việc phân tích hành vi người dùng, đo lường điểm rơi đơn hàng và xây dựng lại các nhóm sản phẩm trọng tâm theo biên lợi nhuận.',
    //         'Chúng tôi xây dựng hệ thống tự động hóa gồm: nuôi dưỡng khách hàng tiềm năng qua email/SMS, kịch bản remarketing động dựa trên hành vi xem sản phẩm, và re-engagement cho nhóm khách hàng ngưng mua. Toàn bộ dữ liệu được đồng bộ về kho dữ liệu trung tâm để tạo báo cáo theo thời gian thực.',
    //         'Ngoài ra, dự án còn cải thiện tốc độ tải trang, tối ưu UI/UX theo nguyên tắc “less click – more clarity”, và triển khai A/B testing cho các điểm chốt đơn. Nhờ vậy, tỷ lệ chuyển đổi tăng ổn định trong 8 tuần liên tục.'
    //     ],
    //     date: '01/2026',
    //     category: 'Website & Landing Page',
    //     partner: 'QC House',
    //     technologies: ['Wordpress', 'GA4', 'Figma'],
    //     metrics: [
    //         { label: 'Tăng trưởng doanh thu', value: '+38%' },
    //         { label: 'Tỷ lệ chuyển đổi', value: '+21%' },
    //         { label: 'CPA', value: '-18%' }
    //     ],
    //     cta: {
    //         label: 'Xem chi tiết',
    //         url: 'https://qchouse.vn/'
    //     },
    //     videoUrl: '/assets/images/website&landingpage/video.mp4',
    //     slides: [
    //         '/assets/images/website&landingpage/beautysummit.webp',
    //         '/assets/images/website&landingpage/katskin.webp',
    //         '/assets/images/website&landingpage/woodplus.webp',
    //     ]
    // },
    // {
    //     id: 'topmus',
    //     name: 'Website Topmus',
    //     summary: 'Tối ưu phễu chuyển đổi và tăng trưởng doanh thu đa kênh.',
    //     description:
    //         'Dự án tập trung tối ưu trải nghiệm mua sắm, đồng bộ dữ liệu bán hàng và tự động hóa chiến dịch remarketing để tăng trưởng doanh thu bền vững. Chúng tôi tái cấu trúc lại toàn bộ hành trình khách hàng từ nhận biết → cân nhắc → mua hàng → tái mua, đảm bảo từng điểm chạm đều đo lường được và có chiến lược cải thiện rõ ràng. Đồng thời, dự án triển khai bộ chỉ số vận hành hàng tuần để đội ngũ kinh doanh và marketing cùng theo dõi và đưa ra quyết định theo dữ liệu thực.',
    //     details: [
    //         'Mục tiêu chính của dự án là tăng trưởng doanh thu trên các kênh website, social commerce và nền tảng sàn, đồng thời giảm chi phí cho mỗi đơn hàng. Đội ngũ triển khai bắt đầu bằng việc phân tích hành vi người dùng, đo lường điểm rơi đơn hàng và xây dựng lại các nhóm sản phẩm trọng tâm theo biên lợi nhuận.',
    //         'Chúng tôi xây dựng hệ thống tự động hóa gồm: nuôi dưỡng khách hàng tiềm năng qua email/SMS, kịch bản remarketing động dựa trên hành vi xem sản phẩm, và re-engagement cho nhóm khách hàng ngưng mua. Toàn bộ dữ liệu được đồng bộ về kho dữ liệu trung tâm để tạo báo cáo theo thời gian thực.',
    //         'Ngoài ra, dự án còn cải thiện tốc độ tải trang, tối ưu UI/UX theo nguyên tắc “less click – more clarity”, và triển khai A/B testing cho các điểm chốt đơn. Nhờ vậy, tỷ lệ chuyển đổi tăng ổn định trong 8 tuần liên tục.'
    //     ],
    //     date: '01/2026',
    //     category: 'Website & Landing Page',
    //     partner: 'Topmus',
    //     technologies: ['Wordpress', 'GA4', 'Figma'],
    //     metrics: [
    //         { label: 'Tăng trưởng doanh thu', value: '+38%' },
    //         { label: 'Tỷ lệ chuyển đổi', value: '+21%' },
    //         { label: 'CPA', value: '-18%' }
    //     ],
    //     cta: {
    //         label: 'Xem chi tiết',
    //         url: 'https://topmus.vn/'
    //     },
    //     videoUrl: '/assets/images/website&landingpage/video.mp4',
    //     slides: [
    //         '/assets/images/website&landingpage/beautysummit.webp',
    //         '/assets/images/website&landingpage/katskin.webp',
    //         '/assets/images/website&landingpage/woodplus.webp',
    //     ]
    //},
];

export const getProjectById = (projectId) =>
    projectsData.find((project) => project.id === projectId);

export const getProjectCategories = (project) => {
    if (!project) {
        return [];
    }

    if (Array.isArray(project.category)) {
        return project.category.filter(Boolean);
    }

    return project.category ? [project.category] : [];
};

export const getProjectFilters = () => {
    const categories = Array.from(
        new Set(projectsData.flatMap((project) => getProjectCategories(project)))
    );
    const technologies = Array.from(
        new Set(projectsData.flatMap((project) => project.technologies))
    );

    return { categories, technologies };
};
