import React from 'react';
import SectionHeading from './SectionHeading.jsx';

const Strong = ({children}) => <strong className="font-semibold text-[#0b0e18]">{children}</strong>;

const ProblemSection = () => (
    <section className="bg-[#f6f8fc] px-5 py-16 sm:px-8 lg:px-14 lg:py-[110px]">
        <div className="mx-auto max-w-[900px]">
            <SectionHeading
                eyebrow="Phần 01 · Nhìn thẳng"
                title="Doanh nghiệp của anh/chị không thiếu năng lực — thiếu một dòng khách đều"
            />

            <div className="mt-7 flex flex-col gap-5 text-[15px] leading-[1.75] text-[#3a4256] lg:text-[16.5px]">
                <p>
                    Phần lớn doanh nghiệp Sơn gặp không hề yếu về sản phẩm hay dịch vụ. Món đồ tốt, tay nghề chắc, khách
                    đã mua thì phần nhiều quay lại. Cái làm anh/chị mất ngủ không phải chất lượng — mà là{' '}
                    <Strong>dòng khách lúc có lúc không</Strong>: tháng này đơn về ào ào nhờ một bài viral hay một mối
                    giới thiệu, tháng sau im ắng và không ai biết vì sao. Tăng trưởng đang phụ thuộc vào may rủi và các
                    mối quan hệ cũ, chứ chưa phải một cỗ máy chạy đều mỗi ngày.
                </p>
                <p>
                    Và điều khó chịu nhất là: anh/chị biết mình đang chậm lại, nhưng{' '}
                    <Strong>không chắc đang nghẽn ở đâu</Strong>. Thiếu người biết tới mình — nghẽn ở đầu phễu? Người ta
                    vào web xong bỏ đi — nghẽn ở chuyển đổi? Khách nhắn mà đội phản hồi chậm — nghẽn ở khâu chốt? Hay
                    hàng nghìn khách cũ nằm im trong data — nghẽn ở khâu giữ khách? Bốn chỗ nghẽn này trông từ ngoài
                    giống hệt nhau: doanh thu không lên. Nhưng cách chữa từng chỗ khác nhau hoàn toàn.
                </p>
                <p>
                    Chính vì không định vị được đúng chỗ nghẽn, nhiều anh/chị tiêu tiền sai chỗ mà không hay: đổ ngân
                    sách chạy thêm quảng cáo kéo traffic, trong khi vấn đề thật nằm ở cái web không giữ chân được người
                    vào. Hoặc thuê thêm sale để chốt, trong khi cái thiếu là nguồn lead đổ vào để có mà chốt. Tiền vẫn
                    tiêu đều, mà cây kim doanh thu không nhúc nhích.
                </p>
            </div>

            <div className="mt-8 border-l-[3px] border-[#2e7bdf] py-1.5 pl-6">
                <p className="font-archivo text-[18px] font-medium leading-[1.45] text-[#0b0e18] lg:text-[23px]">
                    Đa số doanh nghiệp không thua vì làm ít. Họ thua vì làm nhiều thứ cùng lúc, dàn mỏng tiền vào chỗ
                    không phải điểm nghẽn thật.
                </p>
            </div>
        </div>
    </section>
);

export default ProblemSection;
