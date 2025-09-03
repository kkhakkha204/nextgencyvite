import React from 'react';
import { ChevronRight } from 'lucide-react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-[60px] lg:py-[120px]">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-6 lg:px-8">
                {/* Container A - Logo */}
                <div className="mb-12">
                    <img
                        src="/assets/images/footer/footerlogo.png"
                        alt="Nextgency Logo"
                        className=" h-8 lg:h-7 w-auto object-contain"
                    />
                </div>

                {/* Container B - Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-12">
                    {/* Column A - Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-[16px] font-medium text-white mb-2">
                            AI - Marketing Automation Agency
                        </h3>
                        <div className="space-y-3">
                            <div className="text-[14px] text-gray-200">
                                <span className="font-medium">Hotline:</span>
                                <div className="text-gray-300">033 208 3366</div>
                            </div>
                            <div className="text-[14px] text-gray-200">
                                <span className="font-medium">Email:</span>
                                <div className="text-gray-300">contact@nextgency.vn</div>
                            </div>
                            <div className="text-[14px] text-gray-200">
                                <span className="font-medium">Website:</span>
                                <div className="text-gray-300">nextgency.vn</div>
                            </div>
                            <div className="text-[14px] text-gray-200">
                                <span className="font-medium">Address:</span>
                                <div className="text-gray-300">2/11 Vương Thừa Vũ, Thanh Xuân, Hà Nội</div>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-5 pt-4">
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img
                                    src="/assets/images/footer/zalo.png"
                                    alt="Facebook"
                                    className="w-8 h-8 object-contain"
                                />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img
                                    src="/assets/images/footer/facebook.png"
                                    alt="Instagram"
                                    className="w-8 h-8 object-contain"
                                />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img
                                    src="/assets/images/footer/mess.png"
                                    alt="LinkedIn"
                                    className="w-8 h-8 object-contain"
                                />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img
                                    src="/assets/images/footer/lark.png"
                                    alt="Twitter"
                                    className="w-9 h-9 object-contain"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Column B - Services */}
                    <div className="space-y-4">
                        <h3 className="text-[16px] font-medium text-white mb-2">
                            Dịch vụ của chúng tôi
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <Link to="/facebook-ads" className="hover:text-white">Dịch vụ Facebook Ads</Link>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">Dịch vụ Google Ads</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">Dịch vụ Tiktok Ads</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">Dịch vụ Tick Xanh Facebook</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">Phòng Marketing thuê ngoài</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">Xây dựng Website & Landing page</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">Automation - AI - Data</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">Facebook Dataset & CRM</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column C - Company */}
                    <div className="space-y-4">
                        <h3 className="text-[16px] font-medium text-white mb-2">
                            Chính sách & quy định chung
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">Chính sách & quy định chung</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">Chính sách bảo hành</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">Chính sách bảo mật thông tin</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">Chính sách bàn giao </a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">Quy định về thanh toán</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column D - Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-[16px] font-medium text-white mb-2">
                            Đăng ký nhận thông tin
                        </h3>
                        <p className="text-[14px] text-gray-200 mb-2">
                            Đăng ký để nhận thông tin mới nhất về dịch vụ và xu hướng công nghệ từ Nextgency.
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="w-full px-3 py-2.5 bg-gray-900 border border-gray-700 rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:border-[#c59efe] focus:ring-1 focus:ring-[#c59efe] transition-colors"
                            />
                            <button className="w-full px-3 py-2.5 bg-white text-black font-medium rounded-3xl hover:bg-purple-400 transition-all transform hover:scale-105">
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>

                {/* Container C - Copyright */}
                <div className="pt-8 text-center">
                    <p className="text-[13px] lg:text-[14px] text-gray-300">
                        © Bản quyền thuộc về & cung cấp bởi{'  '}
                        <span className=" text-gray-300">Nextgency</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;