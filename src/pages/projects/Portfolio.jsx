import { useState } from 'react';

const Portfolio = () => {
    const [imageErrors, setImageErrors] = useState({});

    // Tạo array 20 ảnh từ 0.webp đến 19.webp
    const portfolioImages = Array.from({ length: 20 }, (_, index) => ({
        id: index,
        src: `/assets/images/portfolio/${index}.webp`,
        alt: `Portfolio Image ${index + 1}`
    }));

    const handleImageError = (imageId) => {
        setImageErrors(prev => ({ ...prev, [imageId]: true }));
    };

    return (
        <div className="w-full space-y-2 md:space-y-4">
            {portfolioImages.map((image) => (
                <div key={image.id} className="w-full">
                    {imageErrors[image.id] ? (
                        <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                            <div className="text-center text-gray-500">
                                <p>Không thể tải ảnh {image.id}.webp</p>
                            </div>
                        </div>
                    ) : (
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto block"
                            onError={() => handleImageError(image.id)}
                            loading="lazy"
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Portfolio;