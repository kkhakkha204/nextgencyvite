import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProjectCategories, projectsData } from '../../data/projectsData';

const PortfolioShowcase = () => {
    const projects = projectsData
        .filter((project) => getProjectCategories(project).includes('Website & Landing Page'))
        .slice(0, 9)
        .map((project) => ({
            id: project.id,
            name: project.name,
            type: 'image',
            src: project.slides?.[0] || project.videoUrl || '/assets/images/website&landingpage/beautysummit.webp',
            alt: project.name
        }));

    // Organize projects into 3 columns
    const getColumnProjects = (columnIndex) => {
        const projectsPerColumn = 3;
        const startIndex = columnIndex * projectsPerColumn;
        return projects.slice(startIndex, startIndex + projectsPerColumn);
    };

    const ProjectCard = ({ project }) => (
        <Link
            to={`/projects/${project.id}`}
            className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-300 mb-4 display-block"
            aria-label={`Xem chi tiết ${project.name}`}
        >
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
        </Link>
    );

    return (
        <section className="bg-white">
            <div className=" md:max-w-[700px] lg:max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8 pt-[60px] lg:pt-[90px]">
                {/* Section Header */}
                <div className="text-center mb-4 lg:mb-8">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center mb-2">
                        <span className=" text-black rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            website & landingpage
                        </span>
                    </div>
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black mb-1 uppercase leading-[1.45]">
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
                    <div className="space-y-6 ">
                        {getColumnProjects(1).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-6 ">
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