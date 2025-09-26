import React, { useEffect, useState } from 'react';

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
  const projects = useCountUp(150, 2200);
  const roi = useCountUp(12, 2200);
  const retention = useCountUp(98, 2200);
  const years = useCountUp(1, 700);

  const typingTexts = [
    "Build. Market. Grow.",
    "Create. Engage. Convert.",
    "Design. Develop. Deliver.",
    "Innovate. Optimize. Scale."
  ];

  const typedText = useTypewriter(typingTexts, 40, 2000);

  return (
    <section 
      className="relative overflow-hidden py-15 min-h-screen flex items-center"
      style={{
        background: 'linear-gradient(135deg, #11181f 0%, #0d1117 100%)'
      }}
    >
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-30"
             style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f7e839' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '40px 40px'
        }}
      />

      {/* Animated illustrations */}
      <div className="pointer-events-none absolute inset-0">
        {/* Megaphone - top left */}
        <div className="absolute left-[6%] top-[18%] animate-float-slow">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="drop-shadow-illustration">
            <path d="M3 10v4a2 2 0 002 2h1l2 3 2-3h2l6-3V7l-6-3H9L6 3 5 6H5a2 2 0 00-2 2z" stroke="#f7e839" strokeWidth="1.4" fill="rgba(247,232,57,0.08)"/>
          </svg>
        </div>
        {/* Brackets - top right */}
        <div className="absolute right-[8%] top-[22%] animate-float">
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" className="drop-shadow-illustration">
            <path d="M6 4L2 8l4 4M18 4l4 4-4 4" stroke="#f7e839" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
        {/* Pen nib - middle left */}
        <div className="absolute left-[10%] top-[58%] animate-float">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="drop-shadow-illustration">
            <path d="M12 12l7-7 2 2-7 7-2 5-2-2 5-2z" stroke="#f7e839" strokeWidth="1.4" fill="rgba(247,232,57,0.06)"/>
          </svg>
        </div>
        {/* Chart - bottom right */}
        <div className="absolute right-[10%] bottom-[14%] animate-float-slow">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="drop-shadow-illustration">
            <path d="M4 18V6m6 12V9m6 9V4" stroke="#f7e839" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-[12%] md:top-[10%] -z-[1] right-0 w-[150px] h-[150px] bg-gradient-to-br from-[#f7e839]/20 to-[#f7e839]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-[96%] md:top-1/2 -z-[1] left-0 w-[150px] h-[150px] bg-gradient-to-br from-[#f7e839]/10 to-[#f7e839]/5 rounded-full blur-3xl"></div>
      
      <div className="absolute -top-[8%] -left-[33%] md:top-0 md:-left-[10%] w-[30rem] h-[30rem] rounded-full border-[0.7rem] border-[#f7e839] opacity-[0.02]"></div>
      <div className="absolute top-[20%] -right-[132%] md:-top-[10%] md:-right-[30%] w-[30rem] h-[30rem] rounded-full border-[0.7rem] border-[#f7e839] opacity-[0.02]"></div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          {/* Badge */}
          <div className="animate-fade-in">
            <span className="text-xs uppercase tracking-wider bg-[#f7e839]/10 border border-[#f7e839]/20 px-4 py-2 rounded-full font-medium">
              Premium Digital Agency
            </span>
          </div>
          
          {/* Main Heading with Typewriter */}
          <div className="relative">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Strategic Digital
              <br />
              <span className="text-[#f7e839] relative min-h-[1.2em] inline-block text-3xl md:text-4xl lg:text-5xl">
                <span className="inline-flex items-center">
                  {typedText}
                  <span className="inline-block w-1 h-8 md:h-10 bg-[#f7e839] ml-2 animate-pulse"></span>
                </span>
              </span>
            </h1>
            
            {/* Animated Underline */}
            <svg 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 md:w-96" 
                  viewBox="0 0 500 20" 
                  preserveAspectRatio="none"
                >
                  <path 
                d="M9.3,15.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2" 
                fill="none" 
                stroke="#f7e839" 
                    strokeWidth="2" 
                className="animate-dash"
                  />
                </svg>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Zero to viral, we make it happen.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4 animate-fade-in delay-500">
            {/* Projects */}
            <div className="group rounded-2xl bg-black/30 border border-white/20 p-8 mb-8 text-center hover:border-[#f7e839]/40 transition">
              <div className="mb-2 flex justify-center transition-transform duration-300 ease-out group-hover:scale-70">
                <svg width="72" height="72" viewBox="0 0 48 48" fill="none">
                  <path d="M8 34h32M10 30h28M12 26h24M16 14h16l4 12H12l4-12z" stroke="#d1d5db" stroke-width="2" stroke-linejoin="round"/>
                  </svg>
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 transition-transform duration-300 ease-out group-hover:scale-125">{projects}+</div>
              <div className="text-white/70 font-medium">Projects</div>
                </div>

            {/* Average ROI */}
            {/* Average ROI */}
            <div className="group rounded-2xl bg-black/30 border border-white/20 p-8 mb-8 text-center hover:border-[#f7e839]/40 transition">
              <div className="mb-2 flex justify-center transition-transform duration-300 ease-out group-hover:scale-70">
                <svg width="72" height="72" viewBox="0 0 48 48" fill="none">
                  <path d="M8 36l10-10 6 6 16-16" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 transition-transform duration-300 ease-out group-hover:scale-125">{roi}x</div>
              <div className="text-white/70 font-medium">Average ROI</div>
      </div>

            {/* Client Retention */}
            <div className="group rounded-2xl bg-black/30 border border-white/20 p-8 mb-8 text-center hover:border-[#f7e839]/40 transition">
              <div className="mb-2 flex justify-center transition-transform duration-300 ease-out group-hover:scale-70">
                <svg width="72" height="72" viewBox="0 0 48 48" fill="none">
                  <path d="M24 42s-14-8.7-14-20a14 14 0 1128 0c0 11.3-14 20-14 20z" stroke="#d1d5db" strokeWidth="2" fill="none"/>
                  <circle cx="24" cy="20" r="5" stroke="#d1d5db" strokeWidth="2"/>
                </svg>
            </div>
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 transition-transform duration-300 ease-out group-hover:scale-125">{retention}%</div>
              <div className="text-white/70 font-medium">Client Retention</div>
            </div>

            {/* Years Experience */}
            <div className="group rounded-2xl bg-black/30 border border-white/20 p-8 mb-8 text-center hover:border-[#f7e839]/40 transition">
              <div className="mb-2 flex justify-center transition-transform duration-300 ease-out group-hover:scale-70">
                <svg width="72" height="72" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="16" stroke="#d1d5db" strokeWidth="2"/>
                  <path d="M24 14v10l6 4" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round"/>
                </svg>
          </div>
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 transition-transform duration-300 ease-out group-hover:scale-125">{years}+</div>
              <div className="text-white/70 font-medium">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-slide-up delay-700">
            <a
              href="/contact"
              className="px-8 py-4 rounded-lg border border-[#f7e839]/60 bg-gradient-to-br from-red-900/30 to-transparent text-white font-semibold text-base shadow-md hover:bg-red-600/10 hover:border-red-400 transition-all duration-200 hover:shadow-lg"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="px-8 py-4 rounded-lg border border-[#f7e839]/60 bg-gradient-to-br from-yellow-900/20 to-transparent text-white font-semibold text-base shadow-md hover:bg-[#f7e839]/10 hover:border-[#f7e839] transition-all duration-200 hover:shadow-lg"
            >
              Explore Services
            </a>
            <a
              href="https://wa.me/9989958238"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-lg border border-[#f7e839]/60 bg-gradient-to-br from-[#128C7E]/10 to-transparent text-white font-semibold text-base flex items-center justify-center gap-2 shadow-md hover:bg-[#128C7E]/20 hover:border-[#25D366] transition-all duration-200 hover:shadow-lg"
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
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0) }
          50% { transform: translateY(-10px) }
          100% { transform: translateY(0) }
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float 9s ease-in-out infinite; }
        
        .animate-dash {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: dash 3s linear infinite;
        }
        .drop-shadow-illustration { filter: drop-shadow(0 8px 18px rgba(0,0,0,0.35)); }
        
        .delay-500 {
          animation-delay: 0.5s;
          animation-fill-mode: both;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
          animation-fill-mode: both;
        }
        
        .delay-1000 {
          animation-delay: 1s;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
};

export default Hero;