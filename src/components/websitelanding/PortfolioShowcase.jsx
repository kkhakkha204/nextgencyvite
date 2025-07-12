import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PortfolioShowcase = () => {
    // Hard-coded project data
    const projects = [
        // Column 1
        {
            id: 1,
            name: "E-commerce Platform",
            type: "video",
            src: "/assets/images/website&landingpage/show.mp4",
            alt: "E-commerce Platform Demo"
        },
        {
            id: 2,
            name: "Corporate Website",
            type: "image",
            src: "/assets/images/website&landingpage/hero1.png",
            alt: "Corporate Website"
        },
        {
            id: 3,
            name: "Mobile App Landing",
            type: "image",
            src: "/assets/images/website&landingpage/hero1.png",
            alt: "Mobile App Landing"
        },
        {
            id: 4,
            name: "Restaurant Portal",
            type: "video",
            src: "/assets/images/website&landingpage/show.mp4",
            alt: "Restaurant Portal"
        },
        // Column 2
        {
            id: 5,
            name: "Finance Dashboard",
            type: "image",
            src: "/assets/images/website&landingpage/hero1.png",
            alt: "Finance Dashboard"
        },
        {
            id: 6,
            name: "Healthcare System",
            type: "image",
            src: "/assets/images/website&landingpage/hero1.png",
            alt: "Healthcare System"
        },
        {
            id: 7,
            name: "Education Platform",
            type: "image",
            src: "/assets/images/website&landingpage/hero1.png",
            alt: "Education Platform"
        },
        {
            id: 8,
            name: "Real Estate Portal",
            type: "image",
            src: "/assets/images/website&landingpage/hero1.png",
            alt: "Real Estate Portal"
        },
        // Column 3
        {
            id: 9,
            name: "Travel Agency",
            type: "image",
            src: "/assets/images/website&landingpage/hero1.png",
            alt: "Travel Agency"
        },
        {
            id: 10,
            name: "Fashion E-store",
            type: "video",
            src: "/assets/images/website&landingpage/show.mp4",
            alt: "Fashion E-store"
        },
        {
            id: 11,
            name: "Tech Startup",
            type: "image",
            src: "/assets/images/website&landingpage/hero1.png",
            alt: "Tech Startup Demo"
        },
        {
            id: 12,
            name: "Portfolio Website",
            type: "image",
            src: "/assets/images/website&landingpage/hero1.png",
            alt: "Portfolio Website"
        }
    ];

    // Organize projects into 3 columns
    const getColumnProjects = (columnIndex) => {
        const projectsPerColumn = 4;
        const startIndex = columnIndex * projectsPerColumn;
        return projects.slice(startIndex, startIndex + projectsPerColumn);
    };

    const ProjectCard = ({ project }) => (
        <div className="group relative overflow-hidden rounded-lg bg-white transition-all duration-300 cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden">
                {project.type === 'video' ? (
                    <video
                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={project.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={project.src}
                        alt={project.alt}
                        className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                )}
            </div>

            <div className="py-2 flex items-center justify-between">
                <h3 className="text-sm font-medium text-black group-hover:text-gray-600 transition-colors duration-200">
                    {project.name}
                </h3>
                <div className="bg-gray-100 neu-shadow-inset-xs p-3 rounded-full">
                <ArrowUpRight
                    className="w-4 h-4 text-black group-hover:text-gray-600 transition-all duration-200 group-hover:transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-[60px] lg:pt-[90px]">
                {/* Section Header */}
                <div className="text-center mb-6 lg:mb-10">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center mb-2">
            <span className="bg-gradient-to-r from-[#5534bb] via-[#2faeec] to-[#5534bb] text-white px-4 py-2 rounded-full text-[14px] lg:text-[16px] font-medium">
              Website & Landing page
            </span>
                    </div>
                    <h2 className="text-[24px] lg:text-[40px] font-archivo font-semibold text-black mb-1">
                        Dự án của Nextgency
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black max-w-3xl mx-auto">
                        Showcasing our finest work across various industries and technologies
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Column 1 */}
                    <div className="space-y-6">
                        {getColumnProjects(0).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-6">
                        {getColumnProjects(1).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-6">
                        {getColumnProjects(2).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PortfolioShowcase;