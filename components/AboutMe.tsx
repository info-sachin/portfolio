'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 py-16" id="aboutus">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Column - About Me Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-4"
        >
          <div className="text-start">
            <p className="uppercase tracking-widest text-sm text-blue-100 mb-4">
              More About Me
            </p>
            <h1 className="text-4xl font-bold">
              Hi there! I&apos;m
              <span className="ms-1 bg-gradient-to-r from-pink-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Sachin
              </span>
            </h1>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            I&apos;m Sachin Lakhara, a proactive full-stack developer passionate about creating dynamic web experiences and robust mobile applications.
            From frontend to backend—and everything in between—I thrive on solving complex problems with clean, efficient code.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            While I work across the full stack with technologies like React, Next.js, and Node.js, my primary focus lies in mobile app development.
            I&apos;m well-versed in building performant and user-friendly apps using Android (Java/Kotlin) and Flutter (Dart).
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            When I&apos;m not coding, I&apos;m exploring new ideas and staying curious. Life&apos;s about balance, and I love embracing every part of it.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            I believe in waking up each day eager to make a difference!
          </p>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden">
            <Image
              src="/QFS-Team-Sachin-removebg-preview.png"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
