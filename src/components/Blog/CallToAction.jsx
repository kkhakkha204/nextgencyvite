// src/components/Blog/CallToAction.jsx
import React from 'react';

const CallToAction = ({ value }) => {
    const getButtonStyles = (style) => {
        const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:transform hover:scale-105";

        switch (style) {
            case 'primary':
                return `${baseStyles} bg-blue-600 text-white hover:bg-blue-700 shadow-lg`;
            case 'secondary':
                return `${baseStyles} bg-gray-600 text-white hover:bg-gray-700 shadow-lg`;
            case 'outline':
                return `${baseStyles} border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white`;
            default:
                return `${baseStyles} bg-blue-600 text-white hover:bg-blue-700 shadow-lg`;
        }
    };

    return (
        <div className="my-8 text-center">
            <a
                href={value.url}
                className={getButtonStyles(value.style)}
                target={value.url.startsWith('http') ? '_blank' : '_self'}
                rel={value.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
                {value.text}
            </a>
        </div>
    );
};

export default CallToAction;