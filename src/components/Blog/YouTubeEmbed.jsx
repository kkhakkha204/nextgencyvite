// src/components/Blog/YouTubeEmbed.jsx
import React from 'react';

const YouTubeEmbed = ({ value }) => {
    const getYouTubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const videoId = getYouTubeId(value.url);
    if (!videoId) return null;

    return (
        <div className="my-8">
            <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            {value.caption && (
                <p className="text-sm text-gray-600 text-center mt-3 italic">
                    {value.caption}
                </p>
            )}
        </div>
    );
};

export default YouTubeEmbed;