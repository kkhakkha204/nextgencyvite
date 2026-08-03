// Nguồn dữ liệu duy nhất cho trang /dat-lich (Growth Call).
// Sửa nội dung, số tài khoản hay mức cọc ở đây - mọi section tự cập nhật theo.

export const CONSULTANT = {
    name: 'Ngô Hồng Sơn',
    role: 'Growth Manager · Nextgency',
    // Thả ảnh chân dung vào đúng đường dẫn này; chưa có file thì tự rơi về ô chữ cái đầu.
    avatar: '/assets/images/chauson.webp',
    initials: 'NS',
    bio: 'Người vận hành cỗ máy tăng trưởng của Nextgency — quảng cáo performance đo được từng đồng, website chuyển đổi, branding, social content và hệ thống AI tự động hoá — cho những doanh nghiệp không ngừng tiến về phía trước.',
    quote: '"30 phút không đủ để giải xong bài toán tăng trưởng của anh/chị. Nhưng đủ để chỉ đúng chỗ đang nghẽn — và đồng tiền tiếp theo nên tiêu vào đâu trước."'
};

export const HOTLINE = {
    display: '0332 083 366',
    tel: '0332083366'
};

export const DEPOSIT = 100000;

export const BANK = {
    name: 'MBBANK',
    account: '0332083366',
    holder: 'NGO HONG SON'
};

/** 100000 -> "100.000đ" */
export const formatVnd = (amount) => `${amount.toLocaleString('vi-VN')}đ`;

/** 100000 -> "100k" */
export const shortVnd = (amount) => `${Math.round(amount / 1000)}k`;

export const DEPOSIT_FULL = formatVnd(DEPOSIT);
export const DEPOSIT_SHORT = shortVnd(DEPOSIT);

/** QR VietQR đã điền sẵn số tiền và nội dung chuyển khoản. */
export const buildQrUrl = (phone = '') => {
    const account = BANK.account.replace(/\s/g, '');
    const rawBank = BANK.name.toUpperCase().replace(/\s/g, '');
    const bankCode = rawBank.indexOf('MB') === 0 ? 'MB' : rawBank;
    const addInfo = encodeURIComponent(`DATCOC ${phone.trim()}`.trim());
    return `https://img.vietqr.io/image/${bankCode}-${account}-qr_only.png?amount=${DEPOSIT}&addInfo=${addInfo}&accountName=${encodeURIComponent(BANK.holder)}`;
};

export const buildBankRows = (phone = '') => [
    {label: 'Ngân hàng', value: BANK.name},
    {label: 'Số tài khoản', value: BANK.account},
    {label: 'Chủ tài khoản', value: BANK.holder},
    {label: 'Nội dung CK', value: `DATCOC ${phone.trim() || '+ SĐT của anh/chị'}`},
    {label: 'Cọc giữ chỗ', value: DEPOSIT_FULL}
];

/** Khung giờ 30 phút mở đặt trong ngày. */
export const SLOT_TIMES = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '14:00',
    '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
];

export const BOOKING_STEPS = [
    {
        n: '01',
        title: 'Chọn khung giờ & để lại thông tin',
        body: 'Pick ngày và một khung 30 phút anh/chị rảnh. Sơn xác nhận lại khung giờ khi gọi.'
    },
    {
        n: '02',
        title: `Cọc giữ chỗ ${DEPOSIT_FULL} — hoàn bất kỳ lúc nào`,
        body: 'Giữ đúng khung giờ của anh/chị. Đổi ý lúc nào cũng hoàn đủ, không cần lý do — kể cả đang trong cuộc gọi.'
    },
    {
        n: '03',
        title: `30 phút 1-1 với ${CONSULTANT.name}`,
        body: 'Soi kênh đang chạy, chỉ đúng điểm nghẽn tăng trưởng, vạch một đường ưu tiên nên đầu tư trước.'
    }
];

