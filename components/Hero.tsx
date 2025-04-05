'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { MagicButton } from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

export const Hero = () => {
  return (
    <div className='pb-20 pt-36' id="home">
      {/* Spotlights */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid BG Layer */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Animated Hero Content */}
      <div className="flex justify-center relative my-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center"
        >
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Tech That Fits Your Business Goals
          </p>

          <TextGenerateEffect
            duration={2}
            filter={false}
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words="I'm Sachin, A Full-Stack Mobile App Developer"
          />

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Over the past 5 years, I&apos;ve collaborated with a diverse range of clients, from startups to established businesses.
            I bring a passion for creating seamless digital experiences and solving complex problems through code. Let&apos;s work together to create something amazing!
          </p>

          <a href="#about">
            <MagicButton
              handleClick={() => { }}
              title="Show my work"
              icons={<FaLocationArrow />}
              position="right"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};
