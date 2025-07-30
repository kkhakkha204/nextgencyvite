import React, { useState, useEffect } from 'react';
import { X, Star, CheckCircle, Target, ArrowUpRight } from 'lucide-react';

// Modal Component
export function ConsultationPopup({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        customer_name: '',
        phone: '',
        email: '',
        business_field: '',
        brand_name: '',
        consultation_request: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const submitToNocoDB = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('https://app.nocodb.com/api/v1/db/data/noco/p1h73flcstce9m1/mcmtabc82hqralp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'xc-token': '3ASD4G6g30fXFnlsEL1nf1NdGN2tcIoljay8d08T' // Lấy từ NocoDB dashboard
                },
                body: JSON.stringify({
                    customer_name: formData.customer_name,
                    phone: formData.phone,
                    email: formData.email,
                    business_field: formData.business_field,
                    brand_name: formData.brand_name,
                    consultation_request: formData.consultation_request,
                    created_at: new Date().toISOString(),
                    status: 'New',
                    source: 'Header CTA'
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    customer_name: '',
                    phone: '',
                    email: '',
                    business_field: '',
                    brand_name: '',
                    consultation_request: ''
                });

                // Auto close after success
                setTimeout(() => {
                    onClose();
                    setSubmitStatus(null);
                }, 2000);
            } else {
                throw new Error('Failed to submit');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md animate-in fade-in duration-300" />

            {/* Modal */}
            <div className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto bg-gradient-to-br from-[#2B144D] via-black to-black rounded-2xl border border-white/10 shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                    <X className="w-5 h-5 text-white" />
                </button>

                <div className="p-6 lg:p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-2">
                            <span className="text-[#c59efe] rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">Tư vấn miễn phí</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                            Hợp tác cùng <span className="bg-gradient-to-r from-[#c59efe] to-[#1a4498] bg-clip-text text-transparent">Nextgency</span>
                        </h2>
                        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
                            Điền thông tin bên dưới để nhận tư vấn từ đội ngũ chuyên gia của chúng tôi.
                            Chúng tôi sẽ liên hệ trong vòng 24h làm việc.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Left Side - Benefits */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                                <div className="w-12 h-12 bg-[#c59efe] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Star className="w-6 h-6 text-white" fill="currentColor" />
                                </div>
                                <div>
                                    <h3 className="text-white text-sm font-semibold">Tư vấn miễn phí</h3>
                                    <p className="text-gray-400 text-xs">Chuyên gia hàng đầu trong ngành</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                                <div className="w-12 h-12 bg-[#c59efe] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white text-sm font-semibold">Phản hồi trong 24h</h3>
                                    <p className="text-gray-400 text-xs">Cam kết thời gian phản hồi nhanh chóng</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                                <div className="w-12 h-12 bg-[#c59efe] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white text-sm font-semibold">Giải pháp tùy chỉnh</h3>
                                    <p className="text-gray-400 text-xs">Phù hợp với từng doanh nghiệp</p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="bg-gradient-to-r from-[#c59efe]/20 to-[#1a4498]/20 p-4 rounded-xl border border-white/10">
                                <div className="flex justify-between items-center">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">500+</div>
                                        <div className="text-xs text-gray-400">Khách hàng</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">98%</div>
                                        <div className="text-xs text-gray-400">Hài lòng</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">24h</div>
                                        <div className="text-xs text-gray-400">Phản hồi</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="lg:col-span-3">
                            <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6">
                                {/* Success/Error Messages */}
                                {submitStatus && (
                                    <div className={`mb-6 p-4 rounded-lg border ${
                                        submitStatus === 'success'
                                            ? 'bg-green-500/10 border-green-500/30 text-green-200'
                                            : 'bg-red-500/10 border-red-500/30 text-red-200'
                                    }`}>
                                        {submitStatus === 'success'
                                            ? '✅ Thành công! Chúng tôi sẽ liên hệ trong vòng 24h.'
                                            : '❌ Có lỗi xảy ra, vui lòng thử lại sau.'
                                        }
                                    </div>
                                )}

                                <form onSubmit={submitToNocoDB} className="space-y-4">
                                    {/* Tên khách hàng */}
                                    <div className="space-y-2">
                                        <label className="block text-white text-sm font-medium">
                                            Tên khách hàng *
                                        </label>
                                        <input
                                            type="text"
                                            name="customer_name"
                                            value={formData.customer_name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-lg text-black text-sm placeholder-gray-500 transition-all duration-300 focus:border-[#c59efe] focus:bg-white focus:ring-2 focus:ring-[#c59efe]/20"
                                            placeholder="Nhập tên của bạn"
                                            required
                                        />
                                    </div>

                                    {/* Phone and Email */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="block text-white text-sm font-medium">
                                                Số điện thoại *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-lg text-black text-sm placeholder-gray-500 transition-all duration-300 focus:border-[#c59efe] focus:bg-white focus:ring-2 focus:ring-[#c59efe]/20"
                                                placeholder="Nhập số điện thoại"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-white text-sm font-medium">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-lg text-black text-sm placeholder-gray-500 transition-all duration-300 focus:border-[#c59efe] focus:bg-white focus:ring-2 focus:ring-[#c59efe]/20"
                                                placeholder="example@gmail.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Business Field and Brand */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="block text-white text-sm font-medium">
                                                Lĩnh vực kinh doanh *
                                            </label>
                                            <input
                                                type="text"
                                                name="business_field"
                                                value={formData.business_field}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-lg text-black text-sm placeholder-gray-500 transition-all duration-300 focus:border-[#c59efe] focus:bg-white focus:ring-2 focus:ring-[#c59efe]/20"
                                                placeholder="VD: E-commerce, F&B, Tech..."
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-white text-sm font-medium">
                                                Tên thương hiệu
                                            </label>
                                            <input
                                                type="text"
                                                name="brand_name"
                                                value={formData.brand_name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-lg text-black text-sm placeholder-gray-500 transition-all duration-300 focus:border-[#c59efe] focus:bg-white focus:ring-2 focus:ring-[#c59efe]/20"
                                                placeholder="Tên thương hiệu (nếu có)"
                                            />
                                        </div>
                                    </div>

                                    {/* Consultation Request */}
                                    <div className="space-y-2">
                                        <label className="block text-white text-sm font-medium">
                                            Yêu cầu tư vấn *
                                        </label>
                                        <textarea
                                            rows="4"
                                            name="consultation_request"
                                            value={formData.consultation_request}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-lg text-black text-sm placeholder-gray-500 transition-all duration-300 focus:border-[#c59efe] focus:bg-white focus:ring-2 focus:ring-[#c59efe]/20 resize-none"
                                            placeholder="Mô tả chi tiết yêu cầu tư vấn của bạn..."
                                            required
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full group relative flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#1a4498] via-[#c08dfe] to-[#1a4498] text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none animate-gradient-shift"
                                            style={{ backgroundSize: '200% 200%' }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    <span>Đang gửi...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Gửi thông tin hợp tác</span>
                                                    <ArrowUpRight className="w-4 h-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
