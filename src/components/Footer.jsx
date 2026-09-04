import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link, useI18n } from "../i18n";

const Footer = () => {
    const { t } = useI18n();

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
                            {t('footer.tagline')}
                        </h3>
                        <div className="space-y-3">
                            <div className="text-[14px] text-gray-200">
                                <span className="font-medium">{t('common.hotline')}:</span>
                                <div className="text-gray-300">033 208 3366</div>
                            </div>
                            <div className="text-[14px] text-gray-200">
                                <span className="font-medium">{t('common.email')}:</span>
                                <div className="text-gray-300">contact@nextgency.vn</div>
                            </div>
                            <div className="text-[14px] text-gray-200">
                                <span className="font-medium">{t('common.website')}:</span>
                                <div className="text-gray-300">nextgency.vn</div>
                            </div>
                            <div className="text-[14px] text-gray-200">
                                <span className="font-medium">{t('common.address')}:</span>
                                <div className="text-gray-300">{t('common.addressValue')}</div>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-5 pt-4">
                            <a href="https://zalo.me/0332083366/" target='_blank' className="hover:opacity-80 transition-opacity">
                                <img
                                    src="/assets/images/footer/zalo.png"
                                    alt="Facebook"
                                    className="w-8 h-8 object-contain"
                                />
                            </a>
                            <a href="https://www.facebook.com/nextgency" target='_blank' className="hover:opacity-80 transition-opacity">
                                <img
                                    src="/assets/images/footer/facebook.png"
                                    alt="Instagram"
                                    className="w-8 h-8 object-contain"
                                />
                            </a>
                            <a href="https://www.facebook.com/messages/t/433874169812586" target='_blank' className="hover:opacity-80 transition-opacity">
                                <img
                                    src="/assets/images/footer/mess.png"
                                    alt="LinkedIn"
                                    className="w-8 h-8 object-contain"
                                />
                            </a>
                            <a href="https://www.larksuite.com/invitation/page/add_contact/?token=c0cse138-9bd8-449a-a1ac-b3e820id0bta&amp;unique_id=gw0tfw_lYqsWQPKEUKwm4A==" target='_blank' className="hover:opacity-80 transition-opacity">
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
                            {t('footer.servicesTitle')}
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <Link to="/services/facebook-ads" className="hover:text-white">{t('footer.services.facebookAds')}</Link>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">{t('footer.services.googleAds')}</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">{t('footer.services.tiktokAds')}</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">{t('footer.services.tickXanh')}</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">{t('footer.services.marketingOutsource')}</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">{t('footer.services.websiteLanding')}</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">{t('footer.services.aiData')}</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">{t('footer.services.facebookCrm')}</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column C - Company */}
                    <div className="space-y-4">
                        <h3 className="text-[16px] font-medium text-white mb-2">
                            {t('footer.policiesTitle')}
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">{t('footer.policies.general')}</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">{t('footer.policies.warranty')}</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <Link to="/chinh-sach-bao-mat" className="hover:text-white">{t('footer.policies.privacy')}</Link>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">{t('footer.policies.handover')}</a>
                            </li>
                            <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#c59efe]" />
                                <a href="#" className="hover:text-white">{t('footer.policies.payment')}</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column D - Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-[16px] font-medium text-white mb-2">
                            {t('footer.newsletterTitle')}
                        </h3>
                        <p className="text-[14px] text-gray-200 mb-2">
                            {t('footer.newsletterDescription')}
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder={t('footer.newsletterPlaceholder')}
                                className="w-full px-3 py-2.5 bg-gray-900 border border-gray-700 rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:border-[#c59efe] focus:ring-1 focus:ring-[#c59efe] transition-colors"
                            />
                            <button className="w-full px-3 py-2.5 bg-white text-black font-medium rounded-3xl hover:bg-purple-400 transition-all transform hover:scale-105">
                                {t('footer.newsletterButton')}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Container C - Copyright */}
                <div className="pt-8 text-center">
                    <p className="text-[13px] lg:text-[14px] text-gray-300">
                        {t('footer.copyright')}{'  '}
                        <span className=" text-gray-300">Nextgency</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