export const GROWTH_SERVICES = [
    {
        icon: 'target',
        tag: 'Đo được từng đồng',
        title: 'Quảng cáo performance',
        body: 'Chạy ads đo được từng đồng ra lead thật, không đốt tiền lấy tương tác ảo. Kênh nào không chứng minh được ra tiền — cắt.'
    },
    {
        icon: 'monitor-smartphone',
        tag: 'Giữ chân người vào',
        title: 'Website chuyển đổi',
        body: 'Web không chỉ để đẹp — nó phải biến người ghé thăm thành người để lại số. Sửa đúng chỗ này, cùng lượng traffic mà lead tăng rõ rệt.'
    },
    {
        icon: 'bot',
        tag: 'Trực 24/7 không nghỉ',
        title: 'AI & Automation',
        body: 'Bắt khách ngoài giờ, tư vấn hàng trăm cuộc cùng lúc, đánh thức tệp khách cũ nằm im — làm những việc trước đây thuê người không nổi.'
    },
    {
        icon: 'gem',
        tag: 'Một bộ mặt nhất quán',
        title: 'Branding',
        body: 'Thương hiệu rõ ràng làm mọi kênh phía sau rẻ hơn: ads dễ tin hơn, web dễ chốt hơn, khách cũ dễ quay lại hơn.'
    },
    {
        icon: 'megaphone',
        tag: 'Phủ đúng kênh',
        title: 'Social content',
        body: 'Nội dung ra đều, đúng tệp, nuôi người theo dõi thành người mua — thay vì viral một lần rồi im ắng cả quý.'
    }
];

export const CALL_AGENDA = [
    {
        n: '01',
        title: 'Đọc kênh đang có',
        body: 'Trước cuộc gọi Sơn đã xem website, kênh chạy ads, cách anh/chị đang lấy khách — để vào cuộc là nói chuyện của mình, không hỏi lại từ đầu.'
    },
    {
        n: '02',
        title: 'Chỉ đúng điểm nghẽn thật',
        body: 'Phần giá trị nhất: rất nhiều chủ doanh nghiệp tưởng mình thiếu traffic, nhưng ngồi soi ra mới thấy traffic đủ, tiền đang rơi ở khâu web không giữ khách hoặc đội chốt phản hồi chậm. Định vị đúng một chỗ nghẽn thôi là đã đáng cả buổi.'
    },
    {
        n: '03',
        title: 'Vạch một đường ưu tiên',
        body: 'Không phải danh sách mười việc phải làm cho hoảng, mà là đồng tiền tiếp theo nên tiêu vào đâu trước để ra kết quả nhanh và đo được nhất.'
    }
];

export const REFUND_MOMENTS = [
    {
        icon: 'calendar-x',
        title: 'Trước cuộc gọi',
        body: `Anh/chị đổi ý, bận đột xuất, cân nhắc lại, hay không vì lý do gì cả — chỉ cần nhắn một câu, Nextgency hoàn đủ ${DEPOSIT_FULL} trong 24 giờ. Không hỏi ngược, không giữ chân, không một đồng phí hủy.`
    },
    {
        icon: 'phone-off',
        title: 'Đang giữa cuộc gọi',
        body: 'Cuộc gọi đã bắt đầu, nghe được mười phút, hai mươi phút, anh/chị thấy Sơn nói chưa trúng bài toán của mình — cứ nói thẳng và dừng lại ngay lúc đó. Khoản cọc hoàn về đủ, không cần ngồi cho hết buổi vì lịch sự.'
    },
    {
        icon: 'history',
        title: 'Kể cả khi đã xong',
        body: 'Anh/chị đã ngồi trọn 30 phút, nghe hết mọi thứ, rồi về nghĩ lại thấy chưa phải lúc — vẫn nhắn một câu là được hoàn đủ. Đã dự buổi tư vấn không có nghĩa là đã "dùng" mất khoản cọc; buổi đó miễn phí ngay từ đầu.'
    }
];
