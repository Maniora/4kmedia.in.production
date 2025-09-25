import React, { useEffect, useRef, useState } from 'react';

// Hook: Count Up
const useCountUp = (to, duration = 1500) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start;
    let animationFrame;
    const target = typeof to === 'number' ? to : 0;

    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const currentValue = Math.floor(progress * target);
      setValue(currentValue);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [to, duration]);

  return value;
};

// Hook: Typewriter
const useTypewriter = (texts, speed = 100, delay = 2000) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    if (currentIndex < texts[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[currentTextIndex][currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentTextIndex, texts, speed, delay]);

  return currentText;
};

const Hero = () => {
  const projects = useCountUp(150);
  const roi = useCountUp(12);
  const retention = useCountUp(98);
  const years = useCountUp(7);

  const services = [
    "Social Media Marketing (SMM)",
    "Website Development",
    "UI/UX Design",
    "Video Production",
    "Logo Design"
  ];

  const typingTexts = [
    "Build. Market. Grow.",
    "Create. Engage. Convert.",
    "Design. Develop. Deliver.",
    "Innovate. Optimize. Scale."
  ];

  const typedText = useTypewriter(typingTexts, 80, 3000);

  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center bg-[#0d1117] py-15">
      {/* Decorative background dots */}
      <div className="absolute inset-0 grid-dots opacity-30" aria-hidden />

      <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">

        {/* Left Side Content */}
        <div className="text-center md:text-left">
          <div className="mb-4 animate-fade-in">
            <span className="text-xs uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1.5 rounded-full font-medium">
              Premium Digital Agency
            </span>
          </div>

          {/* Typewriter Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-2 animate-slide-up leading-tight">
            Strategic Digital <br />
            <span className="text-gradient relative text-3xl md:text-4.5xl lg:text-4xl font-bold inline-block min-h-[2em]">
              <span className="inline-flex items-center">
                {typedText}
                <span className="inline-block align-middle ml-1 w-1 h-8 md:h-10 bg-[#f7e839] animate-pulse"></span>
              </span>
            </span>
          </h1>
          <p className="text-white/70 mb-6">Zero to viral, we make it happen.</p>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 animate-fade-in delay-500">
            <div className="flex flex-col justify-center items-center bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 text-center backdrop-blur-sm hover:border-[#f7e839]/40 transition">
              <div className="text-2xl md:text-3xl font-bold text-[#f7e839] mb-2">
                {projects}+
              </div>
              <div className="text-white/80 text-sm font-semibold">Projects</div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 text-center backdrop-blur-sm hover:border-[#22d3ee]/40 transition">
              <div className="text-2xl md:text-3xl font-bold text-[#f7e839] mb-2">
                {roi}x
              </div>
              <div className="text-white/80 text-sm font-semibold">Average ROI</div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 text-center backdrop-blur-sm hover:border-[#ec4899]/40 transition">
              <div className="text-2xl md:text-3xl font-bold text-[#f7e839] mb-2">
                {retention}%
              </div>
              <div className="text-white/80 text-sm font-semibold">Client Retention</div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 text-center backdrop-blur-sm hover:border-[#10b981]/40 transition">
              <div className="text-2xl md:text-3xl font-bold text-[#f7e839] mb-2">
                {years}+
              </div>
              <div className="text-white/80 text-sm font-semibold">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-row sm:gap-3 animate-slide-up delay-700 justify-center md:justify-start">
            <a
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-[#f7e839]/60 bg-gradient-to-br from-red-900/30 to-transparent text-white font-semibold text-center text-base shadow-md hover:bg-red-600/10 hover:border-red-400 transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-[#f7e839]/60 bg-gradient-to-br from-yellow-900/20 to-transparent text-white font-semibold text-center text-base shadow-md hover:bg-[#f7e839]/10 hover:border-[#f7e839] transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#f7e839]"
            >
              Explore Services
            </a>
            <a
              href="https://wa.me/9989958238"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-[#f7e839]/60 bg-gradient-to-br from-[#128C7E]/10 to-transparent text-white font-semibold text-center text-base flex items-center justify-center gap-2 shadow-md hover:bg-[#128C7E]/20 hover:border-[#25D366] transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5"
                fill="currentColor"
              >
                <g>
                  <circle cx="16" cy="16" r="16" fill="#25D366"/>
                  <path
                    d="M24.5 9.5A8.94 8.94 0 0016 6.5c-4.97 0-9 4.03-9 9 0 1.59.42 3.14 1.22 4.51L7 25l5.13-1.34A8.97 8.97 0 0016 25c4.97 0 9-4.03 9-9 0-2.39-.95-4.64-2.5-6.5zm-8.5 13c-1.44 0-2.85-.39-4.07-1.13l-.29-.17-3.04.8.8-2.97-.19-.3A7.01 7.01 0 019 15.5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7zm3.62-5.01c-.21.6-1.23 1.16-1.7 1.23-.44.07-1 .11-1.61-.11-.37-.13-.85-.28-1.46-.57-2.57-1.12-4.25-3.67-4.38-3.86-.13-.19-1.04-1.4-1.04-2.68 0-1.28.66-1.91.9-2.17.24-.26.52-.32.7-.32.18 0 .36.01.51.01.16 0 .38-.06.6.45.22.51.72 1.77.78 1.9.06.13.1.29.02.47-.09.18-.13.28-.25.44-.12.16-.26.34-.38.45-.12.12-.25.24-.1.47.15.23.62.99 1.33 1.61.91.8 1.68 1.05 1.93 1.17.25.12.39.1.53-.06.14-.16.6-.7.76-.94.16-.24.32-.19.53-.11.21.08 1.36.64 1.6.76.24.12.4.18.46.28.06.1.06.56-.15 1.16z"
                    fill="#fff"
                  />
                </g>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right Side: Orb + Services Orbit */}
        <div className="relative flex items-center justify-center mt-6 md:mt-0">
          <div className="orb w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] animate-pulse-slow animate-zoom-pulse" />
          <div className="orb-ring animate-zoom-pulse" />

          {/* Orbiting chips - statically positioned */}
          <div className="absolute inset-0 pointer-events-none block transform scale-75 sm:scale-100">
            {/* Social Media Marketing - Top */}
            <div
              className="absolute left-1/2 animate-zoom-pulse"
              style={{
                top: '10%',
                transform: 'translateX(-50%)',
              }}
            >
              <div className="chip">Social Media Marketing</div>
            </div>
            {/* Website Development - Left */}
            <div
              className="absolute top-1/2 animate-zoom-pulse"
              style={{
                left: '8%',
                transform: 'translateY(-50%)',
              }}
            >
              <div className="chip">Website Development</div>
            </div>
            {/* UI/UX Design - Right */}
            <div
              className="absolute top-1/2 animate-zoom-pulse"
              style={{
                right: '8%',
                transform: 'translateY(-50%)',
              }}
            >
              <div className="chip">UI/UX Design</div>
            </div>
            {/* Video Production - Bottom Left */}
            <div
              className="absolute animate-zoom-pulse"
              style={{
                left: '18%',
                bottom: '12%',
              }}
            >
              <div className="chip">Video Production</div>
            </div>
            {/* Logo Design - Bottom Right */}
            <div
              className="absolute animate-zoom-pulse"
              style={{
                right: '18%',
                bottom: '12%',
              }}
            >
              <div className="chip">Logo Design</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
