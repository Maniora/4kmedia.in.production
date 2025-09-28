import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const SalaryAnimation = () => {
  const [animationData, setAnimationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/assets/illustrations/salary.json')
      .then(response => response.json())
      .then(data => {
        setAnimationData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to load salary animation:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f7e839]"></div>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#f7e839]/10 to-[#f7e839]/5 rounded-full">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#f7e839] rounded-full flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#11181f]">
              <path d="M12 1v22M5 6h14M5 12h14M5 18h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="text-[#f7e839] text-sm font-semibold">Salary Animation</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </div>
  );
};

export default SalaryAnimation;
