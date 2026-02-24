interface FooterProps {
    onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
    return (
        <>
            {/* FOOTER SECTION */}
            <footer className="footer-section py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 relative">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">

                        {/* About Section */}
                        <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#111] leading-tight" style={{ fontStyle: 'italic' }}>
                                SHIVAM<br />KUMAR
                            </h2>
                            <p className="text-[#111] text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                                A developer and photographer from India, dedicated to creating quality artworks alongside building engaging digital experiences that captivate users.
                            </p>
                        </div>

                        {/* Sitemap */}
                        <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#111] uppercase">Sitemap</h3>
                            <ul className="space-y-2">
                                <li><a href="/" className="text-[#111] hover:text-white transition-colors font-semibold text-xs sm:text-sm md:text-base">Home</a></li>
                                <li><a href="/projects" className="text-[#111] hover:text-white transition-colors font-semibold text-xs sm:text-sm md:text-base">Projects</a></li>
                                <li><a href="/about" className="text-[#111] hover:text-white transition-colors font-semibold text-xs sm:text-sm md:text-base">About</a></li>
                            </ul>
                        </div>

                        {/* Social & Contact */}
                        <div className="space-y-3 sm:space-y-4 text-center sm:text-left sm:col-span-2 md:col-span-1">
                            <div>
                                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-[#111] mb-3">Follow me on</h3>
                                <div className="flex gap-4 justify-center sm:justify-start">
                                    <a href="https://www.linkedin.com/in/shivam-kumar-8a9906275/" target="_blank" rel="noopener noreferrer" className="text-[#111] hover:text-white transition-colors text-lg sm:text-xl md:text-2xl">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://instagram.com/_shiva.am99" target="_blank" rel="noopener noreferrer" className="text-[#111] hover:text-white transition-colors text-lg sm:text-xl md:text-2xl">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://github.com/Shivamkr99" target="_blank" rel="noopener noreferrer" className="text-[#111] hover:text-white transition-colors text-lg sm:text-xl md:text-2xl">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>

                            <button
                                onClick={onContactClick}
                                className="w-full sm:w-auto bg-[#111] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm md:text-base hover:bg-black transition-all duration-300 transform hover:scale-105 uppercase border-2 border-[#111]"
                            >
                                Contact Me
                            </button>
                        </div>

                    </div>
                </div>
            </footer>

            {/* COPYRIGHT SECTION */}
            <div className="copyright-section py-5 sm:py-6 px-4 sm:px-6 md:px-12">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#e67e22] rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-black text-xs sm:text-sm">SK</span>
                        </div>
                        <p className="text-white/70 text-xs sm:text-sm md:text-base text-center md:text-left">
                            © 2025 <span className="font-bold text-white">Shivam Kumar</span>. All rights reserved.
                        </p>
                    </div>
                    <p className="text-white/50 text-[10px] sm:text-xs md:text-sm">
                        Designed & Developed with <span className="text-[#e67e22]">❤</span>
                    </p>
                </div>
            </div>
        </>
    );
}
