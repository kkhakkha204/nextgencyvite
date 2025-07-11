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
            src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
            alt: "E-commerce Platform Demo"
        },
        {
            id: 2,
            name: "Corporate Website",
            type: "image",
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
            alt: "Corporate Website"
        },
        {
            id: 3,
            name: "Mobile App Landing",
            type: "image",
            src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
            alt: "Mobile App Landing"
        },
        {
            id: 4,
            name: "Restaurant Portal",
            type: "image",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
            alt: "Restaurant Portal"
        },
        // Column 2
        {
            id: 5,
            name: "Finance Dashboard",
            type: "image",
            src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
            alt: "Finance Dashboard"
        },
        {
            id: 6,
            name: "Healthcare System",
            type: "image",
            src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
            alt: "Healthcare System"
        },
        {
            id: 7,
            name: "Education Platform",
            type: "image",
            src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
            alt: "Education Platform"
        },
        {
            id: 8,
            name: "Real Estate Portal",
            type: "image",
            src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
            alt: "Real Estate Portal"
        },
        // Column 3
        {
            id: 9,
            name: "Travel Agency",
            type: "image",
            src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
            alt: "Travel Agency"
        },
        {
            id: 10,
            name: "Fashion E-store",
            type: "image",
            src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
            alt: "Fashion E-store"
        },
        {
            id: 11,
            name: "Tech Startup",
            type: "video",
            src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
            alt: "Tech Startup Demo"
        },
        {
            id: 12,
            name: "Portfolio Website",
            type: "image",
            src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
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
        <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden">
                {project.type === 'video' ? (
                    <video
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                )}
            </div>

            <div className="p-4 flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
                    {project.name}
                </h3>
                <ArrowUpRight
                    className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-all duration-200 group-hover:transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
            </div>
        </div>
    );

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-16">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Our Portfolio
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Showcasing our finest work across various industries and technologies
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div className="space-y-8">
                        {getColumnProjects(0).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-8">
                        {getColumnProjects(1).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-8">
                        {getColumnProjects(2).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
                        View All Projects
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioShowcase;