'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

const projects = [
    {
        id: 1,
        title: 'Invoice Processing Bot',
        description: 'Automated invoice data extraction and processing system using UiPath, reducing processing time by 85%.',
        category: 'automation',
        gradient: 'from-[#e67e22] to-[#d35400]',
        icon: 'fa-robot',
        tags: ['UiPath', 'OCR', 'Excel'],
        tagColor: 'bg-[#e67e22]/20 text-[#e67e22]',
        linkColor: 'text-[#e67e22]',
    },
    {
        id: 2,
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce website with payment integration, admin dashboard, and real-time inventory management.',
        category: 'web',
        gradient: 'from-[#a4f526] to-[#7ec61d]',
        icon: 'fa-code',
        tags: ['React', 'Node.js', 'MongoDB'],
        tagColor: 'bg-[#a4f526]/20 text-[#a4f526]',
        linkColor: 'text-[#a4f526]',
    },
    {
        id: 3,
        title: 'Brand Identity Design',
        description: 'Complete brand identity package including logo, color palette, typography, and brand guidelines for startup.',
        category: 'design',
        gradient: 'from-[#3498db] to-[#2980b9]',
        icon: 'fa-palette',
        tags: ['Photoshop', 'Illustrator', 'Figma'],
        tagColor: 'bg-[#3498db]/20 text-[#3498db]',
        linkColor: 'text-[#3498db]',
    },
    {
        id: 4,
        title: 'Email Classification Bot',
        description: 'AI-powered email classification system that categorizes and routes emails automatically with 95% accuracy.',
        category: 'automation',
        gradient: 'from-[#9b59b6] to-[#8e44ad]',
        icon: 'fa-brain',
        tags: ['Python', 'ML', 'NLP'],
        tagColor: 'bg-[#9b59b6]/20 text-[#9b59b6]',
        linkColor: 'text-[#9b59b6]',
    },
    {
        id: 5,
        title: 'Portfolio Website',
        description: 'Modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.',
        category: 'web',
        gradient: 'from-[#e74c3c] to-[#c0392b]',
        icon: 'fa-mobile-alt',
        tags: ['HTML/CSS', 'JavaScript', 'Tailwind'],
        tagColor: 'bg-[#e74c3c]/20 text-[#e74c3c]',
        linkColor: 'text-[#e74c3c]',
    },
    {
        id: 6,
        title: 'Event Promo Video',
        description: 'High-energy promotional video for college fest featuring motion graphics, transitions, and dynamic editing.',
        category: 'design',
        gradient: 'from-[#f39c12] to-[#e67e22]',
        icon: 'fa-video',
        tags: ['Premiere Pro', 'After Effects', 'Motion'],
        tagColor: 'bg-[#f39c12]/20 text-[#f39c12]',
        linkColor: 'text-[#f39c12]',
    },
];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <>
            {/* HERO SECTION */}
            <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 min-h-[50vh] md:min-h-[60vh] flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center animate-fade-in-up w-full">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight px-2">
                        MY <span className="gradient-text">PROJECTS</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed px-4">
                        A collection of my work in automation, web development, and creative design. Each project represents a unique challenge and solution.
                    </p>
                </div>
            </section>

            {/* FILTER SECTION */}
            <section className="py-6 sm:py-8 px-4 sm:px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 animate-fade-in-up delay-100">
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`filter-btn glass-box px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-xs sm:text-sm hover:bg-[#e67e22] hover:text-white transition-all ${activeFilter === 'all' ? 'active' : ''
                                }`}
                        >
                            ALL PROJECTS
                        </button>
                        <button
                            onClick={() => setActiveFilter('automation')}
                            className={`filter-btn glass-box px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-xs sm:text-sm hover:bg-[#e67e22] hover:text-white transition-all ${activeFilter === 'automation' ? 'active' : ''
                                }`}
                        >
                            AUTOMATION
                        </button>
                        <button
                            onClick={() => setActiveFilter('web')}
                            className={`filter-btn glass-box px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-xs sm:text-sm hover:bg-[#e67e22] hover:text-white transition-all ${activeFilter === 'web' ? 'active' : ''
                                }`}
                        >
                            WEB DEV
                        </button>
                        <button
                            onClick={() => setActiveFilter('design')}
                            className={`filter-btn glass-box px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-xs sm:text-sm hover:bg-[#e67e22] hover:text-white transition-all ${activeFilter === 'design' ? 'active' : ''
                                }`}
                        >
                            DESIGN
                        </button>
                    </div>
                </div>
            </section>

            {/* PROJECTS GRID */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`project-card glass-box rounded-2xl overflow-hidden animate-fade-in-up delay-${(index % 3 + 2) * 100}`}
                            >
                                <div className={`relative h-48 sm:h-56 md:h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                                    <i className={`fas ${project.icon} text-6xl sm:text-7xl md:text-8xl text-white/30`}></i>
                                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase">
                                        {project.category}
                                    </div>
                                </div>
                                <div className="p-5 sm:p-6">
                                    <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-white">{project.title}</h3>
                                    <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className={`${project.tagColor} px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a href="#" className={`inline-flex items-center gap-2 ${project.linkColor} font-bold hover:gap-3 transition-all text-sm`}>
                                        View Details <i className="fas fa-arrow-right text-xs"></i>
                                    </a>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-transparent to-[#0a0a0a]">
                <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 leading-tight px-2">
                        HAVE A <span className="gradient-text">PROJECT</span> IN MIND?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                        Let&apos;s collaborate and bring your ideas to life. I&apos;m always excited to work on new and challenging projects.
                    </p>
                </div>
            </section>
        </>
    );
}
