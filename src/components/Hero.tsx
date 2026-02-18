'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // 처음 로드 시 5초로 이동
      videoRef.current.currentTime = 5;
    }
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      // 영상이 끝나면 다시 5초로 이동 후 재생
      videoRef.current.currentTime = 5;
      videoRef.current.play();
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pointer-events-auto">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto pointer-events-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight"
        >
          Global Builder Gateway <br />
          <span className="text-primary italic">to APAC</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-10 font-medium"
        >
          April 13-19th, 2026 | Seoul, South Korea
        </motion.p>

        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center relative z-30 pointer-events-auto"
        >
          <a 
            href="/events"
            onClick={(e) => {
              console.log('See Events clicked');
            }}
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-600 transition-all transform hover:scale-105 text-center cursor-pointer relative z-30"
          >
            See Events
          </a>
          <a 
            href="/contact"
            onClick={(e) => {
              console.log('Join Community clicked');
            }}
            className="inline-block bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all transform hover:scale-105 text-center cursor-pointer relative z-30"
          >
            Join Community
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white opacity-50 pointer-events-none"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
