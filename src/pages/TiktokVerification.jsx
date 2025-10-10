import React from 'react';
import { Helmet } from 'react-helmet';

const TiktokVerification = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    TikTok Verification
                </h1>
                <div className="bg-gray-100 rounded p-4 font-mono text-sm break-all">
                    tiktok-developers-site-verification=yEW14lKVkzHE6VUNKeMRqq0jIRUzzZgw
                </div>
            </div>
        </div>
    );
};

export default TiktokVerification;