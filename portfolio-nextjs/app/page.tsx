'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Home() {
  const textPressureLine1Ref = useRef<HTMLDivElement>(null);
  const textPressureLine2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Text Pressure Effect
    const line1 = textPressureLine1Ref.current;
    const line2 = textPressureLine2Ref.current;

    if (!line1 || !line2) return;

    const text1 = 'SHIVAM';
    const text2 = 'KUMAR';

    // Create spans for each letter
    line1.innerHTML = text1.split('').map(char => `<span style="font-variation-settings: 'wdth' 100;">${char}</span>`).join('');
    line2.innerHTML = text2.split('').map(char => `<span style="font-variation-settings: 'wdth' 100;">${char}</span>`).join('');

    const handleMouseMove = (e: MouseEvent) => {
      const spans1 = line1.querySelectorAll('span');
      const spans2 = line2.querySelectorAll('span');

      [spans1, spans2].forEach(spans => {
        spans.forEach((span) => {
          const rect = span.getBoundingClientRect();
          const spanCenterX = rect.left + rect.width / 2;
          const spanCenterY = rect.top + rect.height / 2;
          const distance = Math.sqrt(
            Math.pow(e.clientX - spanCenterX, 2) + Math.pow(e.clientY - spanCenterY, 2)
          );
          const maxDistance = 200;
          const width = Math.max(50, 100 - (distance / maxDistance) * 50);
          (span as HTMLElement).style.fontVariationSettings = `'wdth' ${width}`;
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="relative flex flex-col items-center justify-start min-h-screen pt-20 text-center">

        {/* SIDE TEXT - DEVELOPER (LEFT) */}
        <div className="side-text-left hidden lg:block">
          <span className="developer-text text-[clamp(6rem,10vw,8rem)] font-black tracking-[0.15em] text-white/15 uppercase leading-none">DEVELOPER</span>
        </div>

        {/* SIDE TEXT - PHOTOGRAPHER (RIGHT) */}
        <div className="side-text-right hidden lg:block">
          <span className="photographer-text text-[clamp(6rem,10vw,8rem)] font-black tracking-[0.15em] text-white/15 uppercase leading-none">PHOTOGRAPHER</span>
        </div>

        {/* Background Hero Title WITH TEXT PRESSURE EFFECT */}
        <div className="hero-bg-title animate-up absolute top-[8%] left-1/2 -translate-x-1/2 z-[1] pointer-events-none flex flex-col items-start">
          <div ref={textPressureLine1Ref} id="textPressureLine1" className="text-[clamp(4rem,10vw,8rem)] font-black tracking-tight text-white/85 uppercase leading-[0.85]" style={{ fontFamily: "'Compressa VF', 'Montserrat', sans-serif" }}></div>
          <div ref={textPressureLine2Ref} id="textPressureLine2" className="ml-[370px] text-[clamp(4rem,10vw,8rem)] font-black tracking-tight text-white/65 uppercase leading-[0.85]" style={{ fontFamily: "'Compressa VF', 'Montserrat', sans-serif" }}></div>
        </div>

        {/* Profile Area */}
        <div className="profile-area animate-left flex items-center justify-center w-full max-w-[900px] mx-auto relative z-10 translate-x-0 md:translate-x-20 mt-8 md:mt-0 px-4">

          {/* Profile Image Container */}
          <div className="profile-image-container relative flex justify-center items-end w-[550px] h-[590px]">
            {/* Arcs */}
            <div className="arc arc1 z-[1]"></div>
            <div className="arc arc2 z-[1]"></div>
            <div className="arc arc3 z-[1]"></div>

            {/* Profile Image Background */}
            <div className="profile-image-bg relative z-[5] w-[430px] h-[490px] bg-[#1c1c1c] rounded-t-[210px] rounded-b-[20px] shadow-[inset_0_0_15px_rgba(0,0,0,0.5),0_10px_30px_rgba(0,0,0,0.5)]">
              <Image
                src="/Shivam.png"
                alt="Shivam Kumar Profile"
                width={500}
                height={530}
                className="profile-image absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[530px] z-10"
                priority
              />
            </div>
          </div>

          {/* Skill List */}
          <div className="text-left space-y-4 pl-[50px] hidden md:block">
            {/* RPA Developer Box */}
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 w-[180px]">
              <div className="flex items-center gap-3">
                <i className="fas fa-robot text-[#e67e22] text-2xl"></i>
                <div>
                  <p className="m-0 text-white font-medium">RPA</p>
                  <p className="m-0 text-white/70 text-sm">DEVELOPER</p>
                </div>
              </div>
            </div>

            {/* Web Developer Box */}
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 w-[180px]">
              <div className="flex items-center gap-3">
                <i className="fas fa-code text-[#a4f526] text-2xl"></i>
                <div>
                  <p className="m-0 text-white font-medium">WEB</p>
                  <p className="m-0 text-white/70 text-sm">DEVELOPER</p>
                </div>
              </div>
            </div>

            {/* Photographer Box */}
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 w-[180px]">
              <div className="flex items-center gap-3">
                <i className="fas fa-camera text-[#3498db] text-2xl"></i>
                <div>
                  <p className="m-0 text-white font-medium">PHOTO</p>
                  <p className="m-0 text-white/70 text-sm">GRAPHER</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* SKILLS LOOP SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="skills-loop-container">
            <div className="skills-loop-track">
              {/* First set of skills */}
              <div className="skills-loop-list">
                <i className="fab fa-python text-[#3776ab] text-[2.5rem]"></i>
                <i className="fab fa-js text-[#f7df1e] text-[2.5rem]"></i>
                <i className="fab fa-react text-[#61dafb] text-[2.5rem]"></i>
                <i className="fab fa-node text-[#339933] text-[2.5rem]"></i>
                <i className="fab fa-html5 text-[#e34f26] text-[2.5rem]"></i>
                <i className="fab fa-css3-alt text-[#1572b6] text-[2.5rem]"></i>
                <Image src="/java.png" alt="Java" width={40} height={40} className="h-[2.5rem] w-auto" />
                <Image src="/uipath.png" alt="UiPath" width={40} height={40} className="h-[2.5rem] w-auto" />
                <i className="fab fa-git-alt text-[#f05032] text-[2.5rem]"></i>
                <i className="fab fa-docker text-[#2496ed] text-[2.5rem]"></i>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="skills-loop-list">
                <i className="fab fa-python text-[#3776ab] text-[2.5rem]"></i>
                <i className="fab fa-js text-[#f7df1e] text-[2.5rem]"></i>
                <i className="fab fa-react text-[#61dafb] text-[2.5rem]"></i>
                <i className="fab fa-node text-[#339933] text-[2.5rem]"></i>
                <i className="fab fa-html5 text-[#e34f26] text-[2.5rem]"></i>
                <i className="fab fa-css3-alt text-[#1572b6] text-[2.5rem]"></i>
                <Image src="/java.png" alt="Java" width={40} height={40} className="h-[2.5rem] w-auto" />
                <Image src="/uipath.png" alt="UiPath" width={40} height={40} className="h-[2.5rem] w-auto" />
                <i className="fab fa-git-alt text-[#f05032] text-[2.5rem]"></i>
                <i className="fab fa-docker text-[#2496ed] text-[2.5rem]"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTES SECTION */}
      <section className="quotes-section relative py-20">
        {/* Animated Background Patterns */}
        <div className="grid-pattern absolute w-full h-full"></div>
        <div className="dots-pattern absolute w-full h-full"></div>
        <div className="diagonal-lines absolute w-full h-full"></div>

        {/* Floating Orbs */}
        <div className="floating-orb orb-1 absolute"></div>
        <div className="floating-orb orb-2 absolute"></div>
        <div className="floating-orb orb-3 absolute"></div>

        {/* Geometric Shapes */}
        <div className="geometric-shape shape-1 absolute"></div>
        <div className="geometric-shape shape-2 absolute"></div>
        <div className="geometric-shape shape-3 absolute"></div>

        {/* Quote 1 */}
        <div className="quote-box">
          <p className="quote-text">
            AUTOMATION IS NOT ABOUT <span className="outline-text">REPLACING</span> PEOPLE, IT&apos;S ABOUT <span className="text-[#e67e22]">EMPOWERING</span> THEM
          </p>
          <p className="quote-author">— Shivam Kumar</p>
        </div>

        {/* Quote 2 */}
        <div className="quote-box">
          <p className="quote-text">
            CODE IS <span className="text-[#a4f526]">POETRY</span> WRITTEN IN <span className="outline-text">LOGIC</span>
          </p>
          <p className="quote-author">— Shivam Kumar</p>
        </div>

        {/* Quote 3 */}
        <div className="quote-box">
          <p className="quote-text">
            EVERY <span className="outline-text">PHOTOGRAPH</span> TELLS A <span className="text-[#3498db]">STORY</span> THAT WORDS CANNOT
          </p>
          <p className="quote-author">— Shivam Kumar</p>
        </div>
      </section>
    </>
  );
}
