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
            src: "/assets/images/website&landingpage/beautysummit.webp",
            alt: "Corporate Website"
        },
        {
            id: 3,
            name: "Mobile App Landing",
            type: "image",
            src: "/assets/images/website&landingpage/beautysummit.webp",
            alt: "Mobile App Landing"
        },
        {
            id: 4,
            name: "Restaurant Portal",
            type: "image",
            src: "/assets/images/website&landingpage/beautysummit.webp",
            alt: "Restaurant Portal"
        },
        // Column 2
        {
            id: 5,
            name: "Finance Dashboard",
            type: "image",
            src: "/assets/images/website&landingpage/beautysummit.webp",
            alt: "Finance Dashboard"
        },
        {
            id: 6,
            name: "Healthcare System",
            type: "video",
            src: "/assets/images/website&landingpage/show.mp4",
            alt: "Healthcare System"
        },
        {
            id: 7,
            name: "Education Platform",
            type: "image",
            src: "/assets/images/website&landingpage/beautysummit.webp",
            alt: "Education Platform"
        },
        {
            id: 8,
            name: "Real Estate Portal",
            type: "video",
            src: "/assets/images/website&landingpage/show.mp4",
            alt: "Real Estate Portal"
        },
        // Column 3
        {
            id: 9,
            name: "Travel Agency",
            type: "image",
            src: "/assets/images/website&landingpage/beautysummit.webp",
            alt: "Travel Agency"
        },
    ];

    // Organize projects into 3 columns
    const getColumnProjects = (columnIndex) => {
        const projectsPerColumn = 3;
        const startIndex = columnIndex * projectsPerColumn;
        return projects.slice(startIndex, startIndex + projectsPerColumn);
    };

    const ProjectCard = ({ project }) => (
        <div className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-300 cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden">
                {project.type === 'video' ? (
                    <video
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
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
                        className="w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
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
            <div className=" md:max-w-[700px] lg:max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8 pt-[60px] lg:pt-[90px]">
                {/* Section Header */}
                <div className="text-center mb-4 lg:mb-8">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center mb-2">
            <span className="bg-black text-white px-3 py-2 rounded-full text-[11px] lg:text-[13px] font-medium">
              Website & Landing Page
            </span>
                    </div>
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black mb-1">
                        Dự án của Nextgency
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black max-w-3xl mx-auto">
                        Showcasing our finest work across various industries and technologies
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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