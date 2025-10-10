import React from 'react';

const TiktokVerification = () => {
    const verificationContent = "tiktok-developers-site-verification=iEpUN2SvEQ4iCx5HJeKfeVARszrGqF0z";
    const fileName = "tiktokiEpUN2SvEQ4iCx5HJeKfeVARszrGqF0z.txt";

    const handleDownload = () => {
        const blob = new Blob([verificationContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
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

                <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded">
                    <p className="text-sm text-gray-700">
                        <strong>Hướng dẫn:</strong> Tải file xuống và upload lên đường dẫn:<br/>
                        <code className="bg-white px-2 py-1 rounded text-xs">
                            https://nextgency.vn/tiktok-verification/
                        </code>
                    </p>
                </div>

                <button
                    onClick={handleDownload}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                    ⬇ Tải file {fileName}
                </button>
            </div>
        </div>
    );
};

export default TiktokVerification;