import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About - Shivam Kumar',
    description: 'Developer, Designer, and Photographer passionate about creating meaningful digital experiences.',
};

export default function About() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center animate-fade-in-up w-full">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
                        ABOUT <span className="gradient-text">ME</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed px-4">
                        Developer, Designer, and Photographer passionate about creating meaningful digital experiences.
                    </p>
                </div>
            </section>

            {/* MY STORY SECTION */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                        {/* Image Section */}
                        <div className="animate-fade-in-up delay-100 order-2 md:order-1 overflow-hidden">
                            <div className="relative max-w-md mx-auto md:max-w-none">
                                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#e67e22] to-[#a4f526] rounded-3xl blur-2xl opacity-20"></div>
                                <Image
                                    src="/shivam_About.png"
                                    alt="Shivam Kumar"
                                    width={600}
                                    height={800}
                                    className="relative curved-image w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Story Section */}
                        <div className="animate-fade-in-up delay-200 order-1 md:order-2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8">
                                MY <span className="gradient-text">STORY</span>
                            </h2>

                            {/* Glassmorphism Box */}
                            <div className="glass-box rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
                                <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg">
                                    Born and raised in <span className="text-[#e67e22] font-semibold">Dhanbad, Jharkhand</span>, I am a pre-final year B.Tech IT student at <span className="text-[#a4f526] font-semibold">Kalinga Institute of Industrial Technology, Bhubaneswar</span>. A tech enthusiast and problem-solver, I explore how systems work, optimize workflows, and build impactful solutions through intelligent automation and full-stack web development.
                                </p>
                                <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg">
                                    I am a <span className="text-[#e67e22] font-semibold">UiPath Certified RPA Developer</span> and <span className="text-[#e67e22] font-semibold">Automation Developer</span>, skilled in designing and deploying end-to-end automation solutions, while also creating dynamic, responsive web applications. Beyond coding, I am a passionate photographer and <span className="text-[#a4f526] font-semibold">Associate Coordinator for the UiPath Student Community</span>, helping students dive into AI-driven automation.
                                </p>
                                <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg">
                                    Curious and always learning, I strive to create solutions that inspire, simplify processes, and make a tangible impact.
                                </p>

                                {/* Location Badge */}
                                <div className="flex items-center gap-2 pt-3 sm:pt-4">
                                    <i className="fas fa-map-marker-alt text-[#e67e22]"></i>
                                    <span className="text-white/70 text-xs sm:text-sm">Dhanbad, Jharkhand → Bhubaneswar, Odisha</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SKILLS SECTION */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-transparent to-[#0a0a0a]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12 animate-fade-in-up delay-100">
                        MY <span className="gradient-text">SKILLS</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

                        {/* Development */}
                        <div className="skill-card glass-box rounded-2xl p-6 sm:p-8 animate-fade-in-up delay-200">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#e67e22] rounded-xl flex items-center justify-center mb-5 sm:mb-6">
                                <i className="fas fa-code text-2xl sm:text-3xl text-white"></i>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-white">Development</h3>
                            <ul className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base">
                                <li className="flex items-center gap-3">
                                    <i className="fab fa-python text-[#e67e22]"></i>
                                    <span>Python & Automation</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fab fa-html5 text-[#e67e22]"></i>
                                    <span>Full-Stack Web Dev</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fas fa-robot text-[#e67e22]"></i>
                                    <span>RPA (UiPath)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fas fa-brain text-[#e67e22]"></i>
                                    <span>AI & Machine Learning</span>
                                </li>
                            </ul>
                        </div>

                        {/* Design */}
                        <div className="skill-card glass-box rounded-2xl p-6 sm:p-8 animate-fade-in-up delay-300">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#a4f526] rounded-xl flex items-center justify-center mb-5 sm:mb-6">
                                <i className="fas fa-palette text-2xl sm:text-3xl text-black"></i>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-white">Design</h3>
                            <ul className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base">
                                <li className="flex items-center gap-3">
                                    <i className="fab fa-adobe text-[#a4f526]"></i>
                                    <span>Adobe Photoshop</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fab fa-adobe text-[#a4f526]"></i>
                                    <span>Adobe Premiere Pro</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fas fa-video text-[#a4f526]"></i>
                                    <span>Video Editing</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fas fa-pencil-ruler text-[#a4f526]"></i>
                                    <span>UI/UX Design</span>
                                </li>
                            </ul>
                        </div>

                        {/* Photography */}
                        <div className="skill-card glass-box rounded-2xl p-6 sm:p-8 animate-fade-in-up delay-400 sm:col-span-2 md:col-span-1">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#3498db] rounded-xl flex items-center justify-center mb-5 sm:mb-6">
                                <i className="fas fa-camera text-2xl sm:text-3xl text-white"></i>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-white">Photography</h3>
                            <ul className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base">
                                <li className="flex items-center gap-3">
                                    <i className="fas fa-portrait text-[#3498db]"></i>
                                    <span>Portrait Photography</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fas fa-camera-retro text-[#3498db]"></i>
                                    <span>Event Photography</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fas fa-film text-[#3498db]"></i>
                                    <span>Videography</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fas fa-magic text-[#3498db]"></i>
                                    <span>Photo Editing</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 sm:mb-16 animate-fade-in-up">
                        MY <span className="gradient-text">EXPERIENCE</span>
                    </h2>

                    <div className="space-y-8 sm:space-y-12">

                        {/* Experience 1 */}
                        <div className="timeline-item animate-fade-in-up delay-200">
                            <div className="timeline-dot"></div>
                            <div className="glass-box rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                                <div className="flex flex-col gap-3 mb-4">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-black text-white mb-2">Associate Coordinator</h3>
                                        <p className="text-[#a4f526] font-semibold text-base sm:text-lg">UiPath Student Community</p>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-[#e67e22] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">2024 - Present</span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-white/80 text-sm sm:text-base">
                                    <li className="flex items-start gap-2 sm:gap-3">
                                        <i className="fas fa-check-circle text-[#a4f526] mt-1 flex-shrink-0"></i>
                                        <span>Leading and coordinating student initiatives in AI-driven automation and RPA technologies</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3">
                                        <i className="fas fa-check-circle text-[#a4f526] mt-1 flex-shrink-0"></i>
                                        <span>Organizing workshops, webinars, and training sessions for students to learn automation</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3">
                                        <i className="fas fa-check-circle text-[#a4f526] mt-1 flex-shrink-0"></i>
                                        <span>Mentoring peers and fostering a collaborative learning environment</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Experience 2 */}
                        <div className="timeline-item animate-fade-in-up delay-300">
                            <div className="timeline-dot bg-[#a4f526]"></div>
                            <div className="glass-box rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                                <div className="flex flex-col gap-3 mb-4">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-black text-white mb-2">RPA Developer</h3>
                                        <p className="text-[#e67e22] font-semibold text-base sm:text-lg">Freelance Projects</p>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-[#a4f526] text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">2023 - Present</span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-white/80 text-sm sm:text-base">
                                    <li className="flex items-start gap-2 sm:gap-3">
                                        <i className="fas fa-check-circle text-[#e67e22] mt-1 flex-shrink-0"></i>
                                        <span>Designed and deployed end-to-end automation solutions using UiPath for various clients</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3">
                                        <i className="fas fa-check-circle text-[#e67e22] mt-1 flex-shrink-0"></i>
                                        <span>Optimized business workflows, reducing manual effort by up to 70%</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3">
                                        <i className="fas fa-check-circle text-[#e67e22] mt-1 flex-shrink-0"></i>
                                        <span>Integrated AI and machine learning models into automation processes</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Experience 3 */}
                        <div className="timeline-item animate-fade-in-up delay-400">
                            <div className="timeline-dot bg-[#3498db]"></div>
                            <div className="glass-box rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                                <div className="flex flex-col gap-3 mb-4">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-black text-white mb-2">Full-Stack Web Developer</h3>
                                        <p className="text-[#3498db] font-semibold text-base sm:text-lg">Personal & Client Projects</p>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-[#3498db] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">2022 - Present</span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-white/80 text-sm sm:text-base">
                                    <li className="flex items-start gap-2 sm:gap-3">
                                        <i className="fas fa-check-circle text-[#3498db] mt-1 flex-shrink-0"></i>
                                        <span>Built dynamic, responsive web applications using modern frameworks and technologies</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3">
                                        <i className="fas fa-check-circle text-[#3498db] mt-1 flex-shrink-0"></i>
                                        <span>Created user-friendly interfaces with focus on UX/UI design principles</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3">
                                        <i className="fas fa-check-circle text-[#3498db] mt-1 flex-shrink-0"></i>
                                        <span>Developed portfolio websites, e-commerce platforms, and business websites</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Experience 4 */}
                        <div className="timeline-item animate-fade-in-up delay-500">
                            <div className="timeline-dot bg-[#9b59b6]"></div>
                            <div className="glass-box rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                                <div className="flex flex-col gap-3 mb-4">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-black text-white mb-2">Photographer & Videographer</h3>
                                        <p className="text-[#9b59b6] font-semibold text-base sm:text-lg">Event Coverage & Creative Projects</p>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-[#9b59b6] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">2021 - Present</span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-white/80 text-sm sm:text-base">
                                    <li className="flex items-start gap-2 sm:gap-3">
                                        <i className="fas fa-check-circle text-[#9b59b6] mt-1 flex-shrink-0"></i>
                                        <span>Captured and edited professional photos and videos for college events and private clients</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3">
                                        <i className="fas fa-check-circle text-[#9b59b6] mt-1 flex-shrink-0"></i>
                                        <span>Specialized in portrait photography, event coverage, and creative videography</span>
                                    </li>
                                    <li className="flex items-start gap-2 sm:gap-3">
                                        <i className="fas fa-check-circle text-[#9b59b6] mt-1 flex-shrink-0"></i>
                                        <span>Post-production editing using Adobe Photoshop and Premiere Pro</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
