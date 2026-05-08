import { useState } from 'react';

const portfolioImagePaths = [
    '/assets/images/portfolio/0.webp',
    '/assets/images/portfolio/1.webp',
    '/assets/images/portfolio/2.webp',
    '/assets/images/portfolio/3.webp',
    '/assets/images/portfolio/4.webp',
    '/assets/images/portfolio/5.webp',
    '/assets/images/portfolio/6.webp',
    '/assets/images/portfolio/7.webp',
    '/assets/images/portfolio/8.webp',
    '/assets/images/portfolio/9.webp',
    '/assets/images/portfolio/10.webp',
    '/assets/images/portfolio/11.webp',
    '/assets/images/portfolio/12.webp',
    '/assets/images/portfolio/13.webp',
    '/assets/images/portfolio/14.webp',
    '/assets/images/portfolio/15.webp',
    '/assets/images/portfolio/16.webp',
    '/assets/images/portfolio/17.webp',
    '/assets/images/portfolio/18.webp',
    '/assets/images/portfolio/19.webp',
    
    '/assets/images/portfolio/a (1).webp',
    '/assets/images/portfolio/a (2).webp',
    '/assets/images/portfolio/a (3).webp',
    '/assets/images/portfolio/a (4).webp',
    '/assets/images/portfolio/a (5).webp',
    '/assets/images/portfolio/a (6).webp',
    '/assets/images/portfolio/a (7).webp',
    '/assets/images/portfolio/a (8).webp',
    '/assets/images/portfolio/a (9).webp',
    '/assets/images/portfolio/a (10).webp',
    '/assets/images/portfolio/a (11).webp',
    '/assets/images/portfolio/a (12).webp',
    '/assets/images/portfolio/a (13).webp',
    '/assets/images/portfolio/a (14).webp',
    '/assets/images/portfolio/a (15).webp',
    '/assets/images/portfolio/a (16).webp',
    '/assets/images/portfolio/a (17).webp',
    '/assets/images/portfolio/a (18).webp',
    '/assets/images/portfolio/a (19).webp',
    '/assets/images/portfolio/a (20).webp',

     '/assets/images/portfolio/21.webp',
    '/assets/images/portfolio/22.webp',
    '/assets/images/portfolio/23.webp',
    '/assets/images/portfolio/24.webp',
    '/assets/images/portfolio/25.webp',
    '/assets/images/portfolio/26.webp',
    '/assets/images/portfolio/27.webp',
    '/assets/images/portfolio/28.webp',
    '/assets/images/portfolio/29.webp',
    '/assets/images/portfolio/30.webp',
    '/assets/images/portfolio/31.webp',
    '/assets/images/portfolio/32.webp',
    '/assets/images/portfolio/33.webp',
    '/assets/images/portfolio/34.webp',
    '/assets/images/portfolio/35.webp',
    '/assets/images/portfolio/36.webp',
    '/assets/images/portfolio/37.webp',
    '/assets/images/portfolio/38.webp',
    '/assets/images/portfolio/39.webp',
    '/assets/images/portfolio/40.webp',
    '/assets/images/portfolio/41.webp',
     '/assets/images/portfolio/42.webp',
    '/assets/images/portfolio/43.webp',
    '/assets/images/portfolio/44.webp',
    '/assets/images/portfolio/45.webp',
    '/assets/images/portfolio/46.webp',
    '/assets/images/portfolio/47.webp',
    '/assets/images/portfolio/48.webp',
    '/assets/images/portfolio/49.webp',
    '/assets/images/portfolio/50.webp',
    '/assets/images/portfolio/51.webp',
    '/assets/images/portfolio/52.webp',
    '/assets/images/portfolio/53.webp',
    '/assets/images/portfolio/54.webp',
    '/assets/images/portfolio/55.webp',
    '/assets/images/portfolio/56.webp',
    '/assets/images/portfolio/57.webp',
    '/assets/images/portfolio/58.webp',
    '/assets/images/portfolio/59.webp',
    '/assets/images/portfolio/60.webp',
     '/assets/images/portfolio/61.webp',
];

const portfolioImages = portfolioImagePaths.map((src, index) => ({
    id: index,
    src,
    alt: `Portfolio Image ${index + 1}`,
}));

const Portfolio = () => {
    const [imageErrors, setImageErrors] = useState({});

    const handleImageError = (imageId) => {
        setImageErrors((prev) => ({ ...prev, [imageId]: true }));
    };

    return (
        <div className="mx-auto w-full max-w-[1380px] space-y-2 md:space-y-4 xl:py-[20px]">
            {portfolioImages.map((image) => (
                <div key={image.id} className="w-full">
                    {imageErrors[image.id] ? (
                        <div className="flex h-96 w-full items-center justify-center bg-gray-200">
                            <div className="text-center text-gray-500">
                                <p>Khong the tai anh {image.src}</p>
                            </div>
                        </div>
                    ) : (
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="block h-auto w-full"
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
