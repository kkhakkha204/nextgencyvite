import React from 'react';

const TiktokVerification = () => {
    const verificationContent = "tiktok-developers-site-verification=yEW14lKVkzHE6VUNKeMRqq0jIRUzzZgw";

    const handleDownload = () => {
        const blob = new Blob([verificationContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'tiktokyEW14lKVkzHE6VUNKeMRqq0jIRUzzZgw.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    TikTok Verification
                </h1>
                <div className="bg-gray-100 rounded p-4 font-mono text-sm break-all mb-4">
                    {verificationContent}
                </div>
                <button
                    onClick={handleDownload}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                    Tải file xuống
                </button>
            </div>
        </div>
    );
};

export default TiktokVerification;