'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { projects } from './data'
import { PinContainer } from './ui/3dPin'
import { FaLocationArrow } from 'react-icons/fa'

export const RecentProjects = () => {
  return (
    <div className="py-20" id='projects'>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        // viewport={{ once: true }}
        className="text-center"
      >
        <p className="uppercase tracking-widest text-sm text-blue-100 mb-4">
          WORK THAT SPEAKS
        </p>
        <h1 className="text-4xl font-bold">
          Curated{" "}
          <span className="bg-gradient-to-r from-pink-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
            work.
          </span>
        </h1>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            // transition={{ delay: idx * 0.1, duration: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            // viewport={{ once: true }}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer
              title={item.title}
              href={item.link || "https://example.com"}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  {/* background layer (optional) */}
                </div>
                <img
                  src={'/coming-soon.png'}
                  alt="cover"
                  className="z-10 absolute rounded-2xl"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                {/* <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={`icon-${index}`} className="p-2" />
                    </div>
                  ))}
                </div> */}

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
